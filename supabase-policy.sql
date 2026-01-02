-- Enable RLS on inquiries table (if not already enabled)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone (anonymous users) to INSERT into inquiries table
-- This is safe for a contact form since we're only allowing INSERT, not SELECT/UPDATE/DELETE
CREATE POLICY "Allow anonymous inserts to inquiries"
ON inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: If you want authenticated users to also be able to insert
CREATE POLICY "Allow authenticated inserts to inquiries"
ON inquiries
FOR INSERT
TO authenticated
WITH CHECK (true);

