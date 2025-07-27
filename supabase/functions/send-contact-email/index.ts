import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  console.log('=== FUNCTION INVOKED ===')
  console.log('Method:', req.method)
  console.log('Headers:', Object.fromEntries(req.headers.entries()))
  
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request')
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    console.log('Invalid method:', req.method)
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }

  try {
    console.log('=== PARSING REQUEST BODY ===')
    const body = await req.json()
    console.log('Received data:', body)
    
    const { firstName, lastName, email, phone, company, message } = body

    console.log('=== VALIDATING FIELDS ===')
    console.log('firstName:', firstName)
    console.log('email:', email) 
    console.log('message length:', message?.length)

    if (!firstName || !email || !message) {
      console.log('Validation failed - missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    console.log('=== CHECKING API KEY ===')
    const apiKey = Deno.env.get("RESEND_API_KEY")
    console.log('API key exists:', !!apiKey)
    console.log('API key length:', apiKey?.length || 0)

    if (!apiKey) {
      console.error('No RESEND_API_KEY found in environment')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    console.log('=== SENDING EMAIL ===')
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["detoolai@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName || ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("Email sent successfully:", emailResponse)

    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully!',
        id: emailResponse.data?.id 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    )

  } catch (error) {
    console.error("=== ERROR DETAILS ===")
    console.error("Error type:", error.constructor.name)
    console.error("Error message:", error.message)
    console.error("Error stack:", error.stack)
    console.error("Full error object:", error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message,
        type: error.constructor.name
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }
})