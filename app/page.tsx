import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'B2 Studio - Capturing Moments, Creating Stories. Professional Wedding, Fashion, Event Photography & Cinematography Services with Drone Shoots.',
  openGraph: {
    title: 'B2 Studio - Professional Photography & Cinematography',
    description: 'Capturing Moments, Creating Stories. Professional Wedding, Fashion, Event Photography Services.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

