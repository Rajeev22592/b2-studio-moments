import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Camera, Heart, Sparkles } from 'lucide-react';
import heroWedding from '@/assets/hero-wedding.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroWedding})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
              Our Story, Craft, and Promise
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              B2 Studio turns fleeting moments into timeless art with cinematic visuals,
              refined direction, and a premium customer experience.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold px-8 py-4 shadow-lg shadow-black/40">
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Crafted with passion, delivered with precision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded from a love for storytelling, B2 Studio has grown into a boutique
                  team of photographers and filmmakers who believe every frame should feel
                  intentional. Our signature palette of deep blacks and premium gold accents
                  reflects the luxury and warmth we bring to every project—be it weddings,
                  fashion, or corporate events.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We guide you effortlessly through the creative process—from concept and
                  direction to final delivery—ensuring an experience that is calm,
                  organized, and unforgettable.
                </p>
              </div>
              <Card className="shadow-hero">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 divide-x divide-border text-center">
                    <div>
                      <div className="font-playfair text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="font-playfair text-3xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Events Captured</div>
                    </div>
                    <div>
                      <div className="font-playfair text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
              What defines our work
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-card shadow-hero">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Cinematic Direction</span>
                  </div>
                  <p className="text-muted-foreground">
                    Thoughtful framing, lighting, and movement that elevate real moments
                    into editorial-quality visuals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-card shadow-hero">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Luxury Aesthetic</span>
                  </div>
                  <p className="text-muted-foreground">
                    A refined black-and-gold palette with clean design for a premium,
                    timeless presentation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-card shadow-hero">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Client-First Care</span>
                  </div>
                  <p className="text-muted-foreground">
                    Calm guidance, clear communication, and delivery that respects your
                    timeline and vision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
              A seamless, guided process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'We learn your story, goals, and aesthetic.' },
                { step: '02', title: 'Direction', desc: 'Moodboards, shotlists, and schedule planning.' },
                { step: '03', title: 'Capture', desc: 'Professional, unobtrusive coverage on the day.' },
                { step: '04', title: 'Deliver', desc: 'Polished edits and timely delivery in premium galleries.' },
              ].map((item) => (
                <Card key={item.step} className="shadow-hero">
                  <CardContent className="p-6">
                    <div className="text-primary font-playfair text-2xl font-bold mb-2">{item.step}</div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-4" />

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to create timeless memories?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let’s plan the perfect shoot—wedding, fashion, or corporate.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold px-8 py-4">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;