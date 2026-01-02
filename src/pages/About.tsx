import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Heart, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">About Us</span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Capturing Life's <span className="text-primary">Beautiful</span> Moments
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At B2 Studio, we believe every moment tells a story. Our mission is to transform your precious memories into timeless visual narratives that you'll cherish forever.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="fade-in">
                <div className="relative">
                  <img 
                    src={photographerPortrait}
                    alt="Rahul Sharma - Lead Photographer"
                    className="w-full h-[600px] object-cover rounded-lg shadow-hero"
                  />
                  <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded-lg">
                    <span className="text-black font-semibold text-sm">5+ Years of Excellence</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="fade-in-delay-1">
                <div className="max-w-xl">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">OUR STORY</p>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    From Passion to <span className="text-primary">Profession</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    What started as a passion project has evolved into a full-service photography and cinematography studio. Over the years, we've had the privilege of capturing countless special moments, from intimate weddings to grand corporate events.
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our journey began with a simple belief: every moment deserves to be captured with artistry and care. Today, we combine cutting-edge technology with creative vision to deliver exceptional results that exceed expectations.
                  </p>
                  
                  <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="fade-in">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">500+</div>
                <div className="text-black/80 font-medium">Projects Completed</div>
              </div>
              <div className="fade-in-delay-1">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">5+</div>
                <div className="text-black/80 font-medium">Years Experience</div>
              </div>
              <div className="fade-in-delay-2">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-black/80 font-medium">Client Satisfaction</div>
              </div>
              <div className="fade-in-delay-3">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
                <div className="text-black/80 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">OUR VALUES</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Artistic Excellence */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">Artistic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every frame we capture is a masterpiece, blending technical precision with creative vision.
                </p>
              </div>

              {/* Passion Driven */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">Passion Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our love for photography shines through in every project we undertake.
                </p>
              </div>

              {/* Client Focused */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">Client Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your vision is our priority. We listen, understand, and deliver beyond expectations.
                </p>
              </div>

              {/* Quality Assured */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">Quality Assured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium equipment and meticulous editing ensure exceptional results every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">OUR TEAM</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Meet the <span className="text-primary">Creatives</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate team dedicated to capturing your most precious moments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="fade-in">
                <div className="relative">
                  <img 
                    src={photographerPortrait}
                    alt="Rahul Sharma - Lead Photographer"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="font-playfair text-xl font-bold text-white mb-1">Rahul Sharma</h3>
                    <p className="text-white/80">Lead Photographer</p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="fade-in-delay-1">
                <div className="relative">
                  <img 
                    src={photographerPortrait}
                    alt="Priya Patel - Creative Director"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="font-playfair text-xl font-bold text-white mb-1">Priya Patel</h3>
                    <p className="text-white/80">Creative Director</p>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="fade-in-delay-2">
                <div className="relative">
                  <img 
                    src={photographerPortrait}
                    alt="Amit Kumar - Cinematographer"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="font-playfair text-xl font-bold text-white mb-1">Amit Kumar</h3>
                    <p className="text-white/80">Cinematographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-8 w-8 text-primary mr-2" />
              <span className="font-playfair text-2xl font-bold">B2 Studio</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Create Something <span className="text-primary">Beautiful</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life. Our team is ready to capture your special moments with creativity and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
