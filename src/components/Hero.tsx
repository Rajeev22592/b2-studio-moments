import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroWedding from '@/assets/hero-wedding.jpg';
import heroFashion from '@/assets/hero-fashion.jpg';
import heroCorporate from '@/assets/hero-corporate.jpg';
import heroPrewedding from '@/assets/hero-prewedding.jpg';

const heroSlides = [
  {
    image: heroWedding,
    title: "Timeless Wedding",
    subtitle: "Memories",
    description: "Capturing your special day with elegance, emotion, and artistry that lasts forever",
    cta: "Explore Wedding Gallery"
  },
  {
    image: heroPrewedding,
    title: "Romantic Pre-Wedding",
    subtitle: "Stories",
    description: "Creating magical moments before your big day with stunning outdoor cinematography",
    cta: "View Pre-Wedding Shoots"
  },
  {
    image: heroFashion,
    title: "High-Fashion",
    subtitle: "Photography",
    description: "Editorial-style fashion photography for brands, designers, and creative portfolios",
    cta: "Discover Fashion Work"
  },
  {
    image: heroCorporate,
    title: "Corporate Events &",
    subtitle: "Professional Services",
    description: "Premium event coverage and corporate photography that elevates your brand",
    cta: "Corporate Solutions"
  }
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen p-0">
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
                    <span className="block text-primary">{slide.subtitle}</span>
                  </h1>
                </div>
                
                <div className="fade-in-delay-1">
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
                
                <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold px-8 py-4">
                    {slide.cta}
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
      </Carousel>
    </section>
  );
};

export default Hero;