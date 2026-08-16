// Centralized Content Data Layer for B2 Studio
// Ready to be connected to a CMS or API (Supabase, Laravel, Headless CMS, etc.)

export interface ProjectImage {
  id: number;
  src: string;
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientNames?: string;
  category: 'weddings' | 'events' | 'portraits' | 'commercial' | 'films';
  location: string;
  year: string;
  thumbnail: string;
  description: string;
  shortDescription: string;
  subtext?: string;
  role: string;
  featured: boolean;
  images: ProjectImage[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  clientName: string;
  eventType: string;
  location: string;
  avatar: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface DestinationLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  featuredSpots: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Global Configuration
export const studioConfig = {
  name: "B2 STUDIO",
  phone: "+91 97998 87002",
  whatsappNumber: "919799887002",
  whatsappDefaultMsg: "Hi B2 Studio! I would like to inquire about your premium photography services.",
  emails: {
    general: "hello@b2studio.in",
    bookings: "bookings@b2studio.in"
  },
  addresses: {
    mumbai: "The Artistry Block, Nariman Point, Mumbai, MH 400021",
    jaipur: "Palace Walkway, C-Scheme, Jaipur, RJ 302001"
  },
  workingHours: "Mon - Sat: 10:00 AM - 7:00 PM | Sun: By Appointment",
  socials: {
    instagram: "https://instagram.com/b2studio.moments",
    youtube: "https://youtube.com/b2studio.moments",
    facebook: "https://facebook.com/b2studio.moments"
  }
};

// Portfolio Categories
export const portfolioCategories = [
  { slug: 'weddings', name: 'Weddings', description: 'Romantic wedding stories, royal heritage celebrations, and emotional candids.' },
  { slug: 'events', name: 'Events', description: 'High-profile corporate summits, art launches, and private galas.' },
  { slug: 'portraits', name: 'Portraits', description: 'Editorial fashion campaigns, personal branding, and artistic studio profiles.' },
  { slug: 'commercial', name: 'Commercial', description: 'High-end product typography, brand campaigns, and advertising layouts.' },
  { slug: 'films', name: 'Films', description: 'Cinematic wedding trailers, storytelling highlight films, and commercial video production.' }
] as const;

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us Your Story",
    description: "Connect with us to share your date, preferred location, and artistic vision. We align on mood boards and visual styles."
  },
  {
    number: "02",
    title: "The Collaboration & Plan",
    description: "We orchestrate the timeline, coordinate lighting elements, scout spots, and outline editorial shot sequences for details and portraits."
  },
  {
    number: "03",
    title: "The Shooting Day",
    description: "We direct and capture authentic, emotional, and high-contrast moments organically, ensuring a relaxed and elite environment."
  },
  {
    number: "04",
    title: "The Editorial Edit",
    description: "Our post-production artists meticulously sort, color-grade, and retouch every frame. We curate and deliver a masterpiece collection."
  }
];

// Curated Unsplash Images for visual consistency
const images = {
  wedding1: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200", // Couple portrait
  wedding2: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200", // Indian bride details
  wedding3: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200", // Ritual scene
  wedding4: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200", // Decor
  wedding5: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200", // Reception
  wedding6: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200", // Couple walk
  
  portrait1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", // Studio female
  portrait2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200", // Studio male
  portrait3: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", // Editorial fashion
  portrait4: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200", // Classic portrait
  
  event1: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200", // Corporate venue
  event2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200", // Tech summit
  event3: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200", // Gala dinner
  
  commercial1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200", // Headphones premium
  commercial2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200", // Watch premium
  commercial3: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200", // Sneaker campaign
  commercial4: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200"  // Camera/Product
};

