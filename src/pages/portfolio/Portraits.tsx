import GalleryLayout from '@/components/portfolio/GalleryLayout';
import { portfolioProjects } from '@/lib/studio-data';

const Portraits = () => {
  const portraitProjects = portfolioProjects.filter(p => p.category === 'portraits');
  const images = portraitProjects.flatMap(p => p.images);

  const relatedCategories = [
    { id: 'weddings', title: 'Weddings' },
    { id: 'events', title: 'Events' },
    { id: 'commercial', title: 'Commercial' },
  ];

  const firstThumbnail = portraitProjects[0]?.thumbnail || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200";

  return (
    <GalleryLayout
      title="Portraits"
      subtitle="Character & Fine-Art Profiles"
      description="Expressive studio portraits, editorial layouts, and personal branding sessions focusing on confidence, form, and dramatic lighting."
      metaDescription="Explore B2 Studio's portrait portfolio. Editorial fashion spreads and high-end studio portraits with professional styling."
      keywords="portrait photography, studio portraits, personal branding headshots, fashion editorial"
      heroImage={firstThumbnail}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Portraits;
