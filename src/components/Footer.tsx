import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';
import { studioConfig } from '@/lib/studio-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Section with Big Statement */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-metadata">
              PRESERVING LEGACY
            </span>
            <h2 className="text-editorial-title max-w-2xl text-left text-[#faf8f5]">
              Your story deserves more than ordinary photographs.
            </h2>
          </div>
          
          <div className="lg:col-span-5 space-y-6 lg:pt-8">
            <p className="text-body-editorial text-white/85 max-w-md">
              We capture light, emotion, and heritage across India and international destinations. 
              Let's create something beautiful that stands the test of time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-accent font-poppins text-[13px] tracking-[0.08em] uppercase font-semibold hover:gap-4 transition-all duration-300"
            >
              Start Planning Your Shoot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 text-sm">
          
          {/* Logo & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-playfair text-2xl font-light tracking-[0.15em] text-[#faf8f5]">
                {studioConfig.name}
              </span>
              <span className="font-poppins text-[10px] tracking-[0.12em] uppercase text-accent font-medium mt-0.5">
                CREATIVE STUDIO
              </span>
            </Link>
            <div className="space-y-4 font-poppins text-white/75 text-[13px] sm:text-sm leading-relaxed">
              <div>
                <span className="text-accent block font-medium uppercase text-[11px] sm:text-[12px] tracking-[0.1em] mb-1">MUMBAI HQ</span>
                <p className="font-normal">{studioConfig.addresses.mumbai}</p>
              </div>
              <div>
                <span className="text-accent block font-medium uppercase text-[11px] sm:text-[12px] tracking-[0.1em] mb-1">JAIPUR OFFICE</span>
                <p className="font-normal">{studioConfig.addresses.jaipur}</p>
              </div>
            </div>
          </div>

          {/* Galleries Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-playfair text-[#faf8f5] text-lg font-medium">Galleries</h4>
            <ul className="space-y-2.5 font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/70">
              <li>
                <Link to="/portfolio/weddings" className="hover:text-accent transition-colors">Weddings</Link>
              </li>
              <li>
                <Link to="/portfolio/portraits" className="hover:text-accent transition-colors">Portraits</Link>
              </li>
              <li>
                <Link to="/portfolio/events" className="hover:text-accent transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/portfolio/commercial" className="hover:text-accent transition-colors">Commercial</Link>
              </li>
              <li>
                <Link to="/portfolio/films" className="hover:text-accent transition-colors">Films</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-playfair text-[#faf8f5] text-lg font-medium">Studio</h4>
            <ul className="space-y-2.5 font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/70">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">Philosophy</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social connection */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-playfair text-[#faf8f5] text-lg font-medium">Connect</h4>
            <div className="flex gap-4">
              <a
                href={studioConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={studioConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={studioConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <div className="font-poppins text-[11px] text-white/60 tracking-wider">
              {studioConfig.workingHours}
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="border-t border-border/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-white/60 font-poppins text-xs tracking-wider">
          <p>© {currentYear} {studioConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 uppercase text-[11px] tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;