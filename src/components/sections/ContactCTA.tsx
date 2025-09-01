import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-gold text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Capture Your Special Day
          </h2>
          
          <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
            Ready to create beautiful memories together? Get in touch with us today to discuss your photography and cinematography needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 font-semibold"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-black/70">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-black/30"></div>
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;