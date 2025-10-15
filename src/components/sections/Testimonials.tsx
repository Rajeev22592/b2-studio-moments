import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      event: 'Wedding Photography',
      rating: 5,
      text: 'B2 Studio captured our wedding day perfectly! The attention to detail and artistic vision exceeded our expectations. Every photo tells a beautiful story of our special day.',
      image: '👰',
    },
    {
      name: 'David Chen',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional, punctual, and incredibly talented. The team at B2 Studio documented our product launch flawlessly. The photos are being used across all our marketing materials.',
      image: '👨‍💼',
    },
    {
      name: 'Emma Rodriguez',
      event: 'Fashion Shoot',
      rating: 5,
      text: 'Working with B2 Studio was an amazing experience. Their creative direction and technical expertise resulted in stunning portfolio images that have elevated my modeling career.',
      image: '👩‍🎨',
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Client <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with B2 Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white shadow-medium hover:shadow-hero transition-shadow fade-in-delay-${index + 1}`}>
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-delay-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="font-playfair text-2xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="font-playfair text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div>
              <div className="font-playfair text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Referral Rate</div>
            </div>
            <div>
              <div className="font-playfair text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;