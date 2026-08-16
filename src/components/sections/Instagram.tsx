import { Instagram as InstaIcon } from 'lucide-react';
import { studioConfig } from '@/lib/studio-data';

const btsImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600", size: "col-span-1 row-span-1" },
  { id: 2, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600", size: "col-span-1 row-span-2 aspect-[4/5] md:aspect-auto" },
  { id: 3, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600", size: "col-span-2 row-span-1 aspect-[16/9] md:aspect-auto" },
  { id: 4, src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600", size: "col-span-1 row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1453060113865-968ce1ad0e57?q=80&w=600", size: "col-span-1 row-span-1" }
];

const Instagram = () => {
  return (
    <section className="py-28 bg-background text-foreground overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-20">
          <div className="space-y-4">
            <span className="font-poppins text-[11px] sm:text-xs tracking-[0.1em] uppercase text-accent font-semibold block">
              social connection
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.05]">
              Behind the Lens
            </h2>
          </div>
          
          <div className="font-poppins space-y-1">
            <a
              href={studioConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors text-sm tracking-wider"
            >
              <InstaIcon className="h-4 w-4" />
              @b2studio.moments
            </a>
            <span className="block text-white/60 text-[11px] sm:text-xs tracking-[0.08em] uppercase font-medium">
              Follow our daily creative process
            </span>
          </div>
        </div>

        {/* Asymmetrical Board Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {btsImages.map((img) => (
            <a
              key={img.id}
              href={studioConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-white/5 ${img.size}`}
            >
              <img
                src={img.src}
                alt="Behind the scenes at B2 Studio"
                className="w-full h-full object-cover transition-transform duration-[1200ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
              {/* Instagram Icon Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstaIcon className="h-6 w-6 text-accent transform scale-90 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instagram;
