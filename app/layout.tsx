import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from './providers';
import '@/index.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'B2 Studio - Professional Photography & Cinematography',
    template: '%s | B2 Studio',
  },
  description: 'B2 Studio - Capturing Moments, Creating Stories. Professional Wedding, Fashion, Event Photography & Cinematography Services with Drone Shoots.',
  keywords: ['photography', 'cinematography', 'wedding photography', 'event photography', 'fashion photography', 'drone photography', 'B2 Studio'],
  authors: [{ name: 'B2 Studio' }],
  creator: 'B2 Studio',
  publisher: 'B2 Studio',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://b2studio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'B2 Studio',
    title: 'B2 Studio - Professional Photography & Cinematography',
    description: 'Capturing Moments, Creating Stories. Professional Wedding, Fashion, Event Photography Services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B2 Studio - Professional Photography & Cinematography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2 Studio - Professional Photography & Cinematography',
    description: 'Capturing Moments, Creating Stories. Professional Wedding, Fashion, Event Photography Services.',
    images: ['/og-image.jpg'],
    creator: '@b2studio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-poppins antialiased">
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}

