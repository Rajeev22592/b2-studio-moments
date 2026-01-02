-- COMPLETE FIX FOR RLS POLICY
-- Run this in Supabase SQL Editor

-- Step 1: Check current state
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

-- Step 2: List all existing policies
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 3: Drop ALL existing policies (clean slate)
DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON inquiries;

-- Step 4: Ensure RLS is enabled
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Step 5: Create a PERMISSIVE policy for anonymous inserts
-- For INSERT policies, only WITH CHECK is allowed (not USING)
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
AS PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 6: Also allow authenticated users (optional but good practice)
CREATE POLICY "allow_authenticated_insert"
ON public.inquiries
AS PERMISSIVE
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Step 7: Verify the policies were created
SELECT 
    policyname,
    permissive,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 8: Test the policy (this should work)
-- Note: You might need to run this as the postgres role
SET ROLE anon;
INSERT INTO inquiries (full_name, email, event_type, message) 
VALUES ('Test User', 'test@example.com', 'wedding', 'Test message from SQL');
RESET ROLE;

-- Check if the test insert worked
SELECT * FROM inquiries WHERE email = 'test@example.com';

