import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Shield, TrendingUp, Crown, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import { residentialProperties, commercialProperties, newLaunches, luxuryPenthouses } from "@/data/properties";
import heroImage from "@/assets/hero-home.jpg";
import interiorBanner from "@/assets/interior-banner.jpg";

const features = [
  { icon: Home, title: "Residential Properties", desc: "Premium homes in Bandra, Khar, Juhu, Santacruz & Worli" },
  { icon: Building2, title: "Commercial Spaces", desc: "Prime office & retail locations across Mumbai" },
  { icon: Shield, title: "Trusted Expertise", desc: "Years of experience in Mumbai's luxury real estate market" },
  { icon: TrendingUp, title: "Investment Advisory", desc: "Expert guidance on property investments & returns" },
];

const HomePage = () => (
  <>
    <SEOHead
      title="Lacasaa Real Estate | Premium Properties in Mumbai - Bandra, Khar, Juhu"
      description="Lacasaa Real Estate offers premium residential & commercial properties in Mumbai's most sought-after locations. Explore luxury flats, penthouses & office spaces in Bandra, Khar, Santacruz, Juhu & Worli."
      keywords="lacasaa real estate, mumbai property, bandra flats, khar apartments, juhu penthouse, worli property, luxury real estate mumbai, commercial property mumbai, residential property mumbai"
      canonical="https://lacasaarealestate.com"
    />

    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury property in Mumbai" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/80 via-deep-brown/50 to-transparent" />
      </div>
      <div className="relative container-main section-padding">
        <div className="max-w-2xl animate-slide-up">
          <p className="text-gold-light font-body text-sm uppercase tracking-[0.3em] mb-4">Commercial • Residential</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-warm-white font-semibold leading-tight mb-6">
            How We Simplify Your Needs!
          </h1>
          <p className="text-warm-white/80 text-lg mb-8 leading-relaxed">
            Explore our carefully curated selection of Private Residential & Commercial Projects in Mumbai's most prestigious locations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/residential" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-gold transition-colors">
              Explore Properties <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-warm-white/30 text-warm-white px-8 py-3.5 rounded-lg font-medium hover:bg-warm-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-6 text-center hover-lift">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About excerpt */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="About Lacasaa" subtitle="" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Never underestimate the power of premium real estate. Lacasaa Real Estate, led by Mazhar Dalvi, is a seasoned enterprise with a profound understanding of Mumbai's luxury property landscape. Our visionary leadership has propelled us to the forefront, establishing a reputation for excellence, integrity, and innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With an unwavering commitment to excellence, we specialize in properties across Bandra, Khar, Santacruz, Juhu, and Worli — offering leasing, buying, selling, redevelopment, and investment advisory services.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elegant">
          <img src={interiorBanner} alt="Luxury interior" className="w-full h-80 object-cover" loading="lazy" width={1920} height={600} />
        </div>
      </div>
    </section>

    {/* Residential */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Residential Sellers" subtitle="Explore premium residential properties across Mumbai" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {residentialProperties.slice(0, 4).map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/residential" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
            View All Residential <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Commercial */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading title="Commercial Rent" subtitle="Prime commercial spaces for your business needs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialProperties.slice(0, 4).map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/commercial" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
            View All Commercial <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Interior CTA */}
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img src={interiorBanner} alt="Interior design" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70 backdrop-blur-sm" />
      </div>
      <div className="relative container-main text-center px-4">
        <h2 className="font-heading text-3xl sm:text-4xl text-warm-white font-semibold mb-4">Compare & Choose from 300+ Top Verified Interior Brands</h2>
        <p className="text-warm-white/80 text-lg mb-8 max-w-2xl mx-auto">Calculate your interiors cost instantly with our advanced estimator</p>
        <Link to="/interior-design" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-gold transition-colors">
          Explore Interior Services <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* New Launches */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="New Launches" subtitle="Be the first to invest in Mumbai's latest premium projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newLaunches.slice(0, 3).map((p) => (
            <div key={p.id} className="luxury-card hover-lift">
              <div className="relative">
                <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="badge-new">New Launch</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.location}</p>
                <p className="text-accent font-semibold mb-3">{p.price}</p>
                <Link to="/new-launches" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/new-launches" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-gold transition-colors">
            View All New Launches <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading title="Our Premium Services" subtitle="Complete real estate solutions under one roof" center />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          <Link to="/investment" className="luxury-card p-6 text-center hover-lift">
            <TrendingUp size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">Investment</h3>
          </Link>
          <Link to="/home-loans" className="luxury-card p-6 text-center hover-lift">
            <Home size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">Home Loans</h3>
          </Link>
          <Link to="/interior-design" className="luxury-card p-6 text-center hover-lift">
            <Building2 size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">Interiors</h3>
          </Link>
          <Link to="/nri-services" className="luxury-card p-6 text-center hover-lift">
            <Shield size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">NRI Services</h3>
          </Link>
          <Link to="/legal-services" className="luxury-card p-6 text-center hover-lift">
            <Award size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">Legal</h3>
          </Link>
          <Link to="/luxury-penthouses" className="luxury-card p-6 text-center hover-lift">
            <Crown size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-heading text-sm font-semibold">Penthouses</h3>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
