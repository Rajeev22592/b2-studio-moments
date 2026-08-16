import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioProjects, portfolioCategories } from '@/lib/studio-data';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'weddings' | 'events' | 'portraits' | 'commercial' | 'films'>('all');
  const [lightboxProject, setLightboxProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  // Select project details for lightbox
  const currentProject = portfolioProjects.find(p => p.id === lightboxProject);

  const openLightbox = (projectId: string) => {
    setLightboxProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  return (
    <section className="py-32 light bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-28">
          <div className="space-y-4">
            <span className="text-metadata">
              SELECTED ARCHIVES
            </span>
            <h2 className="text-section-title text-[#101010] leading-none">
              Moments captured in <br />
              <span className="italic text-accent font-light">timeless frames.</span>
            </h2>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-poppins text-xs sm:text-[13px] tracking-[0.06em] uppercase text-black">
            <button
              onClick={() => setActiveCategory('all')}
              className={`pb-1 border-b transition-all duration-500 ${
                activeCategory === 'all' ? 'border-[#171513] text-[#171513] font-semibold' : 'border-transparent text-black/60 hover:text-black'
              }`}
            >
              All Work
            </button>
            {portfolioCategories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`pb-1 border-b transition-all duration-500 ${
                  activeCategory === cat.slug ? 'border-[#171513] text-[#171513] font-semibold' : 'border-transparent text-black/60 hover:text-[#171513]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical grid logic: 8-cols, 4-cols, 12-cols
            const gridClasses = 
              idx % 3 === 0 ? 'md:col-span-8' :
              idx % 3 === 1 ? 'md:col-span-4' : 'md:col-span-12';
              
            const aspectClasses = 
              idx % 3 === 0 ? 'aspect-[16/10]' :
              idx % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[21/9]';

            return (
              <div
                key={project.id}
                onClick={() => openLightbox(project.id)}
                className={`group cursor-pointer space-y-4 ${gridClasses}`}
              >
                <div className={`relative overflow-hidden bg-black/5 ${aspectClasses}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1800ms] scale-102 group-hover:scale-100"
                    loading="lazy"
                  />
                  
                  {/* Luxury Lightbox Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="px-6 py-3 border border-white/30 text-white font-poppins text-[9px] tracking-[0.25em] uppercase scale-90 group-hover:scale-100 transition-transform duration-500 bg-black/40 backdrop-blur-xs">
                      VIEW ARCHIVE
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <h3 className="font-playfair text-xl font-normal tracking-wide group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-poppins text-[10px] tracking-[0.1em] text-[#171513]/60 uppercase mt-1 font-medium">
                      {project.location} &nbsp;·&nbsp; {project.year}
                    </p>
                  </div>
                  <span className="font-poppins text-[11px] tracking-[0.08em] uppercase text-accent font-semibold">
                    {project.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Archive CTA */}
        <div className="text-center pt-8">
          <Link to="/portfolio">
            <Button
              variant="outline"
              className="border-black/20 hover:border-accent text-black hover:text-black bg-transparent px-8 py-6 rounded-none font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase transition-all duration-500 font-semibold"
            >
              Browse Full Archive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentProject && lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Main Wrapper */}
          <div
            className="relative w-full max-w-6xl aspect-[16/10] bg-transparent flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center text-white font-poppins">
              <div>
                <h4 className="font-playfair text-xl font-normal tracking-wide">
                  {currentProject.title}
                </h4>
                <p className="text-[11px] sm:text-xs tracking-[0.08em] text-white/70 uppercase font-medium">
                  {currentProject.location} &nbsp;·&nbsp; {currentImageIndex + 1} of {currentProject.images.length}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="flex-1 flex items-center justify-center relative overflow-hidden group">
              <img
                src={currentProject.images[currentImageIndex].src}
                alt={currentProject.images[currentImageIndex].title}
                className="max-w-full max-h-[75vh] object-contain select-none"
              />

              {/* Navigation Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 hover:border-accent rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300"
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 hover:border-accent rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300"
                aria-label="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Footer Captions */}
            <div className="absolute bottom-4 left-4 right-4 z-20 text-center text-white/70 font-poppins text-xs tracking-wider bg-black/60 py-2.5 px-4 backdrop-blur-xs rounded-xs">
              <span className="font-semibold text-white">
                {currentProject.images[currentImageIndex].title}
              </span>
              {currentProject.images[currentImageIndex].description && (
                <> — {currentProject.images[currentImageIndex].description}</>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;