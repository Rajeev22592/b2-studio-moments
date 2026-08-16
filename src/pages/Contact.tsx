import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient';
import { studioConfig } from '@/lib/studio-data';
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';

const serviceOptions = [
  "Photography",
  "Cinematography (Films)",
  "Pre-Wedding Editorial",
  "Drone/Aerial Coverage",
  "Product/Commercial Campaign"
];

const budgetOptions = [
  "Under ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "Above ₹10,00,000"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    services: [] as string[],
    budgetRange: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budgetRange: budget }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formData.name || !formData.email || !formData.eventType || !formData.message) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields (Name, Email, Event Type, and Message).",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const formattedDate = formData.eventDate 
        ? new Date(formData.eventDate).toISOString().split('T')[0]
        : null;

      // Compile detailed inquiry options cleanly in the message body
      const compositeMessage = `
[Bespoke Inquiry Details]
Location: ${formData.location || 'Not Specified'}
Guest Count: ${formData.guestCount || 'Not Specified'}
Services: ${formData.services.join(', ') || 'Not Specified'}
Budget Range: ${formData.budgetRange || 'Not Specified'}

[Message]
${formData.message.trim()}
`.trim();

      const { error } = await supabase
        .from('inquiries')
        .insert([{
          full_name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || null,
          event_type: formData.eventType,
          preferred_date: formattedDate,
          message: compositeMessage,
        }]);

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Inquiry Submitted",
        description: "Your story has reached us. We will get back to you shortly.",
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: error.message || "Failed to send your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(studioConfig.whatsappDefaultMsg);
    window.open(`https://wa.me/${studioConfig.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Start Your Story | Contact {studioConfig.name}</title>
        <meta name="description" content="Connect with our luxury digital team. Commission B2 Studio for weddings, fashion, corporate events, and editorial campaigns globally." />
        <link rel="canonical" href="https://b2studio.in/contact" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-24 border-b border-white/5 bg-gradient-to-b from-background to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-6">
            <span className="text-metadata text-center">
              COMMISSION WORK
            </span>
            <h1 className="text-editorial-title max-w-4xl mx-auto text-[#FAF8F5]">
              Let's craft something <br />
              <span className="italic text-accent font-normal">timeless together.</span>
            </h1>
            <div className="w-12 h-px bg-accent/30 mx-auto my-6" />
            <p className="text-body-editorial text-white/85 max-w-xl mx-auto">
              Now booking commissions across India & worldwide. Complete the visual blueprint below, 
              and our creative office will connect with you within 24 hours.
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column - Studio Info */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <span className="text-metadata">
                    THE STUDIO
                  </span>
                  <h2 className="font-playfair text-2xl sm:text-3xl font-normal text-white">
                    Direct Contacts
                  </h2>
                  <p className="font-poppins text-[15px] sm:text-base text-white/70 leading-relaxed font-normal">
                    If you prefer a direct dialogue, connect via phone, email or visit our studios in Jaipur & Mumbai.
                  </p>
                </div>

                {/* Direct info items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 py-4 border-b border-white/5">
                    <Mail className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div className="space-y-1 font-poppins text-xs">
                      <span className="text-white/60 block uppercase tracking-[0.1em] text-[10px] sm:text-[11px] font-medium">Inquiries</span>
                      <a href={`mailto:${studioConfig.emails.bookings}`} className="text-white hover:text-accent transition-colors block font-medium sm:text-sm">
                        {studioConfig.emails.bookings}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-4 border-b border-white/5">
                    <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div className="space-y-1 font-poppins text-xs">
                      <span className="text-white/60 block uppercase tracking-[0.1em] text-[10px] sm:text-[11px] font-medium">WhatsApp & Phone</span>
                      <a href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`} className="text-white hover:text-accent transition-colors block font-medium sm:text-sm">
                        {studioConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-4 border-b border-white/5">
                    <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div className="space-y-2 font-poppins text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      <span className="text-white/60 block uppercase tracking-[0.1em] text-[10px] sm:text-[11px] font-medium mb-1">Studios</span>
                      <p className="leading-relaxed"><strong className="text-white">Mumbai HQ:</strong> {studioConfig.addresses.mumbai}</p>
                      <p className="leading-relaxed"><strong className="text-white">Jaipur Office:</strong> {studioConfig.addresses.jaipur}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-4">
                    <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div className="space-y-1 font-poppins text-xs sm:text-sm text-white/80 font-normal">
                      <span className="text-white/60 block uppercase tracking-[0.1em] text-[10px] sm:text-[11px] font-medium">Working Hours</span>
                      <p>{studioConfig.workingHours}</p>
                    </div>
                  </div>
                </div>

                {/* Elegant WhatsApp Banner */}
                <div className="bg-surface border border-white/5 p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-green-500">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg text-white font-normal">Instant Dialogue</h4>
                      <p className="font-poppins text-[13px] sm:text-sm text-white/70 leading-relaxed font-normal mt-1">
                        Connect with our studio manager instantly over WhatsApp for calendar lock questions.
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] rounded-none py-5 font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase transition-all duration-500 font-semibold"
                  >
                    Start Chat
                  </Button>
                </div>
              </div>

              {/* Right Column - Inquiry Questionnaire Form */}
              <div className="lg:col-span-7 bg-card border border-white/5 p-8 sm:p-12">
                {isSuccess ? (
                  /* Premium Success State */
                  <div className="py-20 text-center space-y-6 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h2 className="font-playfair text-2xl sm:text-3xl font-normal text-accent tracking-wide leading-tight">
                      YOUR STORY HAS REACHED US.
                    </h2>
                    <div className="w-10 h-px bg-accent/25" />
                    <p className="font-poppins text-[15px] sm:text-base text-white/80 max-w-sm mx-auto leading-relaxed font-normal">
                      Our creative directors are reviewing your blueprint. We will connect with you within 24 hours to schedule a private mood board review.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-2">
                      <h2 className="font-playfair text-2xl font-normal text-white">
                        Consultation Blueprint
                      </h2>
                      <p className="font-poppins text-[10px] sm:text-[11px] text-accent tracking-[0.1em] uppercase font-medium">
                        Fields marked * are required
                      </p>
                    </div>

                    <div className="space-y-8">
                      {/* Name Input */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Your Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Meera Sen"
                          required
                          className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal"
                        />
                      </div>

                      {/* Email & Phone grid */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="email" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. meera@example.com"
                            required
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="phone" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Phone Number</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 97998 87002"
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal"
                          />
                        </div>
                      </div>

                      {/* Event Type & Date Grid */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="eventType" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Event Type *</label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            required
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal cursor-pointer [&>option]:bg-[#0D0D0D] [&>option]:text-white"
                          >
                            <option value="">Select scope</option>
                            <option value="wedding">Royal/Palace Wedding</option>
                            <option value="prewedding">Pre-Wedding Editorial</option>
                            <option value="portrait">Studio Portrait Session</option>
                            <option value="corporate">Corporate Gala/Summit</option>
                            <option value="product">Product/Brand Campaign</option>
                            <option value="fashion">Fashion Campaign</option>
                            <option value="other">Bespoke Project</option>
                          </select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="eventDate" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Target Date</label>
                          <input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleInputChange}
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal cursor-pointer color-scheme-dark"
                          />
                        </div>
                      </div>

                      {/* Location & Guest Count Grid */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="location" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Location / City</label>
                          <input
                            id="location"
                            name="location"
                            type="text"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. Udaipur, Italy"
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="guestCount" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Estimated Guest Count</label>
                          <input
                            id="guestCount"
                            name="guestCount"
                            type="number"
                            value={formData.guestCount}
                            onChange={handleInputChange}
                            placeholder="e.g. 350"
                            className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal"
                          />
                        </div>
                      </div>

                      {/* Services Required Checkbox Panel */}
                      <div className="space-y-3">
                        <span className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium block mb-1">Services Required</span>
                        <div className="flex flex-wrap gap-2.5">
                          {serviceOptions.map((serv) => {
                            const selected = formData.services.includes(serv);
                            return (
                              <button
                                key={serv}
                                type="button"
                                onClick={() => handleServiceToggle(serv)}
                                className={`px-4 py-2 border font-poppins text-xs sm:text-[13px] tracking-[0.05em] uppercase transition-all duration-300 ${
                                  selected 
                                    ? 'bg-accent border-accent text-black font-semibold' 
                                    : 'border-white/10 text-white/80 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                {serv}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Budget Range selector */}
                      <div className="space-y-3">
                        <span className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium block mb-1">Commission Budget *</span>
                        <div className="flex flex-wrap gap-2.5">
                          {budgetOptions.map((budg) => {
                            const selected = formData.budgetRange === budg;
                            return (
                              <button
                                key={budg}
                                type="button"
                                onClick={() => handleBudgetSelect(budg)}
                                className={`px-4 py-2 border font-poppins text-xs sm:text-[13px] tracking-[0.05em] uppercase transition-all duration-300 ${
                                  selected 
                                    ? 'bg-accent border-accent text-black font-semibold' 
                                    : 'border-white/10 text-white/80 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                {budg}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message Box */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="message" className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-white/75 font-medium">Your Message / Creative Vision *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Outline details, creative vibes, outfit tones, same-day expectations..."
                          rows={4}
                          required
                          className="border-b border-white/10 bg-transparent py-3 text-sm sm:text-base text-white focus:border-accent outline-none transition-all duration-300 font-poppins font-normal resize-none"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] py-6 rounded-none font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase font-semibold transition-all duration-500"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          SENDING BLUEPRINT...
                        </span>
                      ) : (
                        <span>SEND INQUIRY</span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
