import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1920",
    titleLine1: "Stories",
    titleLine2: "Worth",
    titleLine3: "Remembering.",
    metadata: "Weddings · Events · Films · Commercial"
  },
  {
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920",
    titleLine1: "Artistry",
    titleLine2: "In Every",
    titleLine3: "Single Detail.",
    metadata: "Fine Art Photography · Cinematography"
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1920",
    titleLine1: "Vogue-Level",
    titleLine2: "Creative",
    titleLine3: "Vision.",
    metadata: "Fashion · Commercial Campaigns · Portraits"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [line1Active, setLine1Active] = useState(false);
  const [line2Active, setLine2Active] = useState(false);
  const [line3Active, setLine3Active] = useState(false);
  const [metaActive, setMetaActive] = useState(false);
  const [ctaActive, setCtaActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    // Reset states for mount animation sequence
    setIsRevealed(false);
    setLine1Active(false);
    setLine2Active(false);
    setLine3Active(false);
    setMetaActive(false);
    setCtaActive(false);
    setScrollActive(false);

    // Sequence timings (refined & fast, total ~1.5s)
    const tImage = setTimeout(() => setIsRevealed(true), 100);
    const tLine1 = setTimeout(() => setLine1Active(true), 350);
    const tLine2 = setTimeout(() => setLine2Active(true), 500);
    const tLine3 = setTimeout(() => setLine3Active(true), 650);
    const tMeta = setTimeout(() => setMetaActive(true), 850);
    const tCta = setTimeout(() => setCtaActive(true), 1050);
    const tScroll = setTimeout(() => setScrollActive(true), 1300);

    return () => {
      clearTimeout(tImage);
      clearTimeout(tLine1);
      clearTimeout(tLine2);
      clearTimeout(tLine3);
      clearTimeout(tMeta);
      clearTimeout(tCta);
      clearTimeout(tScroll);
    };
  }, [currentSlide]);

  // Slowly rotate slides every 8 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(slideTimer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('featured-story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#0A0908] overflow-hidden flex items-center justify-center">
      {/* Background Image Container with Clip Mask & Zoom */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1600ms] ease-out ${
          isRevealed ? 'opacity-40 scale-100' : 'opacity-0 scale-108'
        }`}
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].image})`,
          clipPath: isRevealed ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)'
        }}
      />

      {/* Luxury Dark Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0A0908] z-10" />

      {/* Main Copy & Interactive Actions */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto space-y-8 select-none">
        
        {/* Line-by-Line Headline */}
        <h1 className="font-playfair text-4xl sm:text-6xl lg:text-[80px] font-normal tracking-tight leading-[0.95] text-[#F3EFE7]">
          <span className="block overflow-hidden h-fit py-1">
            <span className={`block transition-transform duration-1000 ease-out ${line1Active ? 'translate-y-0' : 'translate-y-full'}`}>
              {heroSlides[currentSlide].titleLine1}
            </span>
          </span>
          <span className="block overflow-hidden h-fit py-1">
            <span className={`block italic font-normal text-accent transition-transform duration-1000 ease-out ${line2Active ? 'translate-y-0' : 'translate-y-full'}`}>
              {heroSlides[currentSlide].titleLine2}
            </span>
          </span>
          <span className="block overflow-hidden h-fit py-1">
            <span className={`block transition-transform duration-1000 ease-out ${line3Active ? 'translate-y-0' : 'translate-y-full'}`}>
              {heroSlides[currentSlide].titleLine3}
            </span>
          </span>
        </h1>
        
        {/* Supporting Metadata */}
        <div className="overflow-hidden h-fit">
          <p className={`font-poppins text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-accent font-medium transition-all duration-1000 ease-out ${
            metaActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {heroSlides[currentSlide].metadata}
          </p>
        </div>

        {/* Action CTAs */}
        <div className={`pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
          ctaActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link to="/portfolio">
            <Button size="lg" className="magnetic-anchor bg-white hover:bg-accent text-black hover:text-black font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase px-8 py-6 rounded-none transition-all duration-500 font-semibold">
              Explore Our Work
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="magnetic-anchor bg-transparent border-white/20 hover:border-accent text-white hover:text-accent font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase px-8 py-6 rounded-none backdrop-blur-xs transition-all duration-500 font-semibold"
            >
              Plan Your Shoot
            </Button>
          </Link>
        </div>
      </div>

      {/* Refined Scroll Down Indicator */}
      <button
        onClick={scrollToNextSection}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-accent transition-all duration-1000 ease-out flex flex-col items-center gap-2 group focus:outline-none ${
          scrollActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Scroll to featured story"
      >
        <span className="font-poppins text-[10px] tracking-[0.1em] uppercase opacity-75 group-hover:opacity-100 transition-opacity font-medium">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
      </button>
    </section>
  );
};

export default Hero;