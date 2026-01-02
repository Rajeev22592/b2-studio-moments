import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Fashion = () => {
  const images = [
    { id: 1, src: fashionSample, title: 'Editorial Spread', description: 'High fashion magazine feature', size: 'large' as const },
    { id: 2, src: weddingSample, title: 'Runway Show', description: 'Fashion week coverage' },
    { id: 3, src: droneSample, title: 'Lookbook', description: 'Seasonal collection showcase' },
    { id: 4, src: fashionSample, title: 'Street Style', description: 'Urban fashion photography' },
    { id: 5, src: weddingSample, title: 'Beauty Editorial', description: 'Makeup and styling focus', size: 'medium' as const },
    { id: 6, src: droneSample, title: 'Accessories', description: 'Detail shots and styling' },
    { id: 7, src: fashionSample, title: 'Campaign Shoot', description: 'Brand advertising imagery' },
    { id: 8, src: weddingSample, title: 'Haute Couture', description: 'Luxury designer pieces' },
    { id: 9, src: droneSample, title: 'Athletic Wear', description: 'Sports fashion photography', size: 'large' as const },
    { id: 10, src: fashionSample, title: 'Jewelry Editorial', description: 'Fine jewelry showcase' },
    { id: 11, src: weddingSample, title: 'Menswear', description: 'Contemporary men\'s fashion' },
    { id: 12, src: droneSample, title: 'Swimwear', description: 'Beach and resort fashion' },
  ];

  const relatedCategories = [
    { id: 'portraits', title: 'Portraits' },
    { id: 'product', title: 'Product' },
    { id: 'commercial', title: 'Commercial' },
    { id: 'weddings', title: 'Weddings' },
  ];

  return (
    <GalleryLayout
      title="Fashion"
      subtitle="Style & Elegance"
      description="From runway to editorial, we capture fashion with artistic vision and technical excellence. Creating imagery that defines trends and inspires."
      metaDescription="Fashion photography portfolio by B2 Studio. Editorial, runway, lookbook, and campaign photography for designers and brands."
      keywords="fashion photography, editorial photography, runway photography, lookbook photography, fashion campaign"
      heroImage={fashionSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Fashion;
