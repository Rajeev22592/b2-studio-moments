import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { studioConfig } from '@/lib/studio-data';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const About = () => {
  const team = [
    {
      name: "Rahul Sharma",
      role: "Lead Creative Director & Principal Photographer",
      bio: "With over a decade of capturing royal weddings across India, Rahul blends traditional heritage aesthetics with raw, contemporary cinematic lighting.",
      image: photographerPortrait
    },
    {
      name: "Aisha Sen",
      role: "Art Director & Fashion Photographer",
      bio: "Aisha leads editorial branding, costume styling boards, and studio fashion portfolios, ensuring a high-end magazine finish in every frame.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
    },
    {
      name: "Amit Kumar",
      role: "Principal Cinematographer",
      bio: "Amit specializes in cinematic storytelling and aerial visuals. He directs wedding films with a focus on high-fidelity audio and orchestral pacing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Our Story & Philosophy | {studioConfig.name}</title>
        <meta name="description" content="Discover the creative visionaries behind B2 Studio. Read about our fine-art photography philosophy and meticulous creative direction." />
        <link rel="canonical" href="https://b2studio.in/about" />
      </Helmet>

      <Navigation />
      
      <main className="pt-24">
        {/* Editorial Page Hero */}
        <section className="py-28 border-b border-white/5 bg-gradient-to-b from-background to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-6">
            <span className="text-metadata text-center">
              BEHIND THE VISION
            </span>
            <h1 className="text-editorial-title max-w-4xl mx-auto text-[#FAF8F5]">
              We don't simply click frames. <br />
              <span className="italic text-accent font-normal">We capture how it felt.</span>
            </h1>
            <div className="w-12 h-px bg-accent/30 mx-auto my-6" />
            <p className="text-body-editorial text-white/85 max-w-2xl mx-auto">
              At {studioConfig.name}, we believe your milestones deserve more than standard digital logs. 
              We compose raw emotions, grand setups, and subtle textures into permanent works of art.
            </p>
          </div>
        </section>

        {/* Profile / Bio Section */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Profile Image */}
              <div className="lg:col-span-5 group overflow-hidden bg-white/5 aspect-[3/4] relative">
                <img
                  src={photographerPortrait}
                  alt="Rahul Sharma Lead Photographer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] scale-102 group-hover:scale-100"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-background border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.08em] text-accent font-semibold">
                  ESTABLISHED 2014
                </div>
              </div>

              {/* Biography content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium">
                  the origin story
                </span>
                <h2 className="text-section-title text-[#F3EFE7]">
                  Crafting visual legacies for a decade.
                </h2>
                <p className="text-body-editorial text-white/85">
                  Founded in Mumbai by Rahul Sharma, {studioConfig.name} began as a boutique fine-art agency. 
                  Rahul sought to escape the standard over-exposed card layout common in Indian event photography, 
                  replacing it with dramatic contrasts, deep shadows, and cinematic framing reminiscent of Vogue editorials.
                </p>
                <p className="text-body-editorial text-white/75">
                  Today, the studio houses principal creatives across Jaipur and Mumbai, documenting luxury weddings, 
                  fashion directories, and product launches globally. Our philosophy remains unaltered: 
                  *the photography is the product; the website is the frame*. We construct clean visual records 
                  that present celebrations with maximum dignity and romantic scaling.
                </p>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase px-8 py-5 rounded-none transition-all duration-300 font-semibold">
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Numbered Philosophy Values */}
        <section className="py-28 light bg-background text-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl mb-20 space-y-4">
              <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
                our pillars
              </span>
              <h2 className="text-section-title text-[#171513]">
                Our creative principles.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 font-poppins">
              <div className="space-y-4 border-t border-black/10 pt-8">
                <span className="font-playfair text-4xl text-accent font-normal block">01</span>
                <h3 className="font-playfair text-xl font-normal tracking-wide text-[#171513]">
                  Artistic Honesty
                </h3>
                <p className="text-body-editorial text-[#171513]/85">
                  We capture emotions organically. While we direct couple portraits for maximum elegance, 
                  we avoid staging fake poses, allowing actual smiles, tears, and movements to define the legacy.
                </p>
              </div>

              <div className="space-y-4 border-t border-black/10 pt-8">
                <span className="font-playfair text-4xl text-accent font-normal block">02</span>
                <h3 className="font-playfair text-xl font-normal tracking-wide text-[#171513]">
                  Creative Direction
                </h3>
                <p className="text-body-editorial text-[#171513]/85">
                  Every event or commercial shoot features dedicated styling direction. We collaborate on visual boards, 
                  outfit tones, and spatial layouts to guarantee visual cohesion in every deliverable.
                </p>
              </div>

              <div className="space-y-4 border-t border-black/10 pt-8">
                <span className="font-playfair text-4xl text-accent font-normal block">03</span>
                <h3 className="font-playfair text-xl font-normal tracking-wide text-[#171513]">
                  Post-Production Mastery
                </h3>
                <p className="text-body-editorial text-[#171513]/85">
                  We sort and grade every digital frame by hand in our studio. We avoid generic automated filters, 
                  developing custom presets that highlight skin tones, heritage colors, and ambient lighting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Creatives (Staff Profile Grid) */}
        <section className="py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
              <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
                the creative collective
              </span>
              <h2 className="text-section-title text-[#FAF8F5]">
                Meet the Team
              </h2>
              <p className="font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-white/70 font-medium">
                Artists committed to documenting your story.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group space-y-6">
                  <div className="relative aspect-[3/4] bg-white/5 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] scale-102 group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair text-2xl font-normal tracking-wide text-white">
                      {member.name}
                    </h3>
                    <span className="font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-accent font-medium block">
                      {member.role}
                    </span>
                    <p className="text-body-editorial text-white/75 pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review & Trust */}
        <section className="py-28 bg-surface border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide italic text-accent leading-relaxed">
              “Rahul and the B2 Studio crew created visuals that look more like cinematic archives than simple family wedding photographs. They preserved our heritage with maximum beauty.”
            </h2>
            <p className="font-poppins text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-white/60 font-medium">
              MEERA & SIDDHARTH &nbsp;·&nbsp; JAIPUR STORY
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default About;
