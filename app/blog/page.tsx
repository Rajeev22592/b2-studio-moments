import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Tag, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Case Studies',
  description: 'Explore photography tips, wedding inspiration, and success stories from B2 Studio. Read our case studies showcasing exceptional wedding, fashion, and corporate photography work.',
  keywords: ['wedding photography blog', 'photography tips', 'case studies', 'wedding inspiration', 'fashion photography', 'corporate events', 'B2 Studio'],
  openGraph: {
    title: 'Blog & Case Studies | B2 Studio Photography',
    description: 'Explore photography tips, wedding inspiration, and success stories from B2 Studio.',
  },
};

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Perfect Wedding Photography",
    excerpt: "Discover the secrets behind capturing timeless wedding moments. From lighting techniques to emotional storytelling, learn how professional photographers create memories that last forever.",
    category: "Wedding Tips",
    date: "December 1, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Pre-Wedding Shoots: Location Guide",
    excerpt: "Explore the most romantic and photogenic locations for your pre-wedding shoot. From serene beaches to historic monuments, find the perfect backdrop for your love story.",
    category: "Pre-Wedding",
    date: "November 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Drone Photography: Elevating Your Event Coverage",
    excerpt: "Aerial photography has revolutionized event documentation. Learn how drone technology captures breathtaking perspectives that traditional photography simply cannot achieve.",
    category: "Technology",
    date: "November 25, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Fashion Photography Trends for 2025",
    excerpt: "Stay ahead of the curve with the latest fashion photography trends. From bold lighting to minimalist aesthetics, discover what's shaping the industry this year.",
    category: "Fashion",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=500&fit=crop",
    featured: false,
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Raj & Priya's Royal Wedding at Udaipur Palace",
    client: "Raj & Priya Sharma",
    category: "Destination Wedding",
    challenge: "Capture the grandeur of a three-day royal wedding celebration across multiple venues while maintaining intimacy in candid moments.",
    solution: "Deployed a team of 5 photographers with strategic positioning. Used a mix of telephoto lenses for ceremonies and wide-angle for venue shots. Implemented real-time photo sharing for the couple.",
    results: "Delivered 2,500+ curated images. The wedding album was featured in Wedding Sutra magazine. Client referrals increased by 40%.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=500&fit=crop",
    testimonial: "B2 Studio captured not just our wedding, but our emotions. Every photo tells our story.",
  },
  {
    id: 2,
    title: "Luxe Fashion Brand Campaign - Spring Collection",
    client: "Luxe Couture",
    category: "Fashion Photography",
    challenge: "Create a cohesive visual narrative for a 50-piece spring collection that would work across print, digital, and social media platforms.",
    solution: "Designed custom lighting setups for each clothing category. Shot in a controlled studio environment with complementary outdoor location shoots. Delivered assets in multiple formats and aspect ratios.",
    results: "Campaign achieved 2M+ impressions on social media. Brand reported 35% increase in spring collection sales. Won 'Best Fashion Campaign' at Regional Ad Awards.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    testimonial: "The team understood our brand DNA perfectly. The images elevated our entire collection.",
  },
  {
    id: 3,
    title: "Corporate Event Coverage - Tech Summit 2024",
    client: "TechVision India",
    category: "Corporate Events",
    challenge: "Document a 2-day tech summit with 50+ speakers, networking sessions, and product launches while maintaining consistent quality across 16 hours of coverage daily.",
    solution: "Implemented a three-photographer rotation system. Set up dedicated zones for speaker portraits, candid networking shots, and product photography. Used tethered shooting for instant review.",
    results: "Delivered 1,200 edited photos within 48 hours. Images used across company's annual report, website, and press releases. Secured 3-year contract for future events.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    testimonial: "Professional, efficient, and the quality exceeded our expectations. B2 Studio is now our go-to for all corporate events.",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-surface to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full">
              Insights & Stories
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover photography tips, behind-the-scenes insights, and real success stories 
              that showcase our passion for capturing extraordinary moments.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-8">Featured Article</h2>
              <article className="group relative overflow-hidden rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="w-fit group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center text-primary font-medium text-sm group/link">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary border border-primary/30 rounded-full">
                Success Stories
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Case Studies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore how we've helped our clients achieve exceptional results through 
                strategic photography and creative storytelling.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <article 
                  key={study.id}
                  className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <p className="text-sm text-primary font-medium mb-2">{study.client}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">The Challenge</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Our Solution</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">The Results</h4>
                          <p className="text-sm text-muted-foreground">{study.results}</p>
                        </div>
                      </div>

                      <blockquote className="relative pl-4 border-l-2 border-primary italic text-muted-foreground mb-6">
                        "{study.testimonial}"
                        <cite className="block mt-2 text-sm font-medium text-foreground not-italic">
                          — {study.client}
                        </cite>
                      </blockquote>

                      <Button variant="outline" className="group/btn">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-surface to-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest photography tips, behind-the-scenes content, 
              and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

