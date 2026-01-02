# Verify Your Supabase API Key

## The Issue
Even though the key format is correct (JWT starting with `eyJ`), you're still getting a 401 Unauthorized error. This means the key might be:
1. For a different Supabase project
2. Expired or revoked
3. Not the correct "anon public" key

## How to Verify

### Step 1: Go to Supabase Dashboard
1. Visit: https://supabase.com/dashboard/project/wngnmkbvdaofqidqltdt/settings/api
2. Make sure you're in the correct project: **Studio B2** (wngnmkbvdaofqidqltdt)

### Step 2: Check the Anon Public Key
1. Look for **"Project API keys"** section
2. Find the key labeled **"anon"** or **"public"** (NOT "service_role")
3. It should be a long JWT token starting with `eyJ...`
4. **Copy the ENTIRE key** (it's very long, 200+ characters)

### Step 3: Compare with Your .env
1. Open your `.env` file
2. Compare the key after `VITE_SUPABASE_ANON_KEY=`
3. They should match EXACTLY (character by character)

### Step 4: If Keys Don't Match
1. Copy the key from Supabase dashboard
2. Replace the key in your `.env` file
3. Save the file
4. **Restart dev server** (Ctrl+C, then `npm run dev`)
5. Hard refresh browser (Ctrl+Shift+R)

## Important Notes
- The "anon" key is safe to use in client-side code (it's public)
- Never use the "service_role" key in client-side code (it has admin access)
- Make sure you're copying the key for the correct project

## After Fixing the Key
Once you've verified and updated the key:
1. The 401 error should disappear
2. Then you'll need to fix the RLS policy (run `FINAL-FIX-RLS.sql`)

