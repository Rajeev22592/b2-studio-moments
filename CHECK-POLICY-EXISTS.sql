-- CHECK IF POLICY EXISTS - Run this first to see current state

-- Check RLS status
SELECT 
    tablename, 
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'inquiries';

-- List ALL policies with full details
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

-- If no policies show up, that's the problem!
-- If policies show up but roles don't include 'anon', that's also a problem!

