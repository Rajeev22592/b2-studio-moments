import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Download, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

interface GalleryLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  images: GalleryImage[];
  relatedCategories: { id: string; title: string }[];
}

const GalleryLayout = ({
  title,
  subtitle,
  description,
  metaDescription,
  keywords,
  heroImage,
  images,
  relatedCategories,
}: GalleryLayoutProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} Photography | B2 Studio Portfolio</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://b2studio.com/portfolio/${title.toLowerCase()}`} />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={`${title} Photography`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
              <span className="text-primary text-sm font-medium tracking-wider uppercase block mb-2">
                {subtitle}
              </span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
                {title} <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">{images.length}</span> photos in this collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer fade-in-delay-${(index % 3) + 1} ${
                    image.size === 'large' ? 'sm:col-span-2 sm:row-span-2' :
                    image.size === 'medium' ? 'sm:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-playfair text-xl font-semibold text-secondary-foreground mb-1">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-secondary-foreground/70 text-sm">{image.description}</p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        likedImages.has(image.id) 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary to-transparent">
                <h3 className="font-playfair text-2xl font-bold text-secondary-foreground mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-secondary-foreground/70">{selectedImage.description}</p>
                )}
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  size="icon" 
                  variant="secondary"
                  className="bg-secondary/80 backdrop-blur-sm"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="secondary"
                  className="bg-secondary/80 backdrop-blur-sm"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="bg-secondary/80 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Related Categories */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-8 text-center">
              Explore More <span className="text-primary">Categories</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/portfolio/${category.id}`}
                  className="px-6 py-3 bg-background border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryLayout;
