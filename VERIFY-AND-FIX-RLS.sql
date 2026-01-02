-- Complete verification and fix for RLS policy
-- Run this in Supabase SQL Editor

-- Step 1: Check if RLS is enabled
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

-- Step 2: List ALL existing policies (see what's there)
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
DROP POLICY IF EXISTS "allow_authenticated_insert" ON inquiries;

-- Step 4: Ensure RLS is enabled
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Step 5: Create the correct policy (ONLY WITH CHECK for INSERT)
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 6: Verify the policy was created
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 7: Test the policy works
-- This should succeed if policy is correct
INSERT INTO inquiries (full_name, email, event_type, message) 
VALUES ('Policy Test', 'test@example.com', 'wedding', 'Testing RLS policy');

-- Step 8: Check if test insert worked
SELECT * FROM inquiries WHERE email = 'test@example.com' ORDER BY created_at DESC LIMIT 1;

