import { useEffect, useState } from 'react';
import { studioConfig } from '@/lib/studio-data';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Failsafe timeout: Force reveal the website after 2.0s maximum under all conditions
    const failsafeTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // Minimum visual hold of 1.2s to ensure the opening title card registers
    const loadStart = Date.now();
    const handlePageLoad = () => {
      const elapsed = Date.now() - loadStart;
      const remaining = Math.max(1200 - elapsed, 0);

      setTimeout(() => {
        setIsLoaded(true);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearTimeout(failsafeTimer);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Remove preloader from the DOM completely after exit transition finishes (0.8s)
      const destroyTimer = setTimeout(() => {
        setShouldRender(false);
      }, 800);
      return () => clearTimeout(destroyTimer);
    }
  }, [isLoaded]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0908] transition-all duration-700 ease-out select-none ${
        isLoaded 
          ? 'opacity-0 pointer-events-none -translate-y-4' 
          : 'opacity-100 pointer-events-auto'
      }`}
    >
      <div 
        className={`flex flex-col items-center justify-center text-center max-w-[240px] sm:max-w-[320px] transition-all duration-[600ms] ${
          prefersReducedMotion 
            ? 'opacity-100 scale-100' 
            : 'animate-fade-in-scale'
        } ${isLoaded ? 'opacity-0 scale-98 transition-all duration-500' : ''}`}
      >
        <span className="font-playfair text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#F3EFE7] block">
          {studioConfig.name}
        </span>
        <span className="font-poppins text-[8px] sm:text-[9px] tracking-[0.55em] uppercase text-accent font-medium -mt-0.5 ml-[0.1rem] block">
          CREATIVE STUDIO
        </span>
      </div>
    </div>
  );
};

export default Preloader;
