import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

const Home = () => {
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
};

export default Home;