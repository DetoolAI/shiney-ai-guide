import type { VercelRequest, VercelResponse } from "@vercel/node";

const TEAM_EMAIL = process.env.TEAM_NOTIFY_EMAIL || "detoolai@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Detool.AI <onboarding@resend.dev>";
const NUDGE_URL = process.env.ONBOARDING_NUDGE_URL || "https://links.detool.ai/api/register-nudge";

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
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body || {};
  const fullName = String(body.fullName || "").trim();
  const legalBusinessName = String(body.legalBusinessName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();

  if (!fullName || !email || !legalBusinessName) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const team = await sendResendEmail({
    to: [TEAM_EMAIL],
    subject: `✅ FORM DONE — build now: ${legalBusinessName}`,
    html: `
      <h2 style="color:#c2410c">Form complete — start building</h2>
      <p>10-day clock starts now.</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Business:</strong> ${legalBusinessName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "n/a"}</p>
      <hr/>
      <pre style="white-space:pre-wrap;font-size:12px">${JSON.stringify(body, null, 2)}</pre>
    `,
  });

  if (!team.ok) {
    res.status(500).json({ error: team.error || "Failed to email team" });
    return;
  }

  const customer = await sendResendEmail({
    to: [email],
    subject: "We're building your Detool.AI system",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111;max-width:560px">
        <h2>We're building — you can relax</h2>
        <p>Hi ${fullName},</p>
        <p>We got your onboarding form for <strong>${legalBusinessName}</strong>. The 10-day build starts now.</p>
        <p style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:14px 16px">
          <strong>What happens next</strong><br/>
          Days 1–10: we build your system.<br/>
          Day 10: it goes live — you do nothing.
        </p>
        <p><strong>Reply with your logo + 3 photos</strong> if you haven't already and we move even faster.</p>
      </div>
    `,
  });

  let nudgeCanceled = false;
  const secret = process.env.ONBOARDING_NUDGE_SECRET || process.env.NUDGE_SECRET;
  if (secret) {
    try {
      const cancelRes = await fetch(NUDGE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ email, complete: true }),
      });
      const cancelData = (await cancelRes.json().catch(() => ({}))) as { canceled?: boolean };
      nudgeCanceled = Boolean(cancelRes.ok && cancelData.canceled);
    } catch {
      nudgeCanceled = false;
    }
  }

  res.status(200).json({
    ok: true,
    teamId: team.id,
    customerOk: customer.ok,
    customerId: customer.id,
    customerError: customer.error,
    nudgeCanceled,
  });
}
