import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Youtube,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi B2 Studio! I'm interested in your photography services.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@b2studio.com", "bookings@b2studio.com"],
      action: "mailto:hello@b2studio.com"
    },
    {
      icon: MapPin,
      title: "Studio Address",
      details: ["123 Photography Lane", "Mumbai, Maharashtra 400001"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
      action: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/b2studio", followers: "50K+" },
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/b2studio", followers: "25K+" },
    { icon: Youtube, name: "YouTube", url: "https://youtube.com/b2studio", followers: "10K+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact B2 Studio | Book Your Photography Session</title>
        <meta name="description" content="Get in touch with B2 Studio for wedding photography, portraits, and events. Contact us via phone, email, or WhatsApp for bookings and inquiries." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Let's Create <span className="text-primary">Magic</span> Together
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to capture your special moments? We'd love to hear from you. 
                Reach out and let's discuss how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                  <h2 className="font-playfair text-2xl font-bold mb-2 text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type</Label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding Photography</option>
                          <option value="prewedding">Pre-Wedding Shoot</option>
                          <option value="portrait">Portrait Session</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="product">Product Photography</option>
                          <option value="fashion">Fashion Shoot</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Preferred Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your event, vision, and any specific requirements..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Quick Response via WhatsApp</h3>
                      <p className="text-white/80 text-sm">Get instant replies for urgent inquiries</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="secondary"
                    className="w-full mt-4 bg-white text-green-600 hover:bg-white/90"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    Contact Information
                  </h3>
                  
                  <div className="grid gap-4">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            info.action ? (
                              <a 
                                key={idx}
                                href={info.action}
                                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                                target={info.action.startsWith('http') ? '_blank' : undefined}
                                rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    Follow Our Work
                  </h3>
                  
                  <div className="grid gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{social.name}</h4>
                          <p className="text-muted-foreground text-sm">{social.followers} Followers</p>
                        </div>
                        <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Follow →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-muted-foreground">Studio Location</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>
            
            <div className="grid gap-4">
              {[
                {
                  q: "How far in advance should I book?",
                  a: "We recommend booking at least 2-3 months in advance for weddings and major events. For portrait sessions, 1-2 weeks notice is usually sufficient."
                },
                {
                  q: "Do you travel for destination shoots?",
                  a: "Yes! We love destination shoots. Travel and accommodation costs will be discussed and added to the package price."
                },
                {
                  q: "What is your payment policy?",
                  a: "We require a 30% advance to confirm your booking, with the remaining balance due before the event or delivery of final images."
                },
                {
                  q: "How long until we receive our photos?",
                  a: "Edited photos are typically delivered within 2-4 weeks. Wedding albums may take 6-8 weeks for design and printing."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
