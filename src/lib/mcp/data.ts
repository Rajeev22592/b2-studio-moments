export const services = [
  {
    title: "Wedding Photography",
    description:
      "Capture your special day with timeless elegance. From intimate ceremonies to grand celebrations, we document every precious moment.",
    features: ["Full day coverage", "Candid & posed shots", "Album design", "Online gallery"],
  },
  {
    title: "Pre-Wedding Shoots",
    description:
      "Create magical memories before your big day with stunning pre-wedding photography at beautiful locations.",
    features: ["Location scouting", "Outfit consultation", "Multiple looks", "Cinematic edits"],
  },
  {
    title: "Cinematography",
    description:
      "Professional video production that tells your story with cinematic quality and emotional depth.",
    features: ["4K recording", "Drone footage", "Color grading", "Same-day edits"],
  },
  {
    title: "Fashion Photography",
    description:
      "Elevate your brand with stunning fashion photography that captures style, personality, and sophistication.",
    features: ["Studio & outdoor", "Professional styling", "Portfolio ready", "Commercial use"],
  },
  {
    title: "Drone Photography",
    description:
      "Capture breathtaking aerial perspectives with our professional drone photography services.",
    features: ["Licensed pilots", "High-res imagery", "Video & stills", "Event coverage"],
  },
  {
    title: "Corporate Events",
    description:
      "Professional coverage for conferences, product launches, and corporate gatherings.",
    features: ["Quick turnaround", "Team headshots", "Event highlights", "Brand focused"],
  },
] as const;

export const packages = [
  {
    name: "Essential",
    price: "₹25,000",
    description: "Perfect for intimate events and small gatherings",
    features: [
      "4 hours coverage",
      "100+ edited photos",
      "Online gallery",
      "Basic retouching",
      "1 photographer",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹50,000",
    description: "Our most popular package for weddings and events",
    features: [
      "Full day coverage",
      "300+ edited photos",
      "Online gallery + USB",
      "Advanced retouching",
      "2 photographers",
      "Pre-wedding shoot",
      "Highlight video",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "₹1,00,000",
    description: "Complete coverage for your most special occasions",
    features: [
      "2-day coverage",
      "500+ edited photos",
      "Premium album",
      "Cinematic film",
      "3 photographers",
      "Pre-wedding shoot",
      "Drone coverage",
      "Same-day edit",
    ],
    popular: false,
  },
] as const;

export const portfolioCategories = [
  { slug: "weddings", name: "Weddings", path: "/portfolio/weddings" },
  { slug: "portraits", name: "Portraits", path: "/portfolio/portraits" },
  { slug: "events", name: "Events", path: "/portfolio/events" },
  { slug: "commercial", name: "Commercial", path: "/portfolio/commercial" },
  { slug: "product", name: "Product", path: "/portfolio/product" },
  { slug: "fashion", name: "Fashion", path: "/portfolio/fashion" },
  { slug: "travel", name: "Travel", path: "/portfolio/travel" },
] as const;

export const contactInfo = {
  studio: "B2 Studio",
  phone: "+91 97998 87002",
  whatsapp: "https://wa.me/919799887002",
  emails: ["hello@b2studio.com", "bookings@b2studio.com"],
  address: "123 Photography Lane, Mumbai, Maharashtra 400001",
  workingHours: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
  social: {
    instagram: "https://instagram.com/b2studio",
    facebook: "https://facebook.com/b2studio",
    youtube: "https://youtube.com/b2studio",
  },
} as const;

export const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Corporate Event",
  "Fashion Shoot",
  "Product Shoot",
  "Portrait Session",
  "Other",
] as const;
