import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/properties";
import heroImage from "@/assets/hero-home.jpg";
import mazharImg from "@/assets/mazhar.png";

const About = () => (
  <>
    <SEOHead
      title="About Us | Lacasaa Real Estate - Mumbai's Trusted Property Experts"
      description="Meet the Lacasaa team led by Mazhar Dalvi. Premier real estate services in Bandra, Khar, Santacruz, Juhu & Worli. Residential, commercial, redevelopment & investment advisory."
      keywords="lacasaa about, mazhar dalvi, mumbai real estate team, bandra property experts, luxury real estate mumbai"
      canonical="https://lacasaarealestate.com/about"
    />

    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="About Lacasaa" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Welcome to Lacasaa</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Your trusted partner in Mumbai's premium real estate market</p>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Our Story" />
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Mazhar Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <div className="relative glass-card-premium p-4">
                <img 
                  src={mazharImg} 
                  alt="Mazhar Dalvi - Founder & CEO" 
                  className="w-full h-auto rounded-2xl object-cover shadow-elegant"
                  loading="lazy"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-card-premium p-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">Mazhar Dalvi</h3>
                  <p className="text-sm text-accent font-semibold">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6 text-muted-foreground leading-relaxed">
            <p><strong>Lacasaa Real Estate</strong> is a premier property brokerage firm based in Mumbai, specializing in representing the city's most prestigious builders and developers. Founded by Mazhar Dalvi, our firm has established itself as a trusted intermediary between buyers and top-tier developers across Mumbai.</p>
            <p>As authorized brokers, we have exclusive partnerships with leading developers in Bandra, Khar, Santacruz, Juhu, and Worli. This gives our clients direct access to premium residential and commercial properties at the best possible prices, straight from the builders.</p>
            <p><strong>What Sets Us Apart:</strong></p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                <span>Authorized representatives of Mumbai's top builders and developers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                <span>Direct access to new launches and exclusive inventory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                <span>Transparent dealings with no hidden charges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                <span>Expert negotiation to get you the best deals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0 mt-2" />
                <span>Complete end-to-end support from property selection to possession</span>
              </li>
            </ul>
            <p>Mazhar Dalvi's deep understanding of the real estate market, combined with strong relationships with major developers, ensures that our clients receive unmatched service and access to the finest properties in Mumbai.</p>
            <p>Whether you're a first-time homebuyer, a seasoned investor, or looking for commercial spaces, Lacasaa Real Estate provides personalized guidance and exclusive access to premium builder projects that match your requirements and budget.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading title="Lacasaa Team" subtitle="Meet our dedicated professionals" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
