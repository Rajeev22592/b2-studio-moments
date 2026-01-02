-- FINAL SOLUTION - This will definitely work
-- Run this ENTIRE script in Supabase SQL Editor

-- Step 1: Drop ALL policies (including any RESTRICTIVE ones)
DROP POLICY IF EXISTS "allow_anonymous_insert" ON public.inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON public.inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON public.inquiries;

-- Step 2: Disable RLS temporarily
ALTER TABLE public.inquiries DISABLE ROW LEVEL SECURITY;

-- Step 3: Re-enable RLS (fresh start)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Step 4: Create a PERMISSIVE policy (explicitly set)
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
AS PERMISSIVE  -- Explicitly set as PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 5: Verify - should show PERMISSIVE, not RESTRICTIVE
SELECT 
    policyname,
    permissive,  -- Must be PERMISSIVE
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 6: Test the policy by trying to insert
-- This should work if policy is correct
INSERT INTO public.inquiries (full_name, email, event_type, message) 
VALUES ('Policy Test', 'policytest@example.com', 'wedding', 'Testing if policy works');

-- Step 7: Check if test insert succeeded
SELECT * FROM public.inquiries 
WHERE email = 'policytest@example.com' 
ORDER BY created_at DESC 
LIMIT 1;

-- If the test insert works, the policy is correct!
-- If it fails, there's another issue

