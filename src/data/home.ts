export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  code: string;
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
}

export interface FeaturedPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export interface PhotoHighlight {
  title: string;
  category: string;
  location: string;
  tone: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "HRIS & ASN Enterprise Recap",
    description: "Real-time civil servant data management and recap system with distributed database integration and dynamic report exports.",
    tags: ["Laravel", "PostgreSQL", "PHP 8", "DataTables"],
    code: "01",
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    title: "AI Topic Insights Dashboard",
    description: "AI analytics dashboard for topic extraction, keyword processing, and resilient error-boundary data visualization.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    code: "02",
    featured: false,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    title: "Astro Modern Portfolio",
    description: "Ultra-fast portfolio site built with Astro 5, Tailwind CSS 4, and a modular component architecture.",
    tags: ["Astro", "Tailwind v4", "TypeScript"],
    code: "03",
    featured: false,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  }
];

export const featuredPosts: FeaturedPost[] = [
  {
    title: "Building Super Fast Websites with Astro & Tailwind CSS v4",
    excerpt: "A practical guide to optimizing page performance with zero-JavaScript by default and the latest Tailwind CSS v4 setup.",
    date: "24 Jul 2026",
    readTime: "5 min read",
    category: "Web Development",
    slug: "astro-tailwind-v4"
  },
  {
    title: "Resilient Error Handling in React & Component Error Boundaries",
    excerpt: "How to handle partial API failures without crashing the entire application view.",
    date: "12 Jul 2026",
    readTime: "7 min read",
    category: "Frontend Architecture",
    slug: "react-error-handling"
  },
  {
    title: "PostgreSQL Query Optimization & Laravel Batching",
    excerpt: "Techniques for optimizing employee data search, distributed query batching, and preventing memory leaks.",
    date: "28 Jun 2026",
    readTime: "6 min read",
    category: "Backend & Database",
    slug: "laravel-postgresql-optimization"
  }
];

export const photoHighlights: PhotoHighlight[] = [
  {
    title: "Minimalist Architecture",
    category: "Urban",
    location: "Jakarta, Indonesia",
    tone: "bg-brand-500/10 text-brand-300 border-brand-500/20"
  },
  {
    title: "Golden Hour Glow",
    category: "Nature",
    location: "Bandung Highlands",
    tone: "bg-warning-light/10 text-warning-light border-warning-light/20"
  },
  {
    title: "City Lights & Motion",
    category: "Nightlife",
    location: "Central Business District",
    tone: "bg-info-light/10 text-info-light border-info-light/20"
  },
  {
    title: "Serenity by the Coast",
    category: "Landscape",
    location: "Bali Coastlines",
    tone: "bg-success-light/10 text-success-light border-success-light/20"
  }
];
