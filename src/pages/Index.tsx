import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Home,
  Shield,
  TrendingUp,
  Crown,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ChevronDown,
  ChevronUp,
  User,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import {
  residentialProperties,
  commercialProperties,
  newLaunches,
} from "@/data/properties";
import interiorBanner from "@/assets/interior-banner.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/hero-home.jpg";
import gallery3 from "@/assets/gallery-6.jpg";
import gallery4 from "@/assets/gallery-3.jpg";
import teamPlaceholder from "@/assets/team-placeholder.jpg";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Home,
    title: "Premium Builder Projects",
    desc: "Exclusive access to Mumbai's top developers",
  },
  {
    icon: Building2,
    title: "Trusted Brokerage",
    desc: "Representing leading builders & developers",
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    desc: "Personalized service for buyers & investors",
  },
  {
    icon: TrendingUp,
    title: "Best Deals",
    desc: "Direct from builders, best prices guaranteed",
  },
];

const testimonials = [
  { name: "Rajesh Mehta", role: "Property Investor", rating: 5, text: "Lacasaa made my property investment journey incredibly smooth. Their market knowledge of Bandra and Khar is unmatched. Found my dream property within weeks!" },
  { name: "Priya Sharma", role: "Homeowner", rating: 5, text: "We were looking for our dream home in Juhu and the Lacasaa team went above and beyond. The entire buying process was transparent and hassle-free." },
  { name: "Arjun Kapoor", role: "Business Owner", rating: 4.5, text: "Finding the right commercial space in BKC was crucial for our business. Lacasaa understood our requirements perfectly and delivered beyond expectations." },
  { name: "Sneha Desai", role: "NRI Investor", rating: 5, text: "As an NRI, investing in Mumbai seemed daunting. But Lacasaa's advisory service made it effortless. They handled everything from start to finish." },
  { name: "Mohammad Khan", role: "Tenant", rating: 4, text: "I needed a premium rental in Khar on short notice for my family's relocation. Lacasaa arranged viewings within 24 hours. Outstanding service!" },
  { name: "Anita Joshi", role: "Society Committee Member", rating: 5, text: "Our housing society was looking for a reliable partner for redevelopment. Lacasaa's expertise in regulatory requirements was invaluable." },
  { name: "Vikram Singh", role: "First-time Buyer", rating: 4, text: "As a first-time buyer, I had so many questions. The Lacasaa team patiently guided me through every step. Great experience overall!" },
  { name: "Fatima Shaikh", role: "Landlord", rating: 5, text: "I've been using Lacasaa's services for over 3 years. They consistently find quality tenants and ensure timely rent collection. Highly professional!" },
  { name: "Rohit Patel", role: "Commercial Investor", rating: 4.5, text: "Lacasaa helped me acquire multiple commercial properties in Andheri. Their market insights and negotiation skills saved me crores!" },
  { name: "Meera Reddy", role: "Luxury Home Buyer", rating: 3, text: "The team's understanding of luxury properties in South Mumbai is exceptional. They found me the perfect sea-facing penthouse!" },
];