// Portfolio Projects
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "arjun-riya",
    title: "ARJUN × RIYA",
    clientNames: "Arjun Sharma & Riya Sen",
    category: "weddings",
    location: "Jaipur, Rajasthan",
    year: "2025",
    thumbnail: images.wedding1,
    description: "An opulent palace wedding capturing the intersection of rich heritage rituals and contemporary luxury celebrations at the City Palace.",
    shortDescription: "A royal palace wedding story of heritage and romance.",
    subtext: "Three days of grand scale ceremonies, candid portraits, and cinematic visuals.",
    role: "Lead Photography & Cinematography",
    featured: true,
    images: [
      { id: 101, src: images.wedding1, title: "The Royal Walkway", description: "Couple portrait at the palace courtyard.", size: "large" },
      { id: 102, src: images.wedding2, title: "Intricate Bridal Details", description: "Exquisite bridal jewelry and henna captures." },
      { id: 103, src: images.wedding3, title: "The Sacred Vows", description: "Pheras ritual around the holy fire." },
      { id: 104, src: images.wedding4, title: "Sufi Night Setup", description: "Grand stage design lit with thousands of candles." },
      { id: 105, src: images.wedding6, title: "Golden Hour Candid", description: "Laughing under the historic arches.", size: "medium" },
      { id: 106, src: images.wedding5, title: "The Reception Entrance", description: "Showered with flower petals." }
    ]
  },
  {
    id: "amira-kabir",
    title: "AMIRA × KABIR",
    clientNames: "Amira & Kabir Malhotra",
    category: "weddings",
    location: "Udaipur, Rajasthan",
    year: "2024",
    thumbnail: images.wedding3,
    description: "A lakeside celebration overlooking Lake Pichola, featuring intimate candid portraits and emotional vows at sunset.",
    shortDescription: "A magical lakeside wedding at the Lake Palace.",
    subtext: "Capturing emotional connections, twilight aesthetics, and grand settings.",
    role: "Fine Art Photography",
    featured: true,
    images: [
      { id: 201, src: images.wedding3, title: "Sunset Pheras", description: "Vows against the serene lake horizon.", size: "large" },
      { id: 202, src: images.wedding4, title: "Courtyard Mandap", description: "Floral archways in the palace courtyard." },
      { id: 203, src: images.wedding2, title: "Bridal Preparation", description: "Candid emotional moment with mother." },
      { id: 204, src: images.wedding6, title: "First Portrait", description: "Newlyweds on a wooden boat at twilight." }
    ]
  },
  {
    id: "vogue-editorial-aisha",
    title: "AISHA · FASHION EDITORIAL",
    category: "portraits",
    location: "Mumbai Studio",
    year: "2025",
    thumbnail: images.portrait1,
    description: "A high-fashion editorial shoot utilizing minimalist shadows and avant-garde drapes to create stark, beautiful portraitures.",
    shortDescription: "Minimalist studio portraiture and editorial styling.",
    role: "Art Direction & Lighting",
    featured: true,
    images: [
      { id: 301, src: images.portrait1, title: "Monochrome Study", description: "Stark contrast portrait highlighting form.", size: "medium" },
      { id: 302, src: images.portrait3, title: "Draped in Champagne", description: "Editorial campaign showcasing silk textures.", size: "large" },
      { id: 303, src: images.portrait4, title: "Raw Emotion", description: "Natural-light close-up portrait." }
    ]
  },
  {
    id: "tech-summit-mumbai",
    title: "MUMBAI CREATIVE SUMMIT",
    category: "events",
    location: "Jio World Convention Centre",
    year: "2025",
    thumbnail: images.event2,
    description: "Comprehensive coverage of Mumbai's premium design and technology summit, capturing keynotes, networking, and clean brand details.",
    shortDescription: "Elite corporate summit coverage for global leaders.",
    role: "Official Event Documentation",
    featured: false,
    images: [
      { id: 401, src: images.event2, title: "The Panel Discussion", description: "Global creators debating next-gen design.", size: "large" },
      { id: 402, src: images.event1, title: "Main Hall Architecture", description: "Sleek lighting layouts in the grand auditorium." },
      { id: 403, src: images.event3, title: "Networking Gala", description: "Candids of industry leaders collaborating." }
    ]
  },
  {
    id: "audio-campaign-noise",
    title: "ACOUSTIC SYMPHONY",
    category: "commercial",
    location: "Studio",
    year: "2025",
    thumbnail: images.commercial1,
    description: "High-contrast product commercial photography for a premium audio device, focusing on metallic details and luxury layout.",
    shortDescription: "Creative advertising product launch campaign.",
    role: "Product Photography & Styling",
    featured: true,
    images: [
      { id: 501, src: images.commercial1, title: "Metallic Symphony", description: "Premium headphones highlighted with fine lighting.", size: "large" },
      { id: 502, src: images.commercial2, title: "Chronos Timepiece", description: "Luxury watch visual showing fine mechanical dials." },
      { id: 503, src: images.commercial3, title: "Aero Sneaker Campaign", description: "High-concept athletic shoe composition." }
    ]
  },
  {
    id: "chronos-watch-brand",
    title: "CHRONOS PRESTIGE",
    category: "commercial",
    location: "Studio 2",
    year: "2024",
    thumbnail: images.commercial2,
    description: "A luxury watch shoot focusing on the micro details of the movement, reflecting precision and elite luxury craftsmanship.",
    shortDescription: "Precision product campaign for a luxury watchmaker.",
    role: "Commercial Product Shoot",
    featured: false,
    images: [
      { id: 601, src: images.commercial2, title: "Watch Dial Zoom", description: "Capturing light reflections on the sapphire crystal.", size: "medium" },
      { id: 602, src: images.commercial4, title: "Creative Workspace", description: "Retro aesthetics blending with premium materials." }
    ]
  },
  {
    id: "diya-rohan-goa",
    title: "DIYA × ROHAN",
    clientNames: "Diya & Rohan",
    category: "weddings",
    location: "Goa Beachside",
    year: "2025",
    thumbnail: images.wedding6,
    description: "A beachside wedding with rustic elements, sunset mandap vows, and a lively bohemian reception under fairy lights.",
    shortDescription: "A bohemian beachside wedding story.",
    role: "Photography",
    featured: false,
    images: [
      { id: 701, src: images.wedding6, title: "Sunset Walk", description: "Walking along the quiet shores post-ceremony." },
      { id: 702, src: images.wedding4, title: "Beach Mandap Setup", description: "Warm colors matching the horizon sunset." }
    ]
  }
];

