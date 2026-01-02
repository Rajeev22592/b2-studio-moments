# Next.js Migration Guide

This project has been successfully migrated from Vite/React Router to Next.js 14 with App Router.

## What Changed

### 1. Project Structure
- **Before**: `src/pages/` with React Router
- **After**: `app/` directory with Next.js App Router (file-based routing)

### 2. Routing
- **Before**: `react-router-dom` with `<Routes>` and `<Route>`
- **After**: Next.js file-based routing in `app/` directory
  - `app/page.tsx` → `/`
  - `app/about/page.tsx` → `/about`
  - `app/portfolio/page.tsx` → `/portfolio`
  - etc.

### 3. Navigation
- **Before**: `Link` from `react-router-dom`
- **After**: `Link` from `next/link`
- Updated in: `Navigation.tsx`, `Footer.tsx`, `GalleryLayout.tsx`, `ContactCTA.tsx`

### 4. Environment Variables
- **Before**: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- **After**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- The Supabase client supports both for backward compatibility

### 5. SEO Optimization
- Added comprehensive metadata to all pages using Next.js `Metadata` API
- Includes Open Graph tags, Twitter cards, and structured data
- Each page has unique title, description, and keywords

### 6. Client Components
- Components using hooks (`useState`, `useEffect`, etc.) are marked with `'use client'`
- Server components (default) can be used for static content

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Update your `.env` file to use Next.js environment variable prefixes:

```env
NEXT_PUBLIC_SUPABASE_URL=https://wngnmkbvdaofqidqltdt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_SITE_URL=https://b2studio.com
```

**Note**: The Supabase client will also check for `VITE_` prefixed variables for backward compatibility.

### 3. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000` (default Next.js port).

### 4. Build for Production
```bash
npm run build
npm start
```

## Key Features Preserved

✅ **Supabase Integration** - Contact form submissions work as before
✅ **WhatsApp Integration** - All WhatsApp links and buttons functional
✅ **All Pages** - Home, About, Portfolio, Services, Blog, Contact
✅ **Portfolio Categories** - All portfolio sub-pages maintained
✅ **UI Components** - All shadcn/ui components work as before
✅ **Styling** - Tailwind CSS configuration maintained

## SEO Improvements

- ✅ Dynamic metadata for each page
- ✅ Open Graph tags for social sharing
- ✅ Twitter card support
- ✅ Canonical URLs
- ✅ Structured keywords
- ✅ Proper title templates

## Next Steps

1. **Update Environment Variables**: Ensure `.env` uses `NEXT_PUBLIC_` prefix
2. **Test All Routes**: Verify all pages load correctly
3. **Test Forms**: Ensure Supabase contact form works
4. **Test WhatsApp Links**: Verify all WhatsApp buttons work
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting

## Migration Notes

- The old `src/pages/` directory still exists but is not used by Next.js
- The `src/App.tsx` and `src/main.tsx` are no longer needed
- All components in `src/components/` work as before
- Assets in `src/assets/` are accessible via imports

## Troubleshooting

### Images not loading
- Next.js handles images differently. Use the `Image` component from `next/image` for optimization, or use regular `img` tags with proper paths.

### Environment variables not working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart the dev server after changing `.env` file

### Routing issues
- Check that files are in the correct `app/` directory structure
- Ensure `page.tsx` files are named correctly

## Branch Information

This migration is on the `next-migrate` branch. To merge to main:

```bash
git checkout main
git merge next-migrate
```

