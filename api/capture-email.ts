import type { VercelRequest, VercelResponse } from "@vercel/node";

const ONBOARDING_URL = process.env.ONBOARDING_FORM_URL || "https://www.detool.ai/client-onboard-form";
const TEAM_EMAIL = process.env.TEAM_NOTIFY_EMAIL || "detoolai@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Detool.AI <onboarding@resend.dev>";

async function sendResendEmail(args: {
  to: string[];
  subject: string;
  html: string;
}): Promise<{ ok: boolean; error?: string }> {
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

  const data = (await res.json()) as { message?: string };
  if (!res.ok) return { ok: false, error: data?.message || "Resend error" };
  return { ok: true };
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

  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const source = typeof req.body?.source === "string" ? req.body.source : "site";

  if (!email || !email.includes("@")) {
    res.status(400).json({ error: "Valid email required" });
    return;
  }

  const customer = await sendResendEmail({
    to: [email],
    subject: "Your Detool.AI onboarding form",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
        <h2>Here's your onboarding form</h2>
        <p>Fill this out so we can start building today:</p>
        <p style="margin:24px 0">
          <a href="${ONBOARDING_URL}" style="background:#f97316;color:#fff;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block">
            Complete onboarding form
          </a>
        </p>
        <p><strong>Reply with your logo + 3 photos and I start today.</strong></p>
        <p style="color:#666;font-size:14px">Or open: <a href="${ONBOARDING_URL}">${ONBOARDING_URL}</a></p>
      </div>
    `,
  });

  const team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `Email capture — ${email} (${source})`,
    html: `
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Source:</strong> ${source}</p>
      <p>They asked to be sent the onboarding form. Follow up if needed.</p>
    `,
  });

  if (!customer.ok) {
    res.status(500).json({ error: customer.error || "Failed to email customer" });
    return;
  }

  res.status(200).json({ ok: true, teamNotified: team.ok });
}
