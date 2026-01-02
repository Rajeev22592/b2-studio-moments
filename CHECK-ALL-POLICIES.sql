-- Check for ALL policies including RESTRICTIVE ones
-- Run this to see if anything is blocking

-- Check ALL policies (including RESTRICTIVE)
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,  -- Should be PERMISSIVE, not RESTRICTIVE
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries'
ORDER BY policyname;

-- Check if there are any RESTRICTIVE policies
SELECT 
    policyname,
    permissive
FROM pg_policies 
WHERE tablename = 'inquiries' 
AND permissive = 'RESTRICTIVE';

-- If any RESTRICTIVE policies exist, they will BLOCK the insert!
-- RESTRICTIVE policies deny access even if PERMISSIVE policies allow it

