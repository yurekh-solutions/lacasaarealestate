import { Home, Building2, KeyRound, RefreshCw, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-home.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const services = [
  { 
    icon: Home, 
    title: "Residential Leasing", 
    desc: "Find your perfect home in Mumbai's most prestigious neighborhoods. We offer a curated selection of luxury apartments, penthouses, and villas across Bandra, Khar, Santacruz, Juhu, and Worli.", 
    features: ["Fully furnished & semi-furnished options", "Short & long-term leases", "Premium society living", "Sea-facing & garden-view units"],
    image: gallery1 
  },
  { 
    icon: Building2, 
    title: "Commercial Leasing", 
    desc: "Discover prime commercial spaces tailored to your business needs. From boutique offices in Bandra to large corporate floors in BKC and Lower Parel.", 
    features: ["Grade A office spaces", "Retail & showroom units", "Plug-and-play offices", "Flexible lease terms"],
    image: gallery2 
  },
  { 
    icon: KeyRound, 
    title: "Buying & Selling", 
    desc: "Whether you're buying your dream home or selling a valued property, our expert team ensures seamless transactions with complete transparency and legal compliance.", 
    features: ["Market valuation & pricing", "Legal documentation support", "Negotiation expertise", "End-to-end transaction management"],
    image: gallery3 
  },
  { 
    icon: RefreshCw, 
    title: "Redevelopment Projects", 
    desc: "We specialize in overseeing redevelopment projects, transforming aging structures into modern, luxurious living spaces while maximizing value for all stakeholders.", 
    features: ["Feasibility studies", "Builder-society negotiations", "Project management", "Regulatory compliance"],
    image: gallery4 
  },
  { 
    icon: TrendingUp, 
    title: "Investment Advisory", 
    desc: "Make informed property investment decisions with our expert guidance. We analyze market trends, rental yields, and capital appreciation potential to help you build wealth.", 
    features: ["Portfolio diversification", "Rental yield analysis", "Market trend reports", "Tax-efficient strategies"],
    image: gallery5 
  },
  { 
    icon: Handshake, 
    title: "Land Lease & Sales", 
    desc: "Navigate the complex landscape of land transactions with our specialized team. We handle everything from identifying opportunities to closing deals.", 
    features: ["Land identification & due diligence", "Title verification", "Government liaison", "Development potential analysis"],
    image: gallery6 
  },
];

const Services = () => (
  <>
    <SEOHead
      title="Our Services | Lacasaa Real Estate - Leasing, Buying, Selling & More"
      description="Lacasaa Real Estate offers comprehensive services including residential & commercial leasing, buying & selling, redevelopment, investment advisory, and land transactions in Mumbai."
      keywords="real estate services mumbai, property leasing bandra, buy sell property mumbai, redevelopment mumbai, property investment advisory"
      canonical="https://lacasaarealestate.com/services"
    />

    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Our Services" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Our Services</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Comprehensive real estate solutions tailored to your needs</p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-main">
        <SectionHeading title="What We Offer" subtitle="End-to-end real estate services backed by years of expertise" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((s, i) => (
            <div key={s.title} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              {/* Image Section */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl">
                  <s.icon size={24} className="text-warm-white" />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {s.desc}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-1.5" /> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Link 
                  to="/contact" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-warm-white py-3 rounded-2xl text-sm font-semibold hover:shadow-xl transition-all duration-300 group-hover:gap-3"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/30 text-center">
      <div className="container-main">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Let us help you find the perfect property or service solution.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors">
          Contact Us Today <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default Services;
