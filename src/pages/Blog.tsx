import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const posts = [
  { id: 1, title: "Top 10 Emerging Neighborhoods in Mumbai for Property Investment in 2026", excerpt: "Discover the most promising areas in Mumbai where property values are set to surge. From the redeveloping Bandra East to the infrastructure-driven growth in Navi Mumbai, we analyze the data behind the hottest markets.", image: property1, date: "March 15, 2026", author: "Mazhar Dalvi", readTime: "8 min read", category: "Investment" },
  { id: 2, title: "A Complete Guide to Buying Your First Home in Mumbai", excerpt: "Navigating Mumbai's real estate market as a first-time buyer can be overwhelming. This comprehensive guide covers everything from budgeting and home loans to RERA verification and registration processes.", image: property2, date: "March 8, 2026", author: "Gurbani Kour", readTime: "12 min read", category: "Buying Guide" },
  { id: 3, title: "Understanding RERA: What Every Mumbai Property Buyer Must Know", excerpt: "The Real Estate Regulatory Authority has transformed the property buying experience. Learn about your rights as a buyer, how to verify RERA registration, and what protections the law offers.", image: property3, date: "February 28, 2026", author: "Sufiyan Shaikh", readTime: "6 min read", category: "Legal" },
  { id: 4, title: "Why Bandra West Remains Mumbai's Most Coveted Address", excerpt: "From Bollywood celebrities to business tycoons, Bandra West continues to attract India's elite. We explore the factors that make this neighborhood eternally desirable — its culture, connectivity, and lifestyle.", image: property4, date: "February 20, 2026", author: "Mazhar Dalvi", readTime: "10 min read", category: "Neighborhood" },
  { id: 5, title: "Commercial Real Estate Trends in Mumbai: What to Expect in 2026", excerpt: "With the rise of hybrid work models and co-working spaces, Mumbai's commercial real estate landscape is evolving rapidly. We analyze emerging trends, rental yields, and the best areas for commercial investment.", image: gallery1, date: "February 12, 2026", author: "Vibhuti Kour", readTime: "7 min read", category: "Commercial" },
  { id: 6, title: "Interior Design Trends for Luxury Mumbai Apartments", excerpt: "Transform your space with the latest interior design trends favored by Mumbai's elite. From minimalist Japanese-inspired aesthetics to bold maximalist statements, discover what's trending in 2026.", image: gallery3, date: "February 5, 2026", author: "Kamran Khan", readTime: "9 min read", category: "Lifestyle" },
];

const Blog = () => (
  <>
    <SEOHead
      title="Blog | Lacasaa Real Estate - Mumbai Property Insights & Guides"
      description="Read expert insights on Mumbai real estate — investment tips, buying guides, market trends, RERA updates, and neighborhood guides from the Lacasaa team."
      keywords="mumbai real estate blog, property investment tips, bandra real estate news, rera guide, mumbai property market"
      canonical="https://lacasaarealestate.com/blog"
    />

    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Our Blog" subtitle="Expert insights and guides for Mumbai's real estate market" />

        {/* Featured post */}
        <div className="glass-card overflow-hidden grid lg:grid-cols-2 gap-0 mb-10 hover-lift">
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <img src={posts[0].image} alt={posts[0].title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <span className="absolute top-4 left-4 bg-accent/90 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Calendar size={12} /> {posts[0].date}</span>
              <span className="flex items-center gap-1"><User size={12} /> {posts[0].author}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {posts[0].readTime}</span>
            </div>
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold mb-4">{posts[0].title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{posts[0].excerpt}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all text-sm">
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <span className="absolute top-3 left-3 bg-accent/90 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
