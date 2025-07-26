import { createClient } from '@supabase/supabase-js'

// For Lovable projects with Supabase integration, these values should be provided
// by the Supabase integration. If you see this error, make sure you've connected
// to Supabase via the green Supabase button in the interface.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration missing. Please ensure Supabase is properly connected via the Lovable interface.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)