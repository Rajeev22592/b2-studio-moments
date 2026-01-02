-- First, let's check what policies actually exist
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Check if RLS is enabled
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

-- Drop ALL existing policies and create a fresh one
DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON inquiries;

-- Create a single, clean policy
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO anon
USING (true)
WITH CHECK (true);

-- Verify it was created
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

