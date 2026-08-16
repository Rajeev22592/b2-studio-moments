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

      <main className="pt-24">
        {/* Page Hero */}
        <section className="relative h-[65vh] min-h-[450px] overflow-hidden bg-black">
          <img
            src={heroImage}
            alt={`${title} Photography`}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 font-poppins text-[11px] tracking-[0.08em] uppercase font-bold"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Archive
              </Link>
              <span className="text-metadata mb-2">
                {subtitle}
              </span>
              <h1 className="text-display-giant text-white mb-6">
                {title}
              </h1>
              <p className="text-white/85 text-[15px] sm:text-base lg:text-[17px] max-w-2xl font-poppins leading-relaxed font-normal">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
             <div className="flex justify-between items-center mb-12">
               <p className="font-poppins text-xs sm:text-sm tracking-wide text-white/60 uppercase font-medium">
                 Collection Archive &nbsp;·&nbsp; <span className="text-accent font-semibold">{images.length}</span> visual works
               </p>
             </div>

            {/* Asymmetrical Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {images.map((image, index) => {
                // Dynamically assign variable visual weights
                let gridClasses = 'md:col-span-4'; // default
                let aspectClasses = 'aspect-[3/4]';
                
                if (index % 5 === 0) {
                  gridClasses = 'md:col-span-8';
                  aspectClasses = 'aspect-[16/10]';
                } else if (index % 5 === 3) {
                  gridClasses = 'md:col-span-12';
                  aspectClasses = 'aspect-[21/9]';
                }

                return (
                  <div
                    key={image.id}
                    className={`group relative overflow-hidden bg-[#121212] cursor-pointer ${gridClasses}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className={`${aspectClasses} overflow-hidden`}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-[1800ms] scale-102 group-hover:scale-100"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Dark gradient hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="font-playfair text-xl font-light text-white mb-1">
                        {image.title}
                      </h3>
                      {image.description && (
                        <p className="font-poppins text-[10px] text-white/50 uppercase tracking-widest">{image.description}</p>
                      )}
                    </div>

                    {/* Action button hover */}
                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(image.id);
                        }}
                        className={`p-2.5 rounded-none backdrop-blur-md transition-colors ${
                          likedImages.has(image.id) 
                            ? 'bg-accent text-black' 
                            : 'bg-black/55 text-white hover:bg-accent hover:text-black'
                        }`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fullscreen Art Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
              
              {/* Overlay Caption */}
              <div className="mt-6 text-center space-y-1 font-poppins">
                <h3 className="font-playfair text-2xl font-light text-white">
                  {selectedImage.title}
                </h3>
                 {selectedImage.description && (
                   <p className="text-white/75 text-xs sm:text-sm tracking-wide font-normal">{selectedImage.description}</p>
                 )}
              </div>

              {/* Close Button overlay */}
              <div className="absolute top-[-40px] right-0 flex gap-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="text-white/60 hover:text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Related Categories */}
        <section className="py-24 border-t border-white/5 bg-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <h2 className="font-playfair text-2xl font-light text-white mb-12 text-center">
              Explore More Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-10 font-poppins text-xs md:text-sm tracking-[0.06em] uppercase">
              {relatedCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/portfolio/${category.id}`}
                  className="text-white/70 hover:text-accent border-b border-transparent hover:border-accent pb-1 transition-all duration-300 font-semibold"
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
