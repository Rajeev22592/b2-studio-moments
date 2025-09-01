import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Coming soon - Complete portfolio gallery with categories and filters.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;