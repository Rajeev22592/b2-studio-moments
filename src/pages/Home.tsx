import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedStory from '@/components/sections/FeaturedStory';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import Destinations from '@/components/sections/Destinations';
import Testimonials from '@/components/sections/Testimonials';
import Instagram from '@/components/sections/Instagram';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Helmet } from 'react-helmet-async';
import { studioConfig } from '@/lib/studio-data';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{studioConfig.name} | Premium Photography & Cinematography Studio</title>
        <meta name="description" content="World-class luxury photography and cinematography studio specializing in weddings, editorial portraits, commercial fashion and product campaigns." />
        <meta name="keywords" content="wedding photography, luxury weddings, indian wedding film, fashion editorial, commercial product photography, professional portfolio" />
        <link rel="canonical" href="https://b2studio.in/" />
      </Helmet>

      <Navigation />
      <Hero />
      <FeaturedStory />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Destinations />
      <Testimonials />
      <Instagram />
      <ContactCTA />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Home;