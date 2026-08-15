import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Never throw at import time: that blanks the whole app.
  console.warn(
    'Supabase environment variables are missing (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). ' +
      'The site still works, but the contact form cannot submit inquiries.',
  );
}

export const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : (createClient('https://placeholder.supabase.co', 'public-anon-key-placeholder') as SupabaseClient);
