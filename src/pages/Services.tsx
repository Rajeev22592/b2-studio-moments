import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesList, pricingPackages, faqList, studioConfig } from '@/lib/studio-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Premium Services & Pricing Packages | {studioConfig.name}</title>
        <meta name="description" content="Explore B2 Studio's premium photography services, wedding films, and brand campaign packages. Customize your commission details here." />
        <link rel="canonical" href="https://b2studio.in/services" />
      </Helmet>

      <Navigation />
      
      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-28 border-b border-white/5 bg-gradient-to-b from-background to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-6">
            <span className="text-metadata text-center">
              OUR CAPABILITIES
            </span>
            <h1 className="text-editorial-title max-w-4xl mx-auto text-[#FAF8F5]">
              Bespoke visual services, <br />
              <span className="italic text-accent font-normal">tailored to your legacy.</span>
            </h1>
            <div className="w-12 h-px bg-accent/30 mx-auto my-6" />
            <p className="text-body-editorial text-white/85 max-w-2xl mx-auto">
              From cinematic wedding films in Jaipur to high-fashion editorial campaigns in Mumbai, 
              we offer premium photography solutions backed by strategic creative direction and post-production mastery.
            </p>
          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <div
                  key={service.id}
                  className="border border-white/5 bg-card flex flex-col justify-between group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] scale-102 group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Body */}
                  <div className="p-8 space-y-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="font-poppins text-[10px] uppercase tracking-[0.08em] text-accent font-medium block">
                        0{index + 1} &nbsp;·&nbsp; CAPABILITY
                      </span>
                      <h3 className="font-playfair text-2xl font-normal tracking-wide text-white">
                        {service.title}
                      </h3>
                      <p className="text-body-editorial text-white/85">
                        {service.longDescription}
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/5">
                      <span className="font-poppins text-[10px] uppercase tracking-[0.08em] text-accent block font-medium">
                        INCLUDED FEATURES
                      </span>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2.5 font-poppins text-[11px] sm:text-xs uppercase tracking-[0.05em] text-white/80 font-medium">
                            <Check className="h-3 w-3 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Packages */}
        <section className="py-32 light bg-background text-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-28 space-y-4">
              <span className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-accent font-semibold block">
                COMMISSION MODELS
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl font-normal tracking-tight text-[#171513] leading-[1.05]">
                Pricing & Packages
              </h2>
              <p className="font-poppins text-xs sm:text-sm uppercase tracking-[0.08em] text-[#171513]/70 font-medium">
                Transparent options designed to fit your unique scope.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {pricingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`border p-8 space-y-8 relative transition-all duration-500 ${
                    pkg.popular
                      ? 'bg-[#0A0908] text-[#F3EFE7] border-transparent lg:-translate-y-4 shadow-2xl'
                      : 'bg-[#FFFFFF] text-[#171513] border-black/10 hover:border-accent'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-black px-4 py-1 text-[10px] uppercase tracking-[0.08em] font-medium">
                      RECOMMENDED COMMISSION
                    </div>
                  )}

                  <div className="space-y-4 text-center">
                    <h3 className="font-playfair text-2xl font-normal tracking-wide">
                      {pkg.name}
                    </h3>
                    <div className="font-playfair text-4xl font-normal text-accent">
                      {pkg.price}
                    </div>
                    <p className={`text-body-editorial text-center font-normal ${pkg.popular ? 'text-white/85' : 'text-[#171513]/85'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={`w-12 h-px ${pkg.popular ? 'bg-white/20' : 'bg-black/10'} mx-auto`} />

                  <ul className="space-y-3 font-poppins text-xs sm:text-sm tracking-wide font-normal">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className={pkg.popular ? 'text-white/85' : 'text-black/85'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link to="/contact" className="block w-full">
                      <Button
                        className={`w-full py-6 rounded-none font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase transition-all duration-500 font-semibold ${
                          pkg.popular
                            ? 'bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] border-transparent'
                            : 'bg-[#171513] text-[#F3EFE7] hover:bg-accent hover:text-[#171513] border-transparent'
                        }`}
                      >
                        Inquire Package
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-black/70 font-poppins text-[13px] sm:text-sm tracking-wide mt-12">
              * Bespoke custom packages are available for multi-city destination weddings. &nbsp;
              <Link to="/contact" className="text-accent hover:underline font-semibold">
                Consult with us →
              </Link>
            </p>
          </div>
        </section>

        {/* Accordion FAQ Section */}
        <section className="py-28 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
                queries answered
              </span>
              <h2 className="text-section-title text-[#FAF8F5]">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqList.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/5 bg-surface px-6 py-2 rounded-none"
                >
                  <AccordionTrigger className="font-playfair text-lg text-white/90 hover:text-accent font-normal tracking-wide text-left py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body-editorial text-white/80 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Services;