// Detailed Services
export const servicesList: ServiceDetail[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Preserving raw emotion & grand traditions.",
    description: "We combine fine-art photojournalism with clean editorial styling to capture your love story seamlessly. Every ritual, laugh, and tear is documented with care.",
    longDescription: "Our approach is non-intrusive yet deeply directive during portraits. We specialize in capturing the emotional nuances of Indian weddings, from the grand palace settings to the private candid gazes. We focus on luxury details, lighting, and expressions that evoke nostalgia decades later.",
    features: [
      "Fine Art Couple Portraits & Family Editorial",
      "Authentic Candid Storytelling & Rituals",
      "Signature High-Contrast Color Grading",
      "Heirloom Linen Wedding Albums"
    ],
    image: images.wedding1
  },
  {
    id: "wedding-films",
    title: "Wedding Films / Cinematography",
    tagline: "Your day, shot like a movie.",
    description: "Cinematic, audio-driven films that capture the sounds, vows, and emotions of your day, edited into a timeless visual heirloom.",
    longDescription: "We don't just record video; we make cinema. Using state-of-the-art camera systems, premium drone coverage, and high-fidelity audio equipment, we record vows, laughter, and speeches. These are woven into an emotion-fueled cinematic trailer and feature-length highlight film.",
    features: [
      "Cinematic 4K Resolution & Multi-cam Setup",
      "Professional Aerial Drone Perspectives",
      "Custom Audio-Driven Storytelling & Sound Design",
      "Next-Day Cinematic Teasers"
    ],
    image: images.wedding3
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding & Couple Sessions",
    tagline: "Vogue-style editorials before the big day.",
    description: "Editorial couple shoots set in breathtaking locations, designed with a creative director to reflect your style.",
    longDescription: "We conceptualize pre-wedding shoots as high-end magazine campaigns. From location scouting at heritage palaces to clothing styling boards, our director ensures you look editorial. The resulting gallery is a stunning aesthetic portfolio of your relationship.",
    features: [
      "PALACE & OUTDOOR LOCATION SCOUTING",
      "CREATIVE DIRECTION & STYLING MOOD BOARDS",
      "Twilight & Golden Hour Fine-Art Portraits",
      "Interactive Digital Galleries"
    ],
    image: images.wedding6
  },
  {
    id: "portraits",
    title: "Editorial Portraits & Personal Branding",
    tagline: "Visual power for individuals and brands.",
    description: "Premium studio sessions, fashion editorials, and portraiture designed to communicate character and style.",
    longDescription: "Whether it is personal branding, fashion modeling portfolios, or magazine editorials, our studio portraits utilize dramatic lighting, minimalist backgrounds, and custom direction to showcase character, confidence, and modern aesthetics.",
    features: [
      "Dramatic Studio & Location Lighting",
      "Creative Posing & Composition Direction",
      "High-End Beauty Skin Retouching",
      "Commercial Usage Portfolio Formats"
    ],
    image: images.portrait1
  },
  {
    id: "commercial-product",
    title: "Commercial & Product Photography",
    tagline: "Elevating brands through elite imagery.",
    description: "Stunning brand campaigns, luxury product styling, and high-end advertising layouts that demand attention.",
    longDescription: "We translate brand identities into premium visual assets. Our product shoots emphasize materials, texture, structure, and design via macro focus and studio lighting. We deliver visual content ready for billboards, digital campaigns, and editorial catalogs.",
    features: [
      "Macro Detailing & Professional Product Styling",
      "Studio Lighting Schemes for Textures & Metals",
      "Creative Visual Concepts & Color Consistency",
      "Ultra High-Res Digital Delivery for Web & Print"
    ],
    image: images.commercial1
  },
  {
    id: "event-photography",
    title: "Premium Event Documentation",
    tagline: "Capturing the energy of elite gatherings.",
    description: "Clean, high-end photography for corporate events, luxury product launches, and private celebrations.",
    longDescription: "We cover summits, private celebrations, and brand launches with a focus on details, keynotes, and candid social interactions. Our team works discreetly to capture high-resolution imagery that highlights the event scale and luxury details.",
    features: [
      "Discreet Professional Photographic Coverage",
      "Keynote Speeches, Panelists, & Audience Candids",
      "Fast Turnaround for Press & Social Media Release",
      "High-Resolution Event Highlight Galleries"
    ],
    image: images.event2
  }
];

