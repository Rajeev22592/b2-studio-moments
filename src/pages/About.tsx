import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Camera, Users, Heart, Star, ArrowRight } from 'lucide-react';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Camera,
    title: 'Artistic Excellence',
    description: 'Every frame we capture is a masterpiece, blending technical precision with creative vision.',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Our love for photography shines through in every project we undertake.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Premium equipment and meticulous editing ensure exceptional results every time.',
  },
];

const team = [
  {
    name: 'Rahul Sharma',
    role: 'Lead Photographer',
    image: photographerPortrait,
  },
  {
    name: 'Priya Patel',
    role: 'Creative Director',
    image: photographerPortrait,
  },
  {
    name: 'Amit Kumar',
    role: 'Cinematographer',
    image: photographerPortrait,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Capturing Life's <span className="text-primary">Beautiful</span> Moments
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At B2 Studio, we believe every moment tells a story. Our mission is to transform your precious memories into timeless visual narratives that you'll cherish forever.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={photographerPortrait}
                    alt="B2 Studio Founder"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-hero"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/20 rounded-2xl -z-0"></div>
                <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg z-20">
                  <span className="font-playfair text-2xl font-bold">5+</span>
                  <span className="block text-sm">Years of Excellence</span>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Story</span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                  From Passion to <span className="text-primary">Profession</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2019, B2 Studio began as a small passion project. What started as capturing moments for friends and family has grown into a full-service photography and cinematography studio serving clients across the region.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Today, our team of creative professionals combines technical expertise with artistic vision to deliver exceptional results. From intimate weddings to grand corporate events, fashion shoots to aerial cinematography, we bring your vision to life with unparalleled attention to detail.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Values</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3 text-foreground">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 bg-surface rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Team</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3 text-foreground">
                Meet the <span className="text-primary">Creatives</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                A passionate team dedicated to capturing your most precious moments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Create Something <span className="text-primary">Beautiful</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life. Our team is ready to capture your special moments with creativity and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
