import { Shield, Handshake, Building2, Award, Globe, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-home.jpg";

const partners = [
  { name: "HDFC Home Loans", category: "Banking Partner", desc: "India's leading housing finance company providing competitive home loan rates for our clients." },
  { name: "ICICI Bank", category: "Banking Partner", desc: "Comprehensive banking solutions including home loans, property insurance, and NRI banking services." },
  { name: "SBI Home Loans", category: "Banking Partner", desc: "State Bank of India's home loan division offering some of the lowest interest rates in the market." },
  { name: "Axis Bank", category: "Banking Partner", desc: "Full-range property financing solutions with quick approval processes and flexible repayment options." },
  { name: "Livspace", category: "Interior Design", desc: "Premium interior design and renovation partner for turnkey home transformation solutions." },
  { name: "NoBroker", category: "Technology Partner", desc: "Digital platform integration for seamless property verification and documentation." },
  { name: "MagicBricks", category: "Listing Partner", desc: "India's premier property portal for maximum exposure of our listed properties." },
  { name: "99acres", category: "Listing Partner", desc: "Leading real estate platform ensuring our properties reach the widest audience of genuine buyers." },
];

const certifications = [
  { icon: Shield, title: "RERA Registered", desc: "All our transactions comply with the Real Estate (Regulation and Development) Act, 2016" },
  { icon: Award, title: "NAR India Member", desc: "Affiliated with the National Association of Realtors India, upholding international standards" },
  { icon: Building2, title: "CREDAI Association", desc: "Connected with the Confederation of Real Estate Developers' Associations of India" },
  { icon: Globe, title: "International Property Awards", desc: "Recognized for excellence in luxury real estate services in the Mumbai market" },
  { icon: Users, title: "Mumbai MCHI-CREDAI", desc: "Active member of Maharashtra Chamber of Housing Industry for industry best practices" },
  { icon: Handshake, title: "ISO 9001:2015", desc: "Quality management certified for consistent delivery of high-quality real estate services" },
];

const Partners = () => (
  <>
    <SEOHead
      title="Partners & Affiliations | Lacasaa Real Estate"
      description="Lacasaa Real Estate partners with leading banks, interior designers, and property platforms. RERA registered, NAR India member, and CREDAI affiliated."
      keywords="lacasaa partners, real estate affiliations mumbai, rera registered agent, property partners, home loan partners"
      canonical="https://lacasaarealestate.com/partners"
    />

    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Partners" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Partners & Affiliations</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Trusted partnerships that strengthen our service delivery</p>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Certifications & Memberships" subtitle="Industry-recognized credentials that guarantee quality" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="glass-card p-6 text-center hover-lift">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <c.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Partners */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading title="Our Partners" subtitle="We collaborate with industry leaders to serve you better" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="glass-card p-6 hover-lift">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Handshake size={22} className="text-accent" />
              </div>
              <span className="text-xs text-accent font-semibold uppercase tracking-wider">{p.category}</span>
              <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Partners;
