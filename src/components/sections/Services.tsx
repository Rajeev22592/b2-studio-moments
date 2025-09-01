import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Camera, Plane, Edit, Film } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with romantic, timeless wedding photography that tells your unique love story.',
      features: ['Pre-wedding shoots', 'Full day coverage', 'Edited gallery', 'Print packages'],
    },
    {
      icon: Users,
      title: 'Event Photography',
      description: 'Professional event documentation for corporate functions, parties, and special occasions.',
      features: ['Corporate events', 'Birthday parties', 'Anniversary celebrations', 'Product launches'],
    },
    {
      icon: Camera,
      title: 'Fashion & Portraits',
      description: 'Professional portrait and fashion photography with studio-quality lighting and composition.',
      features: ['Studio sessions', 'Outdoor shoots', 'Fashion editorials', 'Headshot photography'],
    },
    {
      icon: Film,
      title: 'Cinematography',
      description: 'Cinematic video production services including wedding films and promotional videos.',
      features: ['Wedding films', 'Corporate videos', 'Music videos', 'Documentary style'],
    },
    {
      icon: Plane,
      title: 'Drone Photography',
      description: 'Aerial photography and cinematography services for breathtaking perspectives.',
      features: ['Aerial photography', 'Real estate shoots', 'Event coverage', 'Landscape photography'],
    },
    {
      icon: Edit,
      title: 'Editing & Retouching',
      description: 'Professional photo and video editing services to enhance and perfect your content.',
      features: ['Color correction', 'Retouching', 'Video editing', 'Album design'],
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive photography and cinematography services tailored to capture your most important moments with artistic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card fade-in-delay-${index % 3 + 1} group`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-black transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;