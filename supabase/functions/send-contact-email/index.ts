import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  return new Response(
    JSON.stringify({ 
      message: 'Contact form endpoint is working!',
      method: req.method,
      timestamp: new Date().toISOString()
    }),
    { 
      status: 200, 
      headers: { 
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    }
  )
})