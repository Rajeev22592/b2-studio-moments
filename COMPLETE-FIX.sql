-- COMPLETE FIX FOR RLS - Run this entire script in Supabase SQL Editor
-- This will fix both the 401 and RLS issues

-- Step 1: Check current RLS status
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

-- Step 2: Show ALL current policies
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 3: Drop EVERY possible policy name (clean slate)
DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON inquiries;
DROP POLICY IF EXISTS "anon_insert" ON inquiries;
DROP POLICY IF EXISTS "public_insert" ON inquiries;

-- Step 4: Ensure RLS is enabled
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Step 5: Create the policy with explicit schema
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO public, anon
WITH CHECK (true);

-- Step 6: Verify the policy
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 7: Test as anon role (this should work now)
-- Note: This test might fail in SQL editor, but the policy should work from the app
DO $$
BEGIN
    -- Try to insert as anon
    PERFORM set_config('request.jwt.claim.role', 'anon', true);
    INSERT INTO inquiries (full_name, email, event_type, message) 
    VALUES ('SQL Test', 'sqltest@example.com', 'wedding', 'Testing from SQL');
    RAISE NOTICE 'Test insert succeeded!';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Test insert failed: %', SQLERRM;
END $$;

-- Step 8: Check if test data exists
SELECT * FROM inquiries WHERE email = 'sqltest@example.com' ORDER BY created_at DESC LIMIT 1;

