import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0908] text-[#F3EFE7] font-poppins">
      <div className="text-center space-y-6">
        <h1 className="font-playfair text-6xl font-light text-accent">404</h1>
        <p className="text-sm text-white/60 tracking-wider uppercase">Page Not Found</p>
        <div className="pt-4">
          <a href="/" className="font-poppins text-xs tracking-widest uppercase border-b border-accent pb-1 text-[#F3EFE7] hover:text-accent transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
