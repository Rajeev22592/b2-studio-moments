'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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
              asChild
            >
              <Link href="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 font-semibold"
              onClick={() => window.open('tel:+919799887002', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-black/70">
            <a href="tel:+919799887002" className="flex items-center hover:text-black transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 97998 87002</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-black/30"></div>
            <a 
              href="https://wa.me/919799887002?text=Hi%20B2%20Studio!%20I'm%20interested%20in%20your%20photography%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-black transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;