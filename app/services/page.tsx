import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Video, 
  Plane, 
  Users, 
  Heart, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles,
  Clock,
  MessageSquare,
  Image
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional photography and cinematography services including wedding photography, pre-wedding shoots, fashion photography, drone photography, and corporate events.',
  keywords: ['wedding photography', 'pre-wedding shoots', 'cinematography', 'fashion photography', 'drone photography', 'corporate events', 'photography services'],
  openGraph: {
    title: 'Professional Photography Services | B2 Studio',
    description: 'From weddings to corporate events, we offer comprehensive photography and cinematography services tailored to your unique needs.',
  },
};

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capture your special day with timeless elegance. From intimate ceremonies to grand celebrations, we document every precious moment.',
    features: ['Full day coverage', 'Candid & posed shots', 'Album design', 'Online gallery'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    icon: Camera,
    title: 'Pre-Wedding Shoots',
    description: 'Create magical memories before your big day with stunning pre-wedding photography at beautiful locations.',
    features: ['Location scouting', 'Outfit consultation', 'Multiple looks', 'Cinematic edits'],
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80',
  },
  {
    icon: Video,
    title: 'Cinematography',
    description: 'Professional video production that tells your story with cinematic quality and emotional depth.',
    features: ['4K recording', 'Drone footage', 'Color grading', 'Same-day edits'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Fashion Photography',
    description: 'Elevate your brand with stunning fashion photography that captures style, personality, and sophistication.',
    features: ['Studio & outdoor', 'Professional styling', 'Portfolio ready', 'Commercial use'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
  },
  {
    icon: Plane,
    title: 'Drone Photography',
    description: 'Capture breathtaking aerial perspectives with our professional drone photography services.',
    features: ['Licensed pilots', 'High-res imagery', 'Video & stills', 'Event coverage'],
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, product launches, and corporate gatherings.',
    features: ['Quick turnaround', 'Team headshots', 'Event highlights', 'Brand focused'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
];

const packages = [
  {
    name: 'Essential',
    price: '₹25,000',
    description: 'Perfect for intimate events and small gatherings',
    features: [
      '4 hours coverage',
      '100+ edited photos',
      'Online gallery',
      'Basic retouching',
      '1 photographer',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹50,000',
    description: 'Our most popular package for weddings and events',
    features: [
      'Full day coverage',
      '300+ edited photos',
      'Online gallery + USB',
      'Advanced retouching',
      '2 photographers',
      'Pre-wedding shoot',
      'Highlight video',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    price: '₹1,00,000',
    description: 'Complete coverage for your most special occasions',
    features: [
      '2-day coverage',
      '500+ edited photos',
      'Premium album',
      'Cinematic film',
      '3 photographers',
      'Pre-wedding shoot',
      'Drone coverage',
      'Same-day edit',
    ],
    popular: false,
  },
];

const process = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and preferences to understand your unique story.',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Planning',
    description: 'Our team creates a detailed plan including locations, timeline, and creative concepts.',
  },
  {
    step: '03',
    icon: Camera,
    title: 'Capture',
    description: 'On the day, we capture every precious moment with creativity and professionalism.',
  },
  {
    step: '04',
    icon: Image,
    title: 'Delivery',
    description: 'Receive your beautifully edited photos and videos in your preferred format.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Professional <span className="text-primary">Photography</span> Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From weddings to corporate events, we offer comprehensive photography and cinematography services tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">How We Work</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3 text-foreground">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                A seamless journey from consultation to delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <span className="absolute -top-2 -left-2 font-playfair text-5xl font-bold text-primary/20">
                        {item.step}
                      </span>
                      <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Pricing</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3 text-foreground">
                Choose Your <span className="text-primary">Package</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Flexible packages designed to fit your needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                    pkg.popular
                      ? 'bg-primary text-primary-foreground shadow-2xl scale-105'
                      : 'bg-background border border-border hover:border-primary/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-background text-primary px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className={`font-playfair text-2xl font-bold mb-2 ${pkg.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {pkg.name}
                    </h3>
                    <div className={`font-playfair text-4xl font-bold mb-2 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                      {pkg.price}
                    </div>
                    <p className={`text-sm ${pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                        <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-background text-primary hover:bg-background/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary-glow'
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8 text-sm">
              * Custom packages available. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for personalized quotes.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Book Your <span className="text-primary">Session</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something beautiful together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8" asChild>
                <Link href="/contact">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

