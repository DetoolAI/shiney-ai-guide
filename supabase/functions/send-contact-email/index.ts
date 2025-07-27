import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 
      "Access-Control-Allow-Origin": "https://detoolai.com",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY"
    }})
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
            "Access-Control-Allow-Origin": "https://detoolai.com",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY"
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
            "Access-Control-Allow-Origin": "https://detoolai.com",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY"
          } 
        }
      )
    }

    // Validate field lengths and sanitize input
    if (firstName.length > 50 || lastName.length > 50 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Input exceeds maximum length' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://detoolai.com",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY"
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

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Detool.AI Contact Form <noreply@detoolai.com>',
        to: ['detoolai@gmail.com'],
        subject: `New Contact Form Submission from ${sanitizedFirstName} ${sanitizedLastName}`,
        html: emailContent,
        reply_to: email,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ message: 'Email sent successfully' }),
        { 
          status: 200, 
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://detoolai.com",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY"
          }
        }
      )
    } else {
      const error = await res.text()
      console.error('Resend API error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://detoolai.com",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY"
          }
        }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://detoolai.com",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY"
        }
      }
    )
  }
})