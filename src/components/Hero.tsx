import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroBg from '@/assets/hero-bg.jpg';
import heroPrewedding from '@/assets/hero-prewedding.jpg';
import heroFashion from '@/assets/hero-fashion.jpg';
import heroEvent from '@/assets/hero-event.jpg';

const Hero = () => {
  const slides = [
    {
      image: heroBg,
      title: 'Capturing Moments,',
      highlight: 'Creating Stories',
      description: 'Professional Photography & Cinematography Services for Weddings, Events, Fashion, and Corporate Needs'
    },
    {
      image: heroPrewedding,
      title: 'Your Love Story,',
      highlight: 'Beautifully Told',
      description: 'Romantic Pre-Wedding & Engagement Photography that Captures the Magic of Your Journey Together'
    },
    {
      image: heroFashion,
      title: 'Fashion & Portrait',
      highlight: 'Photography',
      description: 'High-End Fashion Photography & Professional Portraits with Creative Direction and Studio Expertise'
    },
    {
      image: heroEvent,
      title: 'Corporate Events',
      highlight: 'Professionally Captured',
      description: 'Premium Event Coverage & Drone Cinematography for Corporate Functions and Special Occasions'
    }
  ];

  return (
    <section className="hero-section">
      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="hero-overlay" />
              
              {/* Content */}
              <div className="hero-content">
                <div className="fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
                    {slide.title}
                    <span className="block text-primary">{slide.highlight}</span>
                  </h1>
                </div>
                
                <div className="fade-in-delay-1">
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                    {slide.description}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 md:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
};

export default Hero;