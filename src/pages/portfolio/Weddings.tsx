import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Weddings = () => {
  const images = [
    { id: 1, src: weddingSample, title: 'First Dance Magic', description: 'Captured under golden chandeliers', size: 'large' as const },
    { id: 2, src: fashionSample, title: 'Bridal Portrait', description: 'Elegant bridal preparation moments' },
    { id: 3, src: droneSample, title: 'Ceremony Overhead', description: 'Aerial view of the garden ceremony' },
    { id: 4, src: weddingSample, title: 'Ring Exchange', description: 'The moment of eternal promise' },
    { id: 5, src: fashionSample, title: 'Bridal Party', description: 'Joy and laughter with loved ones', size: 'medium' as const },
    { id: 6, src: droneSample, title: 'Venue Grandeur', description: 'The stunning venue from above' },
    { id: 7, src: weddingSample, title: 'Sunset Vows', description: 'Golden hour ceremony moments' },
    { id: 8, src: fashionSample, title: 'Groom Details', description: 'Sophisticated groom preparation' },
    { id: 9, src: droneSample, title: 'Reception Hall', description: 'Decorated reception space', size: 'large' as const },
    { id: 10, src: weddingSample, title: 'Cake Cutting', description: 'Sweet celebration moment' },
    { id: 11, src: fashionSample, title: 'Flower Arrangements', description: 'Exquisite floral details' },
    { id: 12, src: droneSample, title: 'Send Off', description: 'Sparkler farewell celebration' },
  ];

  const relatedCategories = [
    { id: 'portraits', title: 'Portraits' },
    { id: 'events', title: 'Events' },
    { id: 'fashion', title: 'Fashion' },
    { id: 'travel', title: 'Travel' },
  ];

  return (
    <GalleryLayout
      title="Weddings"
      subtitle="Love Stories Captured"
      description="Every wedding is unique, and we strive to capture the essence of your special day with timeless elegance and authentic emotion."
      metaDescription="Explore B2 Studio's wedding photography portfolio. Stunning captures of ceremonies, receptions, and romantic moments that last forever."
      keywords="wedding photography, wedding photographer, bridal photos, ceremony photography, reception photography"
      heroImage={weddingSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Weddings;
