import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Travel = () => {
  const images = [
    { id: 1, src: droneSample, title: 'Aerial Coastline', description: 'Breathtaking beach views from above', size: 'large' as const },
    { id: 2, src: weddingSample, title: 'Mountain Summit', description: 'Peak adventure photography' },
    { id: 3, src: fashionSample, title: 'Street Markets', description: 'Cultural immersion captured' },
    { id: 4, src: droneSample, title: 'Desert Landscapes', description: 'Golden sand dune expanses' },
    { id: 5, src: weddingSample, title: 'Historic Architecture', description: 'Ancient wonders documented', size: 'medium' as const },
    { id: 6, src: fashionSample, title: 'Local Cuisine', description: 'Culinary travel stories' },
    { id: 7, src: droneSample, title: 'Island Paradise', description: 'Tropical destination beauty' },
    { id: 8, src: weddingSample, title: 'City Skylines', description: 'Urban exploration photography' },
    { id: 9, src: fashionSample, title: 'Cultural Festivals', description: 'Celebration and tradition', size: 'large' as const },
    { id: 10, src: droneSample, title: 'Wildlife Safari', description: 'Nature and animals' },
    { id: 11, src: weddingSample, title: 'Northern Lights', description: 'Aurora borealis magic' },
    { id: 12, src: fashionSample, title: 'Underwater', description: 'Diving adventures captured' },
  ];

  const relatedCategories = [
    { id: 'events', title: 'Events' },
    { id: 'commercial', title: 'Commercial' },
    { id: 'portraits', title: 'Portraits' },
    { id: 'weddings', title: 'Weddings' },
  ];

  return (
    <GalleryLayout
      title="Travel"
      subtitle="Wanderlust Chronicles"
      description="Journey through our travel photography collection featuring stunning destinations, cultural experiences, and adventure moments from around the world."
      metaDescription="Travel photography by B2 Studio. Stunning destination photography, landscape images, and cultural documentation from global adventures."
      keywords="travel photography, destination photography, landscape photography, adventure photography, cultural photography"
      heroImage={droneSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Travel;
