import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Portfolio = () => {
  const portfolioImages = [
    {
      src: weddingSample,
      title: 'Romantic Wedding',
      category: 'Wedding',
      size: 'large',
    },
    {
      src: fashionSample,
      title: 'Fashion Editorial',
      category: 'Fashion',
      size: 'medium',
    },
    {
      src: droneSample,
      title: 'Aerial Event',
      category: 'Drone',
      size: 'medium',
    },
    // Placeholder for more images
    {
      src: weddingSample,
      title: 'Pre-Wedding Shoot',
      category: 'Pre-Wedding',
      size: 'small',
    },
    {
      src: fashionSample,
      title: 'Portrait Session',
      category: 'Portrait',  
      size: 'small',
    },
    {
      src: droneSample,
      title: 'Corporate Event',
      category: 'Event',
      size: 'large',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of stunning photography and cinematography work across various categories and styles.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="photo-grid mb-12">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`photo-item group fade-in-delay-${index % 3 + 1} ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                image.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{ minHeight: '250px' }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-primary mb-4">{image.category}</p>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-delay-2">
          <Button size="lg" className="bg-primary hover:bg-primary-glow text-black font-semibold px-8">
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;