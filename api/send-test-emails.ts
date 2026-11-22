import type { VercelRequest, VercelResponse } from "@vercel/node";

const ONBOARDING_URL = process.env.ONBOARDING_FORM_URL || "https://links.detool.ai";
const THANK_YOU_URL = process.env.THANK_YOU_URL || "https://www.detool.ai/thank-you";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Detool.AI <onboarding@resend.dev>";
const TEAM_EMAIL = process.env.TEAM_NOTIFY_EMAIL || "detoolai@gmail.com";

async function sendResendEmail(args: {
  to: string[];
  subject: string;
  html: string;
}): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
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

  const data = (await res.json()) as { id?: string; message?: string };
  if (!res.ok) return { ok: false, error: data?.message || "Resend error" };
  return { ok: true, id: data.id };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const secret = typeof req.body?.secret === "string" ? req.body.secret : "";
  const expected = process.env.TEST_EMAIL_SECRET || "detool-test-send";

  if (secret !== expected) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!email || !email.includes("@")) {
    res.status(400).json({ error: "Valid email required" });
    return;
  }

  const name = "Justin";

  const welcome = await sendResendEmail({
    to: [email],
    subject: "You're in — check email + finish onboarding",
    html: `
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
        <p style="color:#999;font-size:12px">[TEST EMAIL — welcome/onboarding]</p>
      </div>
    `,
  });

  const reminder = await sendResendEmail({
    to: [email],
    subject: "Still need your Detool.AI onboarding form",
    html: `
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
        <p style="color:#999;font-size:12px">[TEST EMAIL — 48h reminder, sent immediately]</p>
      </div>
    `,
  });

  const team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `🚨 NEW ORDER — build within the hour — ${email} [TEST]`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
        <h2 style="color:#c2410c">NEW ORDER — start within 1 hour [TEST]</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p>This was a manual test send of the post-purchase email flow.</p>
      </div>
    `,
  });

  res.status(200).json({ welcome, reminder, team });
}
