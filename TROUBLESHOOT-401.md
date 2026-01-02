# Troubleshooting 401 Unauthorized Error

## Current Status
- ✅ Key format is valid (JWT starting with `eyJ`)
- ✅ Key is loaded from `.env`
- ❌ Still getting 401 Unauthorized

## Possible Causes

### 1. API Key Doesn't Match Project
The key might be for a different Supabase project. The console will now show if the key matches.

### 2. Key Was Regenerated
If you regenerated the key in Supabase, the old key in `.env` is invalid.

### 3. Wrong Key Type
Make sure you're using the **"anon public"** key, NOT the "service_role" key.

## How to Fix

### Step 1: Check Console Output
After restarting, the console will show:
- `JWT decoded - Project ref: [project-id]`
- `Expected project ref: wngnmkbvdaofqidqltdt`

If they don't match, that's the problem!

### Step 2: Get Fresh Key from Supabase
1. Go to: https://supabase.com/dashboard/project/wngnmkbvdaofqidqltdt/settings/api
2. Find **"anon public"** key (NOT service_role)
3. Click the copy icon to copy the FULL key
4. Make sure it's for project: **wngnmkbvdaofqidqltdt**

### Step 3: Update .env
1. Open `.env` file
2. Replace the `VITE_SUPABASE_ANON_KEY` value with the new key
3. Save the file

### Step 4: Restart Dev Server
```bash
# Stop: Ctrl+C
npm run dev
```

### Step 5: Hard Refresh Browser
Press `Ctrl+Shift+R` to clear cache

### Step 6: Check Console Again
- Should show: `✅ API key matches the correct project`
- Should NOT show: `❌ ERROR: API key is for a DIFFERENT project!`

## After Fixing 401
Once the 401 is resolved, you still need to fix the RLS policy:
- Run `CORRECT-RLS-POLICY.sql` in Supabase SQL Editor