// Creative Pricing Packages
export const pricingPackages: ServicePackage[] = [
  {
    name: "Essential Story",
    price: "₹1,20,000",
    description: "Designed for intimate celebrations, couple portraits, or private brand sessions.",
    features: [
      "1 Day / 6 Hours Event Coverage",
      "Lead Photographer + Assistant",
      "150+ Retouched Masterpieces",
      "Online Digital Heirloom Gallery",
      "Pre-Shoot Creative Styling Call"
    ],
    popular: false
  },
  {
    name: "The Collector Package",
    price: "₹2,50,000",
    description: "Our signature service covering full weddings or comprehensive brand launches.",
    features: [
      "Full Day Coverage (Up to 12 Hours)",
      "2 Principal Photographers + 1 Cinematographer",
      "350+ Retouched High-Res Images",
      "Premium Leather-bound Heirloom Album",
      "4-Minute Cinematic Highlight Film",
      "Drone Coverage (Permit allowed zones)"
    ],
    popular: true
  },
  {
    name: "The Royal Legacy",
    price: "₹5,00,000",
    description: "The ultimate package providing editorial creative direction and legacy delivery.",
    features: [
      "2-Day Royal Coverage (Up to 24 Hours)",
      "3 Principal Photographers + 2 Cinematographers",
      "600+ Editorial Retouched Images",
      "2 Premium Parent Albums + 1 Master Legacy Album",
      "10-Minute Editorial Cinematic Film",
      "Palace Pre-Wedding Session Included",
      "Drone Coverage & Same-Day Teaser Reel"
    ],
    popular: false
  }
];

