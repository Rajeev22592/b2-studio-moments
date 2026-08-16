import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { studioConfig } from '@/lib/studio-data';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Desktop navigation mapping
  const navItems = [
    { name: 'Work', path: '/portfolio' },
    { name: 'Weddings', path: '/portfolio/weddings' },
    { name: 'Events', path: '/portfolio/events' },
    { name: 'Films', path: '/portfolio/films' },
    { name: 'Studio', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#0A0908]/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col select-none group">
              <span className="font-playfair text-xl sm:text-2xl font-light tracking-[0.2em] text-foreground transition-all duration-300 group-hover:text-accent">
                {studioConfig.name}
              </span>
              <span className="font-poppins text-[7px] tracking-[0.55em] uppercase text-accent font-medium -mt-0.5 ml-[0.1rem]">
                CREATIVE STUDIO
              </span>
            </Link>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex items-center space-x-10 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins text-[13px] md:text-[14px] tracking-[0.04em] uppercase transition-all duration-300 relative py-1 hover:text-accent group ${
                    isActive(item.path) ? 'text-accent font-semibold' : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                  {/* Slim Underline Hover */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transition-transform duration-500 origin-left ${
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
              
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="magnetic-anchor font-poppins text-[12px] md:text-[13px] tracking-[0.04em] uppercase border-accent/40 text-accent hover:bg-accent hover:text-black bg-transparent px-6 py-4 rounded-none transition-all duration-500 font-semibold"
                >
                  Plan Your Shoot
                </Button>
              </Link>
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground p-2 focus:outline-none z-50 relative"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6 text-accent" /> : <Menu className="h-6 w-6 text-foreground" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0908]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 pt-28 transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-8'
        }`}
      >
        {/* Large Navigation items list */}
        <div className="flex flex-col space-y-7 justify-center flex-1">
          <span className="font-poppins text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-accent font-medium mb-2">
            Selected Navigation
          </span>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`font-playfair text-3xl sm:text-4xl font-normal tracking-wide transition-all duration-300 ${
                isActive(item.path) ? 'text-accent pl-4' : 'text-foreground/90 hover:text-accent hover:pl-4'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 70}ms` : '0ms'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Studio Info / Contact Block inside Mobile menu */}
        <div className="border-t border-white/5 pt-8 grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <span className="font-poppins text-[10px] sm:text-xs tracking-[0.08em] uppercase text-accent font-medium">
              Direct Booking
            </span>
            <a
              href={`mailto:${studioConfig.emails.bookings}`}
              className="font-poppins text-xs sm:text-sm text-foreground/80 hover:text-accent transition-colors block font-normal"
            >
              {studioConfig.emails.bookings}
            </a>
            <a
              href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}
              className="font-poppins text-xs sm:text-sm text-foreground/80 hover:text-accent transition-colors block font-normal"
            >
              {studioConfig.phone}
            </a>
          </div>

          <div className="space-y-2 flex flex-col justify-end items-end">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 text-accent font-poppins text-[11px] sm:text-[12px] tracking-[0.08em] uppercase font-semibold hover:gap-3 transition-all"
            >
              Start Inquiry
              <ArrowRight className="h-3 w-3" />
            </Link>
            <span className="font-poppins text-[10px] sm:text-[11px] tracking-[0.1em] text-white/60 uppercase font-medium">
              Jaipur • Mumbai
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;