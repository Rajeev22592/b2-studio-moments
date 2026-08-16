import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { studioConfig } from '@/lib/studio-data';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const About = () => {
  return (
    <section className="py-28 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Block */}
          <div className="lg:col-span-6 group overflow-hidden">
            <div className="relative aspect-[4/5] bg-white/5 overflow-hidden">
              <img 
                src={photographerPortrait}
                alt="Creative Director at B2 Studio"
                className="w-full h-full object-cover transition-transform duration-[1200ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
          </div>
          
          {/* Content Block */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
                studio philosophy
              </span>
              <h2 className="text-section-title text-[#F3EFE7]">
                We don't simply capture moments. <br />
                <span className="italic text-accent font-normal">We preserve legacy.</span>
              </h2>
            </div>
            
            <div className="w-12 h-px bg-accent/30" />
            
            <p className="text-body-editorial text-white/80 max-w-xl">
              At B2 Studio, we view photography as the intersection of fine-art photojournalism and editorial fashion. 
              Our work is defined by high-contrast palettes, elegant compositions, and raw human emotions. 
              Whether photographing a royal wedding in Rajasthan or styling an advertising catalog in Mumbai, 
              we capture characters and stories with an artistic point of view.
            </p>
            
            <p className="text-body-editorial text-white/70 max-w-xl">
              With a crew of directors, post-production artists, and cinematographers, we provide a seamless 
              creative experience. We scout, coordinate lighting layouts, and edit every frame by hand, 
              producing visual archives that look expensive and emotional.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/about">
                <Button size="lg" className="bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase px-8 py-5 rounded-none transition-all duration-300 font-semibold">
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              {/* Subtle stats */}
              <div className="flex items-center space-x-6 border-l border-white/10 pl-6 font-poppins">
                <div>
                  <span className="block font-playfair text-2xl text-accent font-normal">10+ Years</span>
                  <span className="text-[11px] uppercase tracking-[0.08em] text-white/60 font-medium">Storytelling</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <span className="block font-playfair text-2xl text-accent font-normal">500+ Events</span>
                  <span className="text-[11px] uppercase tracking-[0.08em] text-white/60 font-medium">Captured</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;