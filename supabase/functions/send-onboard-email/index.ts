import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  console.log('Client onboard email function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight')
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    )
  }

  try {
    console.log('Processing client onboard form submission')
    const formData = await req.json()
    console.log('Form data received:', Object.keys(formData))
    
    const { 
      fullName, 
      legalBusinessName, 
      phone, 
      website, 
      email, 
      openingHours, 
      salesRepInfo, 
      callsPerHour, 
      forwardCalls, 
      crmName, 
      leadInfo, 
      companyInfo, 
      valuePropositions, 
      specialPromotions 
    } = formData
    
    if (!fullName || !email || !legalBusinessName) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      )
    }

    // Check if API key exists
    const apiKey = Deno.env.get("RESEND_API_KEY")
    console.log('API key check:', !!apiKey, 'Length:', apiKey?.length || 0)
    
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      )
    }

    // Send email using Resend API
    console.log('Sending client onboard email via Resend API')
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Client Onboard <onboarding@resend.dev>',
        to: ['detoolai@gmail.com'],
        subject: `New Client Onboarding Submission - ${legalBusinessName}`,
        html: `
          <h2>New Client Onboarding Submission</h2>
          
          <h3>Basic Information</h3>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Legal Business Name:</strong> ${legalBusinessName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
          
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
      }),
    })

    const emailData = await emailRes.json()
    console.log('Resend response status:', emailRes.status)
    console.log('Resend response:', emailData)

    if (!emailRes.ok) {
      console.error('Resend API error:', emailData)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: emailData.message || 'Unknown error'
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      )
    }

    console.log('Client onboard email sent successfully!')
    return new Response(
      JSON.stringify({ 
        message: 'Client onboard form submitted successfully!',
        id: emailData.id 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    )

  } catch (error) {
    console.error('Function error:', error.message)
    console.error('Error stack:', error.stack)
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    )
  }
})