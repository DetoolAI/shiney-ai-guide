import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  console.log('Function called with method:', req.method)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request')
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    })
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    )
  }

  try {
    console.log('Processing POST request')
    const body = await req.json()
    console.log('Request body received:', JSON.stringify(body, null, 2))

    const { firstName, lastName, email, phone, company, message } = body

    // Basic validation
    if (!firstName || !email || !message) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields: firstName, email, and message are required' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      )
    }

    // Check if RESEND_API_KEY exists
    const apiKey = Deno.env.get('RESEND_API_KEY')
    if (!apiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      )
    }

    console.log('RESEND_API_KEY found, preparing email...')

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[<>&"]/g, '')
    
    const emailData = {
      from: 'contact@resend.dev', // Using resend.dev default for testing
      to: ['detoolai@gmail.com'],
      subject: `Contact Form: ${sanitize(firstName)} ${sanitize(lastName || '')}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitize(firstName)} ${sanitize(lastName || '')}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Phone:</strong> ${sanitize(phone || 'Not provided')}</p>
        <p><strong>Company:</strong> ${sanitize(company || 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
      `,
      reply_to: email,
    }

    console.log('Sending email with data:', JSON.stringify(emailData, null, 2))

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(emailData),
    })

    console.log('Resend API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error:', response.status, errorText)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email', 
          details: `API returned ${response.status}: ${errorText}` 
        }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      )
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully',
        id: result.id 
      }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    )
  }
})