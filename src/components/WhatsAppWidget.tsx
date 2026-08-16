import { MessageCircle } from 'lucide-react';
import { studioConfig } from '@/lib/studio-data';

const WhatsAppWidget = () => {
  const handleClick = () => {
    const encodedMsg = encodeURIComponent(studioConfig.whatsappDefaultMsg);
    window.open(`https://wa.me/${studioConfig.whatsappNumber}?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-background border border-border/80 text-foreground hover:text-white hover:bg-black hover:border-black shadow-lg pl-4 pr-5 py-3 transition-all duration-300 font-poppins text-xs uppercase tracking-widest group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Subtle pulsing green indicator dot inside the button */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#25D366] rounded-full" />
        <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:text-white transition-colors" />
      </div>
      <span className="font-semibold">Chat With Us</span>
    </button>
  );
};

export default WhatsAppWidget;
