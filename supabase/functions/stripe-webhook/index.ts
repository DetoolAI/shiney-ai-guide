import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createHmac } from "https://deno.land/std@0.168.0/node/crypto.ts";

const ONBOARDING_URL = Deno.env.get("ONBOARDING_FORM_URL") ?? "https://links.detool.ai";
const THANK_YOU_URL = Deno.env.get("THANK_YOU_URL") ?? "https://www.detool.ai/thank-you";
const TEAM_EMAIL = Deno.env.get("TEAM_NOTIFY_EMAIL") ?? "detoolai@gmail.com";
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "Detool.AI <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, stripe-signature",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

function verifyStripeSignature(payload: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const [k, v] = p.split("=");
      return [k.trim(), v];
    }),
  );
  const timestamp = parts["t"];
  const signature = parts["v1"];
  if (!timestamp || !signature) return false;
  const ageSec = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(ageSec) || ageSec > 300) return false;
  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  return timingSafeEqual(expected, signature);
}

async function sendResendEmail(args: {
  to: string[];
  subject: string;
  html: string;
  scheduledAt?: string;
}) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return { ok: false as const, error: "Missing RESEND_API_KEY" };
  const body: Record<string, unknown> = {
    from: FROM_EMAIL,
    to: args.to,
    subject: args.subject,
    html: args.html,
  };
  if (args.scheduledAt) body.scheduled_at = args.scheduledAt;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) return { ok: false as const, error: data?.message || "Resend error" };
  return { ok: true as const, id: data.id as string };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!webhookSecret) {
    return new Response(JSON.stringify({ error: "Webhook not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const payload = await req.text();
  if (!verifyStripeSignature(payload, req.headers.get("stripe-signature"), webhookSecret)) {
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const event = JSON.parse(payload);
  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true, ignored: event.type }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const session = event.data.object;
  const details = session.customer_details || {};
  const email = details.email || session.customer_email || null;
  const name = details.name || "there";
  const phone = details.phone || "";
  const amountTotal =
    typeof session.amount_total === "number" ? `$${(session.amount_total / 100).toFixed(2)}` : "$297.00";

  const results: Record<string, unknown> = { email };

  if (email) {
    results.customer = await sendResendEmail({
      to: [email],
      subject: "You're in — check email + finish onboarding",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111;max-width:560px">
          <h2>You're in — Detool.AI</h2>
          <p>Hi ${name},</p>
          <p>Your <strong>$297/mo</strong> subscription is active. Stripe sent your receipt separately.</p>
          <p style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:14px 16px">
            <strong>Reply with your logo + 3 photos and I start today.</strong>
          </p>
          <p style="margin:28px 0">
            <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
              Complete onboarding form
            </a>
          </p>
          <p style="color:#555;font-size:14px">1) Form today → 2) We build (10 days) → 3) It goes live</p>
        </div>
      `,
    });

    results.nudge48h = await sendResendEmail({
      to: [email],
      subject: "Still need your Detool.AI onboarding form",
      scheduledAt: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111;max-width:560px">
          <h2>Quick nudge — we can't start without your form</h2>
          <p>Hi ${name},</p>
          <p>You subscribed 48 hours ago, but we still don't have your onboarding form.</p>
          <p style="margin:28px 0">
            <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
              Fill the form now (5 min)
            </a>
          </p>
          <p><strong>Or reply with your logo + 3 photos and I start today.</strong></p>
        </div>
      `,
    });
  }

  results.team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `🚨 NEW ORDER — build within the hour${email ? ` — ${email}` : ""}`,
    html: `
      <h2 style="color:#c2410c">NEW ORDER — start within 1 hour</h2>
      <p><strong>Email:</strong> ${email || "unknown"}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone || "n/a"}</p>
      <p><strong>Amount:</strong> ${amountTotal}/mo</p>
      <p>Form: <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a></p>
      <p>Thank-you: <a href="${THANK_YOU_URL}">${THANK_YOU_URL}</a></p>
    `,
  });

  return new Response(JSON.stringify({ received: true, results }), {
    status: 200,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
});
