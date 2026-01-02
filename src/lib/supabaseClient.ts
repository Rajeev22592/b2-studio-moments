import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Validate key format (Supabase anon keys are JWT tokens starting with 'eyJ')
if (import.meta.env.DEV && !supabaseAnonKey.startsWith('eyJ')) {
  console.warn('⚠️ WARNING: Supabase anon key format looks incorrect!');
  console.warn('Expected: JWT token starting with "eyJ..."');
  console.warn('Got:', supabaseAnonKey.substring(0, 30) + '...');
  console.warn('Please get the correct "anon public" key from:');
  console.warn('Supabase Dashboard → Project Settings → API');
}

// Debug: Log to verify env vars are loaded (remove in production)
if (import.meta.env.DEV) {
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key loaded:', supabaseAnonKey ? 'Yes' : 'No');
  console.log('Key format valid:', supabaseAnonKey.startsWith('eyJ') ? 'Yes' : 'No ❌');
  
  // Decode JWT to verify it matches the project
  try {
    const parts = supabaseAnonKey.split('.');
    if (parts.length === 3) {
      const payload = JSON.parse(atob(parts[1]));
      console.log('JWT decoded - Project ref:', payload.ref);
      console.log('JWT decoded - Role:', payload.role);
      console.log('Expected project ref: wngnmkbvdaofqidqltdt');
      if (payload.ref !== 'wngnmkbvdaofqidqltdt') {
        console.error('❌ ERROR: API key is for a DIFFERENT project!');
        console.error('Key project:', payload.ref);
        console.error('Expected project: wngnmkbvdaofqidqltdt');
      } else {
        console.log('✅ API key matches the correct project');
      }
    }
  } catch (e) {
    console.warn('Could not decode JWT:', e);
  }
}

// Create Supabase client with minimal configuration
// Supabase client automatically handles API key in headers
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

