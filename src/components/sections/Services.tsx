import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    num: "01",
    title: "WEDDINGS",
    tagline: "Preserving raw emotion & grand traditions.",
    description: "We combine fine-art photojournalism with clean editorial styling to capture your love story. From grand heritage palaces in Jaipur to lakeside vows in Udaipur, we compose visual legacies that feel expensive and timeless.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200",
    path: "/portfolio/weddings"
  },
  {
    num: "02",
    title: "EVENTS",
    tagline: "Capturing the energy of elite gatherings.",
    description: "Discreet coverage for summits, high-profile corporate galas, and art launches. We focus on ambient lighting, architecture scales, and high-contrast candids of connections.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    path: "/portfolio/events"
  },
  {
    num: "03",
    title: "PORTRAITS",
    tagline: "Visual power for individuals and campaigns.",
    description: "Vogue-style studio portraiture and fashion editorials using dramatic lighting structures, raw skin retouches, and bespoke apparel direction to emphasize personality.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
    path: "/portfolio/portraits"
  },
  {
    num: "04",
    title: "COMMERCIAL",
    tagline: "Elevating brands through elite imagery.",
    description: "High-contrast product and advertising layouts focusing on textures, metallic micro-details, and luxury staging that commands immediate commercial attention.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
    path: "/portfolio/commercial"
  }
];

const Services = () => {
  return (
    <section className="py-32 light bg-background text-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header */}
        <div className="max-w-3xl mb-32 space-y-4">
          <span className="font-poppins text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.1em] uppercase text-accent font-medium block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-section-title text-[#171513]">
            Bespoke visual solutions, <br />
            <span className="italic text-accent font-normal">crafted with precision.</span>
          </h2>
        </div>

        {/* Asymmetric Editorial Sections */}
        <div className="space-y-44">
          
          {/* Service 01 - Weddings (Split 7/5 Layout) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 group overflow-hidden bg-black/5 aspect-[16/10]">
              <img
                src={servicesData[0].image}
                alt={servicesData[0].title}
                className="w-full h-full object-cover transition-transform duration-[1500ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 space-y-6 lg:pl-10">
              <span className="font-playfair text-5xl sm:text-6xl text-accent font-normal block">
                {servicesData[0].num}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl xl:text-4xl font-normal tracking-wide text-[#171513]">
                {servicesData[0].title}
              </h3>
              <p className="text-body-editorial text-[#171513]/85 max-w-xl">
                {servicesData[0].description}
              </p>
              <div className="pt-4">
                <Link
                  to={servicesData[0].path}
                  className="inline-flex items-center gap-2 font-poppins text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-black hover:text-accent transition-colors"
                >
                  EXPLORE {servicesData[0].title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 02 - Events (Vertical Layout with wide text) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2 group overflow-hidden bg-black/5 aspect-[4/5] max-w-md mx-auto lg:mr-0">
              <img
                src={servicesData[1].image}
                alt={servicesData[1].title}
                className="w-full h-full object-cover transition-transform duration-[1500ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 lg:order-1 space-y-6 lg:pr-16">
              <span className="font-playfair text-5xl sm:text-6xl text-accent font-normal block">
                {servicesData[1].num}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl xl:text-4xl font-normal tracking-wide text-[#171513]">
                {servicesData[1].title}
              </h3>
              <p className="text-body-editorial text-[#171513]/85 max-w-xl">
                {servicesData[1].description}
              </p>
              <div className="pt-4">
                <Link
                  to={servicesData[1].path}
                  className="inline-flex items-center gap-2 font-poppins text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-black hover:text-accent transition-colors"
                >
                  EXPLORE {servicesData[1].title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 03 - Portraits (Asymmetrical 6/6 block) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 group overflow-hidden bg-black/5 aspect-square">
              <img
                src={servicesData[2].image}
                alt={servicesData[2].title}
                className="w-full h-full object-cover transition-transform duration-[1500ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-6 space-y-6 lg:pl-16">
              <span className="font-playfair text-5xl sm:text-6xl text-accent font-normal block">
                {servicesData[2].num}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl xl:text-4xl font-normal tracking-wide text-[#171513]">
                {servicesData[2].title}
              </h3>
              <p className="text-body-editorial text-[#171513]/85 max-w-xl">
                {servicesData[2].description}
              </p>
              <div className="pt-4">
                <Link
                  to={servicesData[2].path}
                  className="inline-flex items-center gap-2 font-poppins text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-black hover:text-accent transition-colors"
                >
                  EXPLORE {servicesData[2].title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 04 - Commercial (Full Bleed Aspect Block) */}
          <div className="space-y-8">
            <div className="group overflow-hidden bg-black/5 w-full aspect-[21/9] max-h-[50vh]">
              <img
                src={servicesData[3].image}
                alt={servicesData[3].title}
                className="w-full h-full object-cover transition-transform duration-[1800ms] scale-102 group-hover:scale-100"
                loading="lazy"
              />
            </div>
            <div className="grid lg:grid-cols-12 gap-6 pt-4">
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-playfair text-5xl sm:text-6xl text-accent font-normal">
                  {servicesData[3].num}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-normal tracking-wide text-[#171513]">
                  {servicesData[3].title}
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-body-editorial text-[#171513]/85 max-w-2xl">
                  {servicesData[3].description}
                </p>
                <Link
                  to={servicesData[3].path}
                  className="inline-flex items-center gap-2 font-poppins text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-black hover:text-accent transition-colors"
                >
                  EXPLORE {servicesData[3].title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;