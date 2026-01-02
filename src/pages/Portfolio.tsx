import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Portfolio = () => {
  const categories = [
    {
      id: 'weddings',
      title: 'Weddings',
      description: 'Timeless moments of love captured with elegance',
      image: weddingSample,
      count: 45,
    },
    {
      id: 'portraits',
      title: 'Portraits',
      description: 'Expressive portraits that reveal true character',
      image: fashionSample,
      count: 38,
    },
    {
      id: 'events',
      title: 'Events',
      description: 'Corporate gatherings and celebrations documented',
      image: droneSample,
      count: 52,
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Brand imagery that drives business success',
      image: weddingSample,
      count: 29,
    },
    {
      id: 'product',
      title: 'Product',
      description: 'Showcase your products with stunning visuals',
      image: fashionSample,
      count: 67,
    },
    {
      id: 'fashion',
      title: 'Fashion',
      description: 'Editorial and runway photography',
      image: fashionSample,
      count: 41,
    },
    {
      id: 'travel',
      title: 'Travel',
      description: 'Breathtaking destinations and adventures',
      image: droneSample,
      count: 34,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio | B2 Studio Photography - Wedding, Fashion & Event Photography</title>
        <meta name="description" content="Explore B2 Studio's stunning photography portfolio. Browse our galleries featuring weddings, portraits, events, commercial, product, fashion, and travel photography." />
        <meta name="keywords" content="photography portfolio, wedding photos, portrait photography, event photography, commercial photography, fashion photography" />
        <link rel="canonical" href="https://b2studio.com/portfolio" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 fade-in">
              Our Work
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary-foreground mb-6 fade-in-delay-1">
              Portfolio <span className="text-primary">&</span> Galleries
            </h1>
            <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto fade-in-delay-2">
              Discover our diverse collection of photography spanning weddings, portraits, 
              commercial projects, and artistic endeavors. Each image tells a unique story.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/portfolio/${category.id}`}
                  className={`group relative overflow-hidden rounded-2xl aspect-[4/5] fade-in-delay-${(index % 3) + 1}`}
                >
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={`${category.title} Photography`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                        {category.count} Photos
                      </span>
                      <h3 className="font-playfair text-3xl font-bold text-secondary-foreground mb-3">
                        {category.title}
                      </h3>
                      <p className="text-secondary-foreground/70 mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                        View Gallery
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '300+', label: 'Projects Completed' },
                { value: '50K+', label: 'Photos Delivered' },
                { value: '7', label: 'Specialty Categories' },
                { value: '15+', label: 'Awards Won' },
              ].map((stat, index) => (
                <div key={index} className="fade-in">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Your <span className="text-primary">Story</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your vision and bring it to life through our lens.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-glow transition-all duration-300 shadow-gold"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
