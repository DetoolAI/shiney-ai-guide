import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
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
    const { firstName, lastName, email, phone, company, message } = await req.json()

    // Comprehensive input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!firstName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      )
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      )
    }

    // Validate field lengths
    if (firstName.length > 50 || (lastName && lastName.length > 50) || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Input exceeds maximum length' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      )
    }

    // HTML sanitization function
    const sanitizeHtml = (input: string) => {
      return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
    }

    // Sanitize all inputs
    const sanitizedFirstName = sanitizeHtml(firstName.trim())
    const sanitizedLastName = sanitizeHtml(lastName?.trim() || '')
    const sanitizedEmail = email.trim()
    const sanitizedPhone = sanitizeHtml(phone?.trim() || '')
    const sanitizedCompany = sanitizeHtml(company?.trim() || '')
    const sanitizedMessage = sanitizeHtml(message.trim()).replace(/\n/g, '<br>')

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
      <p><strong>Email:</strong> ${sanitizedEmail}</p>
      <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${sanitizedCompany || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizedMessage}</p>
    `

    console.log('Attempting to send email with Resend...')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Detool.AI Contact Form <noreply@detoolai.com>',
        to: ['detoolai@gmail.com'],
        subject: `New Contact Form Submission from ${sanitizedFirstName} ${sanitizedLastName}`,
        html: emailContent,
        reply_to: sanitizedEmail,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error:', response.status, errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      )
    }

    const emailResult = await response.json()
    console.log('Email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
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