const faqs = [
  { q: "What areas does Lacasaa Real Estate cover?", a: "We primarily operate in Mumbai's premium Western suburbs and South Mumbai, including Bandra, Khar, Santacruz, Juhu, Worli, BKC, Lower Parel, Andheri, and Nariman Point." },
  { q: "What types of properties do you deal with?", a: "We handle both residential and commercial properties — from luxury apartments, penthouses, and villas to office spaces, retail shops, and warehouses." },
  { q: "How do I schedule a property viewing?", a: "You can schedule a viewing by contacting us via phone (+91-9821090922), email, or through our Contact Us page. Viewings are typically arranged within 24-48 hours." },
  { q: "Do you charge brokerage fees?", a: "Yes, standard brokerage fees apply as per industry norms. For rentals, it is typically one month's rent. For sales, the brokerage is a percentage of the transaction value." },
  { q: "Can NRIs buy property through Lacasaa?", a: "Absolutely! We have extensive experience assisting NRI clients with property purchases in Mumbai, handling everything from property identification to legal documentation." },
  { q: "What makes Lacasaa different from other agents?", a: "Our deep expertise in Mumbai's premium neighborhoods, transparent dealings, end-to-end service, and a team of seasoned professionals set us apart." },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const heroImages = [gallery1, gallery2, gallery3, gallery4];

  const heroHeadings = [
    "Mumbai's Trusted Property Broker",
    "Your Gateway to Premium Properties",
    "Authorized Broker • Top Builder Projects",
    "Exclusive Access to 500+ Properties"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];



  return (
    <>
      <SEOHead
        title="Lacasaa Real Estate | Authorized Property Broker Mumbai"
        description="Mumbai's trusted property broker with 500+ premium properties."
        keywords="mumbai property broker, premium properties, lacasaa real estate"
        canonical="https://lacasaarealestate.com"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4 transition-all duration-500 min-h-[4rem]">
            {heroHeadings[currentSlide]}
          </h1>
          <p className="text-white/80 mb-6 max-w-xl">
            Explore premium properties directly from top builders.
          </p>

          <Link
            to="/residential"
            className="bg-gradient-to-r from-accent to-primary px-6 py-3 rounded-lg text-warm-white inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-xl text-center">
              <f.icon className="mx-auto mb-3 text-accent" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE SIMPLIFY YOUR NEEDS */}
      <section className="py-20 bg-gradient-to-br from-warm-white to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              How We Simplify Your Needs!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of Private Residential & Commercial Projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Residential */}
            <Link to="/residential" className="group block">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={gallery1}
                    alt="Residential Projects"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="text-gold-light" size={28} />
                    <h3 className="font-heading text-3xl font-bold text-warm-white">
                      Residential Projects
                    </h3>
                  </div>
                  <p className="text-warm-white/80 mb-4">
                    Sellers, Owners • Luxury apartments, penthouses & villas from top builders
                  </p>
                  <div className="flex items-center gap-2 text-gold-light font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Sellers</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial */}
            <Link to="/commercial" className="group block">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={gallery3}
                    alt="Commercial Properties"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="text-gold-light" size={28} />
                    <h3 className="font-heading text-3xl font-bold text-warm-white">
                      Commercial Properties
                    </h3>
                  </div>
                  <p className="text-warm-white/80 mb-4">
                    Sellers, Owners • Office spaces, retail shops & warehouses in prime locations
                  </p>
                  <div className="flex items-center gap-2 text-gold-light font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Sellers</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading title="Residential Enquiry" />

          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {residentialProperties.slice(0, 4).map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionHeading title="Commercial Enquiry" />

          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {commercialProperties.slice(0, 4).map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>



      
      {/* CLIENT DIARIES MARQUEE */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-warm-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              Client Diaries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real clients who trusted Lacasaa with their property journey
            </p>
          </div>

          {/* Forward Marquee Row */}
          <div className="mb-6">
            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {duplicatedTestimonials.map((t, i) => (
                  <div key={`fwd-${i}`} className="flex-shrink-0 w-96 mx-4">
                    <div className="neu-card p-6 h-full border border-glass-border">
                      <Quote size={32} className="text-accent/40 mb-4" />
                      <p className="text-foreground leading-relaxed mb-6 text-sm">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                          <User size={20} className="text-warm-white" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                        <div className="ml-auto flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={14} 
                              className={`${
                                star <= Math.floor(t.rating) 
                                  ? 'text-gold fill-gold' 
                                  : star - 0.5 <= t.rating 
                                    ? 'text-gold fill-gold' 
                                    : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reverse Marquee Row */}
          <div>
            <div className="overflow-hidden">
              <div className="flex animate-marquee-reverse">
                {duplicatedTestimonials.map((t, i) => (
                  <div key={`rev-${i}`} className="flex-shrink-0 w-96 mx-4">
                    <div className="neu-card p-6 h-full border border-glass-border">
                      <Quote size={32} className="text-accent/40 mb-4" />
                      <p className="text-foreground leading-relaxed mb-6 text-sm">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                          <User size={20} className="text-warm-white" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                        <div className="ml-auto flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={14} 
                              className={`${
                                star <= Math.floor(t.rating) 
                                  ? 'text-gold fill-gold' 
                                  : star - 0.5 <= t.rating 
                                    ? 'text-gold fill-gold' 
                                    : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about working with Lacasaa" />
          
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-base pr-4">{faq.q}</span>
                  {openFAQ === i ? (
                    <ChevronUp size={20} className="text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/faq" className="text-accent font-semibold hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePage;
