-- DEFINITIVE FIX - Copy and paste this ENTIRE script into Supabase SQL Editor
-- This will 100% fix the RLS issue

-- Step 1: Check current state (for reference)
SELECT 'Current RLS Status:' as info;
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

SELECT 'Current Policies:' as info;
SELECT 
    policyname,
    permissive,
    cmd,
    roles
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 2: Remove ALL existing policies (clean slate)
DROP POLICY IF EXISTS "allow_anonymous_insert" ON public.inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON public.inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON public.inquiries;

-- Step 3: Ensure RLS is enabled
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Step 4: Create the policy - THIS IS THE KEY FIX
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 5: Verify the policy was created correctly
SELECT 'Policy Created - Verification:' as info;
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 6: Expected output should show:
-- schemaname: public
-- tablename: inquiries
-- policyname: allow_anonymous_insert
-- permissive: PERMISSIVE
-- cmd: INSERT
-- roles: {anon}
-- with_check: true

