import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in">
            <div className="relative">
              <img 
                src={photographerPortrait}
                alt="B2 Studio Professional Photographer"
                className="w-full h-[600px] object-cover rounded-lg shadow-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="fade-in-delay-1">
            <div className="max-w-xl">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About <span className="text-primary">B2 Studio</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for capturing life's most precious moments, B2 Studio has been transforming memories into timeless art for over 5 years. Our team of creative professionals combines technical expertise with artistic vision to deliver exceptional photography and cinematography services.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From intimate weddings to grand corporate events, fashion shoots to aerial cinematography, we bring your vision to life with unparalleled attention to detail and creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="text-center">
                    <div className="font-playfair text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div className="font-playfair text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm">Satisfaction</div>
                  </div>
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