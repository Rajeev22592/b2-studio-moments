import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { studioConfig } from '@/lib/studio-data';

const ContactCTA = () => {
  return (
    <section className="py-44 bg-background text-foreground relative overflow-hidden border-t border-white/5">
      {/* Subtle luxury brand watermark */}
      <div className="absolute right-[-5%] bottom-[-5%] opacity-[0.02] font-playfair text-[24vw] select-none pointer-events-none font-light italic">
        B2
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10 relative z-10">
        <span className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-accent font-semibold block">
          COMMISSION SCOPE
        </span>
        
        {/* Stacked giant display headlines */}
        <h2 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] max-w-4xl mx-auto text-white">
          YOUR STORY <br />
          <span className="italic text-accent font-normal">DESERVES TO BE</span> <br />
          REMEMBERED.
        </h2>
        
        <p className="font-poppins text-[11px] sm:text-xs tracking-[0.08em] uppercase text-white/70 max-w-xl mx-auto font-medium">
          WEDDINGS · EVENTS · FILMS · COMMERCIAL
        </p>
        
        <div className="pt-8">
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 text-accent hover:text-white font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase font-semibold transition-all duration-300 pb-1 border-b border-accent/30 hover:border-white">
              LET'S CREATE SOMETHING TIMELESS
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="pt-12 font-poppins text-[11px] text-white/60 tracking-[0.08em] uppercase font-medium">
          RESERVATIONS DIRECT: &nbsp;
          <a href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`} className="text-white/80 hover:text-accent transition-colors underline decoration-accent/30">
            {studioConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;