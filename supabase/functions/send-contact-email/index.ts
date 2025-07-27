import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  console.log('=== FUNCTION START ===')
  console.log('Method:', req.method)
  console.log('URL:', req.url)
  console.log('Headers:', Object.fromEntries(req.headers.entries()))
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Returning OPTIONS response')
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    })
  }

  if (req.method !== 'POST') {
    console.log('Invalid method, returning 405')
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
    console.log('=== PROCESSING POST REQUEST ===')
    
    // Read body
    let body
    try {
      const bodyText = await req.text()
      console.log('Raw body:', bodyText)
      body = JSON.parse(bodyText)
      console.log('Parsed body:', body)
    } catch (e) {
      console.error('Failed to parse body:', e)
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      )
    }

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

    // Check environment variables
    const apiKey = Deno.env.get('RESEND_API_KEY')
    console.log('RESEND_API_KEY exists:', !!apiKey)
    console.log('RESEND_API_KEY length:', apiKey?.length || 0)
    
    if (!apiKey) {
      console.error('RESEND_API_KEY not found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured - missing API key' }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      )
    }

    // For now, let's just return success without actually sending email
    // This will help us isolate if the issue is with the function setup or email sending
    console.log('=== WOULD SEND EMAIL ===')
    console.log('From: contact@resend.dev')
    console.log('To: detoolai@gmail.com')
    console.log('Subject: Contact Form:', firstName, lastName)
    console.log('Message preview:', message.substring(0, 100))
    
    // Simulate successful email sending
    console.log('=== SIMULATING SUCCESS ===')
    
    return new Response(
      JSON.stringify({ 
        message: 'Email would be sent successfully (test mode)',
        details: {
          to: 'detoolai@gmail.com',
          from: firstName + ' ' + (lastName || ''),
          hasApiKey: true,
          messageLength: message.length
        }
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
    console.error('=== UNEXPECTED ERROR ===')
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message,
        type: error.name
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