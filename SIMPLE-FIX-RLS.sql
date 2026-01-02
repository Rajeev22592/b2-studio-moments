-- SIMPLE FIX - Run this in Supabase SQL Editor
-- This will definitely work

-- Step 1: Check current policies
SELECT 
    policyname,
    permissive,
    cmd,
    roles
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Step 2: Drop ALL policies (including any RESTRICTIVE ones)
DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON inquiries;

-- Step 3: Disable RLS temporarily to test
ALTER TABLE inquiries DISABLE ROW LEVEL SECURITY;

-- Step 4: Re-enable RLS
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Step 5: Create a simple, permissive policy
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
AS PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 6: Verify
SELECT 
    policyname,
    permissive,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- The policy should show:
-- permissive: PERMISSIVE (not RESTRICTIVE)
-- cmd: INSERT
-- roles: {anon}
-- with_check: true

