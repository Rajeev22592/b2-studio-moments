import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsList } from '@/lib/studio-data';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  return (
    <section className="py-32 light bg-background text-foreground overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Synchronized Editorial Image (60%) */}
          <div className="lg:col-span-6 relative aspect-[4/5] bg-black/5 overflow-hidden">
            {testimonialsList.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-90 scale-100 pointer-events-auto' 
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Fine border outline */}
            <div className="absolute inset-6 border border-white/20 pointer-events-none" />
          </div>

          {/* Right Column - Quote & Navigation Controls (40%) */}
          <div className="lg:col-span-6 space-y-10 relative flex flex-col justify-center min-h-[350px]">
            <Quote className="h-12 w-12 text-accent/30" />

            <div className="relative min-h-[220px]">
              {testimonialsList.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.id}
                    className={`transition-all duration-700 absolute inset-0 flex flex-col justify-between ${
                      isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    <blockquote className="font-playfair text-xl sm:text-2xl font-normal italic leading-relaxed text-[#171513]">
                      “{item.quote}”
                    </blockquote>

                    <div className="pt-6 font-poppins">
                      <span className="block text-base font-medium tracking-wide text-[#171513]">
                        {item.clientName}
                      </span>
                      <span className="block text-[11px] sm:text-[12px] tracking-[0.08em] text-accent uppercase mt-1 font-medium">
                        {item.eventType} &nbsp;·&nbsp; {item.location}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-black/10 hover:border-accent hover:text-accent rounded-none flex items-center justify-center text-black transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-black/10 hover:border-accent hover:text-accent rounded-none flex items-center justify-center text-black transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;