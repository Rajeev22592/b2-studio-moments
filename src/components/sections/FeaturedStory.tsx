import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { portfolioProjects } from '@/lib/studio-data';

const FeaturedStory = () => {
  const project = portfolioProjects.find(p => p.id === "arjun-riya");
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  if (!project) return null;

  const chapters = [
    {
      num: "01 / 05",
      label: "THE BEGINNING",
      title: "The Royal Setting",
      description: "Against the historic red sandstone courtyards of Jaipur's City Palace, Arjun and Riya began their journey. The morning light cast soft shadows matching the classic palace drapes.",
      image: project.images[0].src
    },
    {
      num: "02 / 05",
      label: "THE PROMISE",
      title: "The Sacred Vows",
      description: "As twilight settled over the city, the pheras were completed around the holy fire. An intimate ceremony framed by heritage arches and warm candle glows.",
      image: project.images[2].src
    },
    {
      num: "03 / 05",
      label: "THE PEOPLE",
      title: "Candid Intimacy & Details",
      description: "We focus on the details that compile the soul of the legacy: the weight of heritage jewelry, the texture of bridal silks, and nervous laughter shared in private.",
      image: project.images[1].src
    },
    {
      num: "04 / 05",
      label: "THE CELEBRATION",
      title: "Energy & Orchestration",
      description: "A Sufi night of grand scales. Thousands of glowing candles lit up the courtyard, combining heritage architecture with lively, dynamic energy.",
      image: project.images[3].src
    },
    {
      num: "05 / 05",
      label: "THE MEMORY",
      title: "Quiet Corridors",
      description: "Showered in flower petals, walking alone through the ancient marble corridors. A quiet moment of connection captured before the reception.",
      image: project.images[4].src
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrolled = -rect.top;
      const windowHeight = window.innerHeight;

      const totalScrollable = elementHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(currentProgress);

      // Determine active index
      const idx = Math.min(4, Math.floor(currentProgress * 5));
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getIndicatorBar = (index: number) => {
    const labels = ["BEGINNING", "PROMISE", "PEOPLE", "CELEBRATION", "MEMORY"];
    const currentLabel = labels[index];
    const bar = Array.from({ length: 5 }, (_, i) => (i === index ? "●" : "━")).join("");
    return `${currentLabel} ━━${bar}━━`;
  };

  return (
    <section id="featured-story" className="relative bg-background" ref={containerRef}>
      {/* Desktop Sticky Split Layout (Hidden on Mobile) */}
      <div className="hidden lg:block relative min-h-[450vh] w-full">
        <div className="sticky top-0 left-0 h-screen w-full flex overflow-hidden">
          
          {/* Left Text Column - 40% */}
          <div className="w-[42%] h-full flex flex-col justify-between p-16 xl:p-24 bg-gradient-to-r from-black to-transparent z-20">
            <div className="space-y-4">
              <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
                SIGNATURE WEDDING STORY
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl xl:text-5xl font-normal text-[#FAF8F5] leading-tight">
                {project.title}
              </h2>
              <p className="font-poppins text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-accent font-medium">
                {project.location} · {project.year}
              </p>
            </div>

            {/* Scroll Linked Story Elements */}
            <div className="space-y-8 max-w-md py-12">
              <div className="min-h-[140px] transition-all duration-700 ease-out">
                <span className="font-playfair text-lg italic text-accent block mb-2 font-medium">
                  Chapter {chapters[activeIndex].num.split(" ")[0]}
                </span>
                <h3 className="font-playfair text-2xl xl:text-3xl font-normal text-white mb-4">
                  {chapters[activeIndex].title}
                </h3>
                <p className="text-body-editorial text-white/85">
                  {chapters[activeIndex].description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="font-poppins text-[11px] sm:text-[12px] tracking-[0.08em] text-accent font-medium flex items-center gap-2">
                {getIndicatorBar(activeIndex)}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6">
              <Link to="/portfolio/weddings">
                <Button variant="link" className="text-accent hover:text-white p-0 font-poppins text-[13px] md:text-[14px] tracking-[0.06em] uppercase transition-all duration-300 font-semibold">
                  Explore Full Wedding Gallery
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Column - 60% */}
          <div className="w-[58%] h-full relative overflow-hidden bg-black">
            {chapters.map((chap, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? 'opacity-70 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={chap.image}
                  alt={chap.title}
                  className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out"
                />
              </div>
            ))}
            {/* Soft Shadow Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Mobile Sequential Editorial Layout (Hidden on Desktop) */}
      <div className="lg:hidden py-24 px-6 space-y-16">
        <div className="text-center space-y-4">
          <span className="font-poppins text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-accent font-medium block">
            Signature Wedding Story
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-normal text-[#FAF8F5]">
            {project.title}
          </h2>
          <p className="font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-white/60 font-medium">
            {project.location} · {project.year}
          </p>
        </div>

        <div className="space-y-20">
          {chapters.map((chap, idx) => (
            <div key={idx} className="space-y-6">
              {/* Large Image block */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#121212]">
                <img
                  src={chap.image}
                  alt={chap.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Text metadata */}
              <div className="space-y-3">
                <span className="font-playfair text-sm italic text-accent block font-medium">
                  Chapter {chap.num.split(" ")[0]}
                </span>
                <h3 className="font-playfair text-xl font-normal text-white">
                  {chap.title}
                </h3>
                <p className="text-body-editorial text-white/80">
                  {chap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Full CTA */}
        <div className="text-center pt-8">
          <Link to="/portfolio/weddings">
            <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-black font-poppins text-xs tracking-[0.05em] uppercase rounded-none w-full py-5 font-semibold bg-transparent transition-all duration-300">
              Explore Wedding Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
