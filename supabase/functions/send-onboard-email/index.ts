import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

const TEAM_EMAIL = Deno.env.get("TEAM_NOTIFY_EMAIL") ?? "detoolai@gmail.com"
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "Detool.AI <onboarding@resend.dev>"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }

  try {
    const formData = await req.json()
    const {
      fullName,
      legalBusinessName,
      phone,
      email,
      openingHours,
      salesRepInfo,
      callsPerHour,
      forwardCalls,
      crmName,
      leadInfo,
      companyInfo,
      valuePropositions,
      specialPromotions,
    } = formData

    if (!fullName || !email || !legalBusinessName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    const apiKey = Deno.env.get("RESEND_API_KEY")
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    const send = async (payload: Record<string, unknown>) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      return { ok: res.ok, data }
    }

    const team = await send({
      from: FROM_EMAIL,
      to: [TEAM_EMAIL],
      subject: `✅ FORM DONE — build now: ${legalBusinessName}`,
      html: `
          <h2 style="color:#c2410c">Form complete — start building</h2>
          <p>10-day clock starts now.</p>
          
          <h3>Basic Information</h3>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Legal Business Name:</strong> ${legalBusinessName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <h3>Communication & Sales Setup</h3>
          <p><strong>Opening Hours:</strong> ${openingHours}</p>
          <p><strong>Sales Rep Info:</strong> ${salesRepInfo}</p>
          <p><strong>Calls per 30 minutes:</strong> ${callsPerHour}</p>
          <p><strong>Forward Calls:</strong> ${forwardCalls ? 'Yes' : 'No'}</p>
          <p><strong>CRM Name:</strong> ${crmName}</p>
          
          <h3>Company & Lead Information</h3>
          <p><strong>Lead Information:</strong></p>
          <p>${leadInfo}</p>
          
          <p><strong>Company Information:</strong></p>
          <p>${companyInfo}</p>
          
          <p><strong>Value Propositions:</strong></p>
          <p>${valuePropositions}</p>
          
          ${specialPromotions ? `
            <p><strong>Special Promotions:</strong></p>
            <p>${specialPromotions}</p>
          ` : ''}
          
          <hr>
          <p><small>Submitted at: ${new Date().toISOString()}</small></p>
        `,
    })

    if (!team.ok) {
      return new Response(JSON.stringify({
        error: 'Failed to send team email',
        details: team.data?.message || 'Unknown error',
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    const customer = await send({
      from: FROM_EMAIL,
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
          <p>Reply with your logo + 3 photos if you haven't already.</p>
        </div>
      `,
    })

    // Best-effort: cancel 48h nudge registered on links.detool.ai
    let nudgeCanceled = false
    const nudgeSecret = Deno.env.get("ONBOARDING_NUDGE_SECRET") || Deno.env.get("NUDGE_SECRET")
    if (nudgeSecret) {
      try {
        const completeUrl = Deno.env.get("ONBOARDING_COMPLETE_URL") || "https://links.detool.ai/api/register-nudge"
        const res = await fetch(completeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${nudgeSecret}`,
          },
          body: JSON.stringify({ email, complete: true }),
        })
        const data = await res.json().catch(() => ({}))
        nudgeCanceled = Boolean(res.ok && data?.canceled)
      } catch {
        nudgeCanceled = false
      }
    }

    return new Response(JSON.stringify({
      message: 'Onboarding received — build started emails sent',
      teamId: team.data?.id,
      customerOk: customer.ok,
      customerId: customer.data?.id,
      nudgeCanceled,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Internal server error',
      details: error.message,
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})
