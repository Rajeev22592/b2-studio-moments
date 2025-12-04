import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Portraits = () => {
  const images = [
    { id: 1, src: fashionSample, title: 'Studio Portrait', description: 'Professional lighting techniques', size: 'large' as const },
    { id: 2, src: weddingSample, title: 'Natural Light', description: 'Soft window light session' },
    { id: 3, src: droneSample, title: 'Environmental Portrait', description: 'Context and character combined' },
    { id: 4, src: fashionSample, title: 'Headshot', description: 'Professional corporate headshot' },
    { id: 5, src: weddingSample, title: 'Family Portrait', description: 'Generations captured together', size: 'medium' as const },
    { id: 6, src: droneSample, title: 'Lifestyle', description: 'Authentic candid moments' },
    { id: 7, src: fashionSample, title: 'Creative Portrait', description: 'Artistic expression and mood' },
    { id: 8, src: weddingSample, title: 'Couple Session', description: 'Connection and intimacy' },
    { id: 9, src: droneSample, title: 'Senior Portrait', description: 'Milestone celebration', size: 'large' as const },
    { id: 10, src: fashionSample, title: 'Child Portrait', description: 'Innocence and wonder captured' },
    { id: 11, src: weddingSample, title: 'Maternity', description: 'Beautiful expecting moments' },
    { id: 12, src: droneSample, title: 'Pet Portrait', description: 'Furry family members' },
  ];

  const relatedCategories = [
    { id: 'weddings', title: 'Weddings' },
    { id: 'fashion', title: 'Fashion' },
    { id: 'commercial', title: 'Commercial' },
    { id: 'events', title: 'Events' },
  ];

  return (
    <GalleryLayout
      title="Portraits"
      subtitle="Stories in Faces"
      description="Portrait photography is about capturing the essence of a person. We focus on authentic expressions and emotions that tell your unique story."
      metaDescription="Professional portrait photography by B2 Studio. From corporate headshots to creative artistic portraits, we capture personality and character."
      keywords="portrait photography, professional portraits, headshots, family portraits, creative portraits"
      heroImage={fashionSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Portraits;
