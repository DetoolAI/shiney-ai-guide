import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHmac, timingSafeEqual } from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ONBOARDING_URL = process.env.ONBOARDING_FORM_URL || "https://links.detool.ai";
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
  const details = session.customer_details as { email?: string; name?: string } | null;
  const email =
    details?.email ||
    (typeof session.customer_email === "string" ? session.customer_email : null);
  const name = details?.name || "there";
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

  res.status(200).json({ received: true, results });
}
