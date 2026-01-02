import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Commercial = () => {
  const images = [
    { id: 1, src: fashionSample, title: 'Brand Campaign', description: 'Visual storytelling for brands', size: 'large' as const },
    { id: 2, src: droneSample, title: 'Real Estate', description: 'Luxury property showcase' },
    { id: 3, src: weddingSample, title: 'Restaurant Interior', description: 'Hospitality photography' },
    { id: 4, src: fashionSample, title: 'Corporate Portraits', description: 'Executive team imagery' },
    { id: 5, src: droneSample, title: 'Architecture', description: 'Structural beauty captured', size: 'medium' as const },
    { id: 6, src: weddingSample, title: 'Hotel Photography', description: 'Luxury accommodation shots' },
    { id: 7, src: fashionSample, title: 'Advertisement', description: 'Campaign creative execution' },
    { id: 8, src: droneSample, title: 'Industrial', description: 'Manufacturing excellence' },
    { id: 9, src: weddingSample, title: 'Food & Beverage', description: 'Culinary artistry', size: 'large' as const },
    { id: 10, src: fashionSample, title: 'Retail Space', description: 'Store environment photography' },
    { id: 11, src: droneSample, title: 'Corporate Office', description: 'Workspace documentation' },
    { id: 12, src: weddingSample, title: 'Healthcare', description: 'Medical facility imagery' },
  ];

  const relatedCategories = [
    { id: 'product', title: 'Product' },
    { id: 'events', title: 'Events' },
    { id: 'portraits', title: 'Portraits' },
    { id: 'fashion', title: 'Fashion' },
  ];

  return (
    <GalleryLayout
      title="Commercial"
      subtitle="Business Imagery"
      description="We create compelling commercial imagery that elevates brands and drives business results. From real estate to advertising campaigns."
      metaDescription="Commercial photography by B2 Studio. Professional imagery for brands, real estate, architecture, and corporate communications."
      keywords="commercial photography, brand photography, real estate photography, architectural photography, corporate photography"
      heroImage={fashionSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Commercial;
