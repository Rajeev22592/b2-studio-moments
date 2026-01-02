import GalleryLayout from '@/components/portfolio/GalleryLayout';
import weddingSample from '@/assets/wedding-sample.jpg';
import fashionSample from '@/assets/fashion-sample.jpg';
import droneSample from '@/assets/drone-sample.jpg';

const Product = () => {
  const images = [
    { id: 1, src: fashionSample, title: 'Luxury Watch', description: 'Precision timepiece photography', size: 'large' as const },
    { id: 2, src: weddingSample, title: 'Jewelry', description: 'Sparkling gemstone details' },
    { id: 3, src: droneSample, title: 'Electronics', description: 'Tech product showcase' },
    { id: 4, src: fashionSample, title: 'Cosmetics', description: 'Beauty product styling' },
    { id: 5, src: weddingSample, title: 'Perfume', description: 'Fragrance bottle artistry', size: 'medium' as const },
    { id: 6, src: droneSample, title: 'Furniture', description: 'Home decor photography' },
    { id: 7, src: fashionSample, title: 'Fashion Accessories', description: 'Bags and accessories' },
    { id: 8, src: weddingSample, title: 'Food Products', description: 'Packaged goods styling' },
    { id: 9, src: droneSample, title: 'Automotive Parts', description: 'Industrial product shots', size: 'large' as const },
    { id: 10, src: fashionSample, title: 'Skincare', description: 'Clean beauty aesthetics' },
    { id: 11, src: weddingSample, title: 'Kitchenware', description: 'Culinary tools showcase' },
    { id: 12, src: droneSample, title: 'Sports Equipment', description: 'Athletic gear photography' },
  ];

  const relatedCategories = [
    { id: 'commercial', title: 'Commercial' },
    { id: 'fashion', title: 'Fashion' },
    { id: 'events', title: 'Events' },
    { id: 'portraits', title: 'Portraits' },
  ];

  return (
    <GalleryLayout
      title="Product"
      subtitle="E-commerce Excellence"
      description="High-quality product photography that showcases your items in the best light. Perfect for e-commerce, catalogs, and marketing materials."
      metaDescription="Product photography services by B2 Studio. Professional e-commerce, catalog, and marketing product images that drive sales."
      keywords="product photography, e-commerce photography, catalog photography, packshot photography, still life photography"
      heroImage={fashionSample}
      images={images}
      relatedCategories={relatedCategories}
    />
  );
};

export default Product;
