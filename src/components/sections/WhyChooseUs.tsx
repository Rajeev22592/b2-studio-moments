import { Award, Clock, Camera, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Camera,
      title: 'Creative Team',
      description: 'Our experienced photographers and cinematographers bring artistic vision and technical expertise to every project.',
    },
    {
      icon: Award,
      title: 'High-End Equipment',
      description: 'We use the latest professional cameras, lenses, and lighting equipment to ensure premium quality results.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality. Get your edited photos and videos within 5-7 business days.',
    },
    {
      icon: Users,
      title: 'Affordable Packages',
      description: 'Competitive pricing with customizable packages to fit your budget and specific requirements.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">B2 Studio</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We combine artistic excellence with professional reliability to deliver exceptional results that exceed your expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className={`text-center fade-in-delay-${index % 4 + 1} group`}>
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold mb-4 text-white">
                {reason.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 border-t border-white/20 pt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="font-playfair text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
            <div className="fade-in-delay-1">
              <div className="font-playfair text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-white/70">Events Captured</div>
            </div>
            <div className="fade-in-delay-2">
              <div className="font-playfair text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="fade-in-delay-3">
              <div className="font-playfair text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;