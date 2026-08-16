import { MapPin } from 'lucide-react';
import { destinationLocations } from '@/lib/studio-data';

const Destinations = () => {
  return (
    <section className="py-28 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
            global stories
          </span>
          <h2 className="text-section-title text-[#FAF8F5]">
            Capturing celebrations in <br />
            <span className="italic text-accent font-normal">breathtaking locations.</span>
          </h2>
        </div>

        {/* Postcard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinationLocations.map((loc) => (
            <div
              key={loc.id}
              className="group relative flex flex-col justify-end aspect-[3/4] bg-muted overflow-hidden select-none"
            >
              {/* Postcard Image */}
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />

              {/* Dark Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Postcard Content */}
              <div className="relative p-6 space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 items-center text-accent">
                  <MapPin className="h-3.5 w-3.5" />
                  <h3 className="font-playfair text-xl font-normal tracking-wide text-[#FAF8F5]">
                    {loc.name}
                  </h3>
                </div>

                <p className="font-poppins text-[13px] sm:text-sm text-white/80 leading-relaxed font-normal">
                  {loc.description}
                </p>

                {/* Expanded Details on Hover */}
                <div className="space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="font-poppins text-[10px] uppercase tracking-[0.08em] text-accent block font-medium">
                    Featured Venues
                  </span>
                  <ul className="space-y-1 text-xs font-poppins text-white/70 font-medium">
                    {loc.featuredSpots.map((spot, i) => (
                      <li key={i}>· {spot}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Corner Line */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-accent/0 group-hover:border-accent/40 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