// Testimonials
export const testimonialsList: TestimonialItem[] = [
  {
    id: 1,
    quote: "They didn't just photograph our wedding at Udaipur Lake Palace. They captured the absolute essence of how it felt—the wind, the tears, the royal colors. It feels like browsing a luxury magazine.",
    clientName: "Meera & Siddharth",
    eventType: "Wedding Story",
    location: "Udaipur",
    avatar: images.wedding2
  },
  {
    id: 2,
    quote: "B2 Studio has a remarkable point of view. For our product campaign, they elevated ordinary materials into absolute luxury art. The lighting details on the gold dials was breathtaking.",
    clientName: "Chronos Prestige CEO",
    eventType: "Commercial Shoot",
    location: "Mumbai",
    avatar: images.portrait2
  },
  {
    id: 3,
    quote: "Professionalism at its absolute peak. The crew was silent, non-intrusive, and yet managed to capture the most explosive candid laughter and emotional looks. Absolutely outstanding.",
    clientName: "Rohan & Diya",
    eventType: "Goa Beach Wedding",
    location: "Goa",
    avatar: images.wedding6
  }
];

// Destination Weddings
export const destinationLocations: DestinationLocation[] = [
  {
    id: "jaipur",
    name: "Jaipur",
    description: "The pink city offers magnificent forts, sandstone archways, and royal grandeur perfect for legacy heritage wedding shoots.",
    image: images.wedding1,
    featuredSpots: ["City Palace", "Rambagh Palace", "Samode Palace"]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    description: "Lakeside luxury, floating palaces, and majestic twilight horizons. The romantic capital of destination wedding stories.",
    image: images.wedding3,
    featuredSpots: ["Taj Lake Palace", "The Leela Palace", "Jagmandir Island"]
  },
  {
    id: "goa",
    name: "Goa",
    description: "Bohemian sunset vows, beachfront sand celebrations, and intimate chapel portraits under swaying palm silhouettes.",
    image: images.wedding6,
    featuredSpots: ["Morjim Shoreline", "St. Regis Resort", "Intimate South Goa Chapels"]
  },
  {
    id: "international",
    name: "International Locations",
    description: "From luxury estates in Lake Como to historical villas in Tuscany and contemporary skylines in Dubai.",
    image: images.portrait3,
    featuredSpots: ["Villa d'Este (Como)", "Tuscany Hills", "Downtown Dubai Skyline"]
  }
];

// Frequently Asked Questions
export const faqList: FaqItem[] = [
  {
    question: "Do you shoot destination weddings outside Mumbai & Jaipur?",
    answer: "Absolutely. We travel globally for weddings and brand campaigns. Travel, lodging, and logistics are calculated transparently and added to the project quotation."
  },
  {
    question: "How long does the post-production phase take?",
    answer: "Photography curations and editorial color grading are completed within 4 to 6 weeks. Cinematic films and custom heirloom leather albums take 8 to 10 weeks, as we meticulously review every frame."
  },
  {
    question: "Can we request custom pricing configurations?",
    answer: "Yes, we customize our packages depending on the guest counts, number of events, and specific creative assets required. Contact us using our elite inquiry form to arrange a bespoke consultation."
  },
  {
    question: "What is your booking reservation timeline?",
    answer: "We typically reserve dates 6 to 12 months in advance, especially during the Indian wedding season (October to March). A 40% advance reservation fee confirms the crew and blocks the calendar."
  }
];
