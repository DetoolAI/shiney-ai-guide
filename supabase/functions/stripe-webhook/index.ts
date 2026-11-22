import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createHmac } from "https://deno.land/std@0.168.0/node/crypto.ts";

const ONBOARDING_URL = Deno.env.get("ONBOARDING_FORM_URL") ?? "https://links.detool.ai";
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

  const signed = `${timestamp}.${payload}`;
  const expected = createHmac("sha256", secret).update(signed).digest("hex");
  return timingSafeEqual(expected, signature);
}

async function sendResendEmail(args: {
  to: string[];
  subject: string;
  html: string;
}): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return { ok: false, error: "Missing RESEND_API_KEY" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: args.to,
      subject: args.subject,
      html: args.html,
    }),
  });

  const data = await res.json();
  if (!res.ok) return { ok: false, error: data?.message || "Resend error" };
  return { ok: true, id: data.id };
}

function customerEmailFromSession(session: Record<string, unknown>): string | null {
  const details = session.customer_details as { email?: string } | null;
  if (details?.email) return details.email;
  if (typeof session.customer_email === "string" && session.customer_email) {
    return session.customer_email;
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

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
  const signature = req.headers.get("stripe-signature");

  if (!verifyStripeSignature(payload, signature, webhookSecret)) {
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(payload);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true, ignored: event.type }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const session = event.data.object;
  const email = customerEmailFromSession(session);
  const name =
    (session.customer_details as { name?: string } | null)?.name ||
    "there";
  const amountTotal =
    typeof session.amount_total === "number"
      ? `$${(session.amount_total / 100).toFixed(2)}`
      : "your plan";

  const results: Record<string, unknown> = { email };

  if (email) {
    results.customer = await sendResendEmail({
      to: [email],
      subject: "You're in — finish Detool.AI onboarding",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
          <h2>Welcome to Detool.AI</h2>
          <p>Hi ${name},</p>
          <p>Your subscription is active. Next step: fill out the onboarding form so we can build your system in 10 days.</p>
          <p style="margin:28px 0">
            <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
              Complete onboarding form
            </a>
          </p>
          <p>Or open this link: <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a></p>
          <p style="color:#666;font-size:14px">Questions? Reply to this email or reach us at ${TEAM_EMAIL}.</p>
        </div>
      `,
    });
  } else {
    results.customer = { ok: false, error: "No customer email on session" };
  }

  results.team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `New Detool.AI subscriber${email ? ` — ${email}` : ""}`,
    html: `
      <h2>New paid subscriber</h2>
      <p><strong>Email:</strong> ${email || "unknown"}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Amount:</strong> ${amountTotal}</p>
      <p><strong>Session:</strong> ${session.id || "n/a"}</p>
      <p><strong>Onboarding form:</strong> <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a></p>
      <p>Customer ${email ? "was emailed the onboarding link" : "had no email — follow up manually"}.</p>
    `,
  });

  return new Response(JSON.stringify({ received: true, results }), {
    status: 200,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
});
