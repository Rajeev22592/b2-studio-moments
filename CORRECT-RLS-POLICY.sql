-- CORRECT RLS Policy for INSERT operations
-- For INSERT policies, only WITH CHECK is allowed (not USING)

-- Drop all existing policies
DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts to inquiries" ON inquiries;
DROP POLICY IF EXISTS "allow anonymous insert only" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts to inquiries" ON inquiries;

-- Create policy for INSERT - ONLY WITH CHECK (no USING clause)
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Also allow authenticated users
CREATE POLICY "allow_authenticated_insert"
ON public.inquiries
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Verify the policy was created
SELECT 
    policyname,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

