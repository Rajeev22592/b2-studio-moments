-- Test if the policy actually works
-- Run this to verify the policy allows inserts

-- First, check the policy exists and is correct
SELECT 
    policyname,
    permissive,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'inquiries';

-- Try to insert a test row
-- This simulates what your app is trying to do
INSERT INTO public.inquiries (full_name, email, event_type, message) 
VALUES ('Test from SQL', 'test@example.com', 'wedding', 'Testing if RLS policy works');

-- Check if it was inserted
SELECT * FROM public.inquiries 
WHERE email = 'test@example.com' 
ORDER BY created_at DESC 
LIMIT 1;

-- If this works, the policy is correct and the issue is in the app
-- If this fails, the policy needs to be fixed

