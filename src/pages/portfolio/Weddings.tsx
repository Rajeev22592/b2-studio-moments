import GalleryLayout from '@/components/portfolio/GalleryLayout';
import { portfolioProjects } from '@/lib/studio-data';

const Weddings = () => {
  // Pull all wedding category projects and flatten their images
  const weddingProjects = portfolioProjects.filter(p => p.category === 'weddings');
  const images = weddingProjects.flatMap(p => p.images);

  const relatedCategories = [
    { id: 'portraits', title: 'Portraits' },
    { id: 'events', title: 'Events' },
    { id: 'commercial', title: 'Commercial' },
  ];

  const firstThumbnail = weddingProjects[0]?.thumbnail || "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200";

  return (
    <GalleryLayout
      title="Weddings"
      subtitle="Heritage & Romance Stories"
      description="Every wedding is unique, and we strive to capture the essence of your special day with timeless elegance, royal settings, and authentic candids."
      metaDescription="Explore B2 Studio's luxury wedding photography portfolio. Captures of royal ceremonies, twilight vows, and heritage portraits."
      keywords="wedding photography, palace weddings, luxury wedding photographer, destination wedding india"
      heroImage={firstThumbnail}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Weddings;
