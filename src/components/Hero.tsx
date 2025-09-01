import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="hero-content">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Capturing Moments,
            <span className="block text-primary">Creating Stories</span>
          </h1>
        </div>
        
        <div className="fade-in-delay-1">
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Professional Photography & Cinematography Services for Weddings, Events, Fashion, and Corporate Needs
          </p>
        </div>
        
        <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold px-8 py-4">
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Watch Showreel
          </Button>
        </div>
        
        <div className="fade-in-delay-3 mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-primary">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm">Events Captured</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-primary">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;