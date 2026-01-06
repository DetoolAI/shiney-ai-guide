import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  console.log('Demo request function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
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
    const body = await req.json()
    console.log('Demo request received:', { firstName: body.firstName, email: body.email })
    
    const { firstName, email, phone } = body
    
    if (!firstName || !email || !phone) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      )
    }

    const apiKey = Deno.env.get("RESEND_API_KEY")
    
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

    // Send notification email to detoolai@gmail.com
    console.log('Sending demo request notification email')
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Detool.AI Demo Request <onboarding@resend.dev>',
        to: ['detoolai@gmail.com'],
        subject: `🎯 New Demo Request from ${firstName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Demo Request!</h2>
            <p>Someone just requested a demo through your landing page:</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Contact within 24 hours</li>
              <li>Schedule a personalized demo</li>
            </ul>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              This lead came from your conversion-optimized landing page.
            </p>
          </div>
        `,
      }),
    })

    const emailData = await emailRes.json()
    console.log('Resend response status:', emailRes.status)

    if (!emailRes.ok) {
      console.error('Resend API error:', emailData)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send notification',
          details: emailData.message || 'Unknown error'
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      )
    }

    console.log('Demo request email sent successfully!')
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Demo request received!'
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    )

  } catch (error) {
    console.error('Function error:', error.message)
    
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
