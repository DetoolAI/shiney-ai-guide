import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHmac, timingSafeEqual } from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ONBOARDING_URL = process.env.ONBOARDING_FORM_URL || "https://links.detool.ai";
const THANK_YOU_URL = process.env.THANK_YOU_URL || "https://www.detool.ai/thank-you";
const TEAM_EMAIL = process.env.TEAM_NOTIFY_EMAIL || "detoolai@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Detool.AI <onboarding@resend.dev>";

async function readRawBody(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function verifyStripeSignature(payload: Buffer, header: string | undefined, secret: string): boolean {
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

  const signed = `${timestamp}.${payload.toString("utf8")}`;
  const expected = createHmac("sha256", secret).update(signed, "utf8").digest("hex");
  const expectedBuf = Buffer.from(expected, "utf8");
  const signatureBuf = Buffer.from(signature, "utf8");
  if (expectedBuf.length !== signatureBuf.length) return false;
  return timingSafeEqual(expectedBuf, signatureBuf);
}

async function registerNudgeWithOnboardingForm(
  email: string,
  resendId: string,
): Promise<{ ok: boolean; error?: string }> {
  if (!resendId) return { ok: false, error: "Missing resendId" };
  const secret = process.env.ONBOARDING_NUDGE_SECRET || process.env.NUDGE_SECRET;
  const endpoint =
    process.env.ONBOARDING_NUDGE_URL || "https://links.detool.ai/api/register-nudge";
  if (!secret) return { ok: false, error: "Missing ONBOARDING_NUDGE_SECRET" };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({ email, resendId }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "register failed" };
  }
}

async function sendResendEmail(args: {
  to: string[];
  subject: string;
  html: string;
  scheduledAt?: string;
}): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "Missing RESEND_API_KEY" };

  const body: Record<string, unknown> = {
    from: FROM_EMAIL,
    to: args.to,
    subject: args.subject,
    html: args.html,
  };
  if (args.scheduledAt) body.scheduled_at = args.scheduledAt;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await res.json()) as { id?: string; message?: string };
  if (!res.ok) return { ok: false, error: data?.message || "Resend error" };
  return { ok: true, id: data.id };
}

function customerWelcomeHtml(name: string) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111;max-width:560px">
      <h2 style="margin:0 0 12px">You're in — Detool.AI</h2>
      <p>Hi ${name},</p>
      <p>Your <strong>$297/mo</strong> subscription is active. Stripe sent your receipt separately.</p>
      <p style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:14px 16px">
        <strong>Reply with your logo + 3 photos and I start today.</strong>
      </p>
      <p>Then fill the onboarding form so we can build your system (10 days):</p>
      <p style="margin:28px 0">
        <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
          Complete onboarding form
        </a>
      </p>
      <p style="color:#555;font-size:14px">
        What happens next:<br/>
        1) Form today → 2) We build (10 days) → 3) It goes live, you do nothing
      </p>
      <p style="color:#666;font-size:13px">
        Thank-you page: <a href="${THANK_YOU_URL}">${THANK_YOU_URL}</a><br/>
        Form: <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a>
      </p>
    </div>
  `;
}

function nudgeHtml(name: string) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111;max-width:560px">
      <h2 style="margin:0 0 12px">Quick nudge — we can't start without your form</h2>
      <p>Hi ${name},</p>
      <p>You subscribed 48 hours ago, but we still don't have your onboarding form. That's where ~80% of delays happen.</p>
      <p style="margin:28px 0">
        <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
          Fill the form now (5 min)
        </a>
      </p>
      <p><strong>Or reply with your logo + 3 photos and I start today.</strong></p>
      <p style="color:#666;font-size:13px">Already sent it? Ignore this — we're on it.</p>
    </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    res.status(500).json({ error: "Webhook not configured" });
    return;
  }

  const payload = await readRawBody(req);
  const signature = req.headers["stripe-signature"];
  const signatureHeader = Array.isArray(signature) ? signature[0] : signature;

  if (!verifyStripeSignature(payload, signatureHeader, webhookSecret)) {
    res.status(400).json({ error: "Invalid signature" });
    return;
  }

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(payload.toString("utf8"));
  } catch {
    res.status(400).json({ error: "Invalid JSON" });
    return;
  }

  if (event.type !== "checkout.session.completed") {
    res.status(200).json({ received: true, ignored: event.type });
    return;
  }

  const session = event.data.object;
  const details = session.customer_details as { email?: string; name?: string; phone?: string } | null;
  const email =
    details?.email ||
    (typeof session.customer_email === "string" ? session.customer_email : null);
  const name = details?.name || "there";
  const phone = details?.phone || "";
  const amountTotal =
    typeof session.amount_total === "number"
      ? `$${(session.amount_total / 100).toFixed(2)}`
      : "$297.00";

  const results: Record<string, unknown> = { email };

  if (email) {
    results.customer = await sendResendEmail({
      to: [email],
      subject: "You're in — check email + finish onboarding",
      html: customerWelcomeHtml(name),
    });

    // 48h nudge if the form never comes back (canceled when they submit onboarding)
    const in48h = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
    results.nudge48h = await sendResendEmail({
      to: [email],
      subject: "Still need your Detool.AI onboarding form",
      html: nudgeHtml(name),
      scheduledAt: in48h,
    });

    if (results.nudge48h && (results.nudge48h as { ok?: boolean; id?: string }).ok) {
      results.nudgeRegistered = await registerNudgeWithOnboardingForm(
        email,
        (results.nudge48h as { id?: string }).id || "",
      );
    }
  } else {
    results.customer = { ok: false, error: "No customer email on session" };
  }

  // New-order alert — build within the hour
  results.team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `🚨 NEW ORDER — build within the hour${email ? ` — ${email}` : ""}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
        <h2 style="color:#c2410c">NEW ORDER — start within 1 hour</h2>
        <p><strong>Email:</strong> ${email || "unknown"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || "n/a"}</p>
        <p><strong>Amount:</strong> ${amountTotal}/mo</p>
        <p><strong>Session:</strong> ${session.id || "n/a"}</p>
        <hr/>
        <p><strong>Customer next steps we sent:</strong></p>
        <ol>
          <li>Receipt (Stripe) + reply with logo + 3 photos</li>
          <li>Onboarding form: <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a></li>
          <li>48h nudge scheduled if form not done</li>
        </ol>
        <p>Thank-you page: <a href="${THANK_YOU_URL}">${THANK_YOU_URL}</a></p>
      </div>
    `,
  });

  res.status(200).json({ received: true, results });
}
