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
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="What We Offer" subtitle="End-to-end real estate services backed by years of expertise" />
        <div className="space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className="group glass-card-premium overflow-hidden grid lg:grid-cols-2 gap-0 hover-lift">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <s.icon size={28} className="text-accent" />
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-1.5" /> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-warm-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm w-fit group-hover:gap-3">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full overflow-hidden order-1 lg:order-2">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-warm-white/20 lg:bg-gradient-to-l" />
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
