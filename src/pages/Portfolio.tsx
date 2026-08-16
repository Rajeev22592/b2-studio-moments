import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { portfolioCategories, portfolioProjects, studioConfig } from '@/lib/studio-data';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Photography Portfolios & Selected Archives | {studioConfig.name}</title>
        <meta name="description" content="Explore B2 Studio's professional photography archives. Browse curated galleries for Weddings, Films, Portraits, Events and Commercial campaigns." />
        <link rel="canonical" href="https://b2studio.in/portfolio" />
      </Helmet>

      <Navigation />

      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-28 border-b border-white/5 bg-gradient-to-b from-background to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-6">
            <span className="text-metadata text-center">
              CURATED GALLERIES
            </span>
            <h1 className="text-editorial-title max-w-4xl mx-auto text-[#FAF8F5]">
              Portfolio & <br />
              <span className="italic text-accent font-normal">Selected Archives</span>
            </h1>
            <div className="w-12 h-px bg-accent/30 mx-auto my-6" />
            <p className="text-body-editorial text-white/85 max-w-2xl mx-auto">
              Explore our artistic captures organized by category. Each folder represents
              a dedicated creative approach, balancing luxury detailing and raw emotion.
            </p>
          </div>
        </section>

        {/* Categories Gateway Cards */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCategories.map((cat, index) => {
                // Find matching project to extract its thumbnail as the cover
                const matchedProject = portfolioProjects.find(p => p.category === cat.slug);
                const coverImage = matchedProject ? matchedProject.thumbnail : "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800";

                // Count total pictures in this category
                const catProjects = portfolioProjects.filter(p => p.category === cat.slug);
                const totalPhotos = catProjects.reduce((acc, curr) => acc + curr.images.length, 0);

                return (
                  <Link
                    key={cat.slug}
                    to={`/portfolio/${cat.slug}`}
                    className="group relative flex flex-col justify-end aspect-[3/4] bg-muted overflow-hidden select-none border border-white/5"
                  >
                    {/* Background Image */}
                    <img
                      src={coverImage}
                      alt={`${cat.name} Portfolio`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] scale-102 group-hover:scale-100"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative p-8 space-y-3 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-poppins text-[10px] uppercase tracking-[0.08em] text-accent font-medium block">
                        {totalPhotos} archives &nbsp;·&nbsp; category 0{index + 1}
                      </span>
                      <h3 className="font-playfair text-2xl sm:text-3xl font-normal tracking-wide text-white">
                        {cat.name}
                      </h3>
                      <p className="font-poppins text-xs sm:text-[13px] text-white/85 leading-relaxed line-clamp-2 font-normal">
                        {cat.description}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-accent font-poppins text-xs tracking-[0.06em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View Gallery
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Fine Corner Borders */}
                    <div className="absolute inset-6 border border-accent/0 group-hover:border-accent/25 transition-all duration-700" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Commission CTA */}
        <section className="py-24 border-t border-white/5 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-section-title text-[#FAF8F5]">
              Interested in a custom booking?
            </h2>
            <p className="text-body-editorial text-white/75 max-w-xl mx-auto">
              We design specific visual layouts depending on dates, locations, and brand scopes.
              Get in touch with our Creative Director to plan your custom collection.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="bg-[#F3EFE7] text-[#171513] hover:bg-accent hover:text-[#171513] font-poppins text-[13px] md:text-[14px] tracking-[0.05em] uppercase px-8 py-5 rounded-none transition-all duration-300 font-semibold">
                  Connect With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Portfolio;
