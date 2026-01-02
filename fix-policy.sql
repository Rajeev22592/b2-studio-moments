-- Drop and recreate the policy with both USING and WITH CHECK clauses
-- This ensures the policy works for both reading and writing

DROP POLICY IF EXISTS "allow_anonymous_insert" ON inquiries;

-- Create policy with explicit permissions for INSERT
CREATE POLICY "allow_anonymous_insert"
ON public.inquiries
FOR INSERT
TO anon
USING (true)
WITH CHECK (true);

-- Verify the policy was created
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

