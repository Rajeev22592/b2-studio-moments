import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-primary" />
              <span className="font-playfair text-2xl font-bold">B2 Studio</span>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Professional photography and cinematography services capturing life's most precious moments with artistic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-secondary-foreground/80 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-secondary-foreground/80">Wedding Photography</span></li>
              <li><span className="text-secondary-foreground/80">Event Photography</span></li>
              <li><span className="text-secondary-foreground/80">Fashion & Portraits</span></li>
              <li><span className="text-secondary-foreground/80">Cinematography</span></li>
              <li><span className="text-secondary-foreground/80">Drone Photography</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p>123 Photography Street</p>
                  <p>Studio District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919799887002" className="text-secondary-foreground/80 hover:text-primary transition-colors">+91 97998 87002</a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <a href="https://wa.me/919799887002" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors">WhatsApp: +91 97998 87002</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">hello@b2studio.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 B2 Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;