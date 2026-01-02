import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Events = () => {
  const images = [
    { id: 1, src: droneSample, title: 'Conference Keynote', description: 'Capturing thought leadership moments', size: 'large' as const },
    { id: 2, src: weddingSample, title: 'Gala Evening', description: 'Black tie elegance documented' },
    { id: 3, src: fashionSample, title: 'Award Ceremony', description: 'Recognition and celebration' },
    { id: 4, src: droneSample, title: 'Product Launch', description: 'Brand reveal moments' },
    { id: 5, src: weddingSample, title: 'Networking Event', description: 'Connections being made', size: 'medium' as const },
    { id: 6, src: fashionSample, title: 'Team Building', description: 'Corporate culture in action' },
    { id: 7, src: droneSample, title: 'Trade Show', description: 'Exhibition booth highlights' },
    { id: 8, src: weddingSample, title: 'Charity Gala', description: 'Philanthropy and purpose' },
    { id: 9, src: fashionSample, title: 'Concert', description: 'Live performance energy', size: 'large' as const },
    { id: 10, src: droneSample, title: 'Festival', description: 'Vibrant crowd atmosphere' },
    { id: 11, src: weddingSample, title: 'Birthday Celebration', description: 'Milestone moments' },
    { id: 12, src: fashionSample, title: 'Anniversary Party', description: 'Years of love celebrated' },
  ];

  const relatedCategories = [
    { id: 'commercial', title: 'Commercial' },
    { id: 'weddings', title: 'Weddings' },
    { id: 'portraits', title: 'Portraits' },
    { id: 'product', title: 'Product' },
  ];

  return (
    <GalleryLayout
      title="Events"
      subtitle="Moments That Matter"
      description="From corporate conferences to intimate celebrations, we document events with precision and artistry, ensuring every key moment is preserved."
      metaDescription="Event photography services by B2 Studio. Professional coverage of corporate events, galas, conferences, and celebrations."
      keywords="event photography, corporate events, conference photography, gala photography, party photography"
      heroImage={droneSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Events;
