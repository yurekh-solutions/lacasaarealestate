import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building, DollarSign, FileText, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";

const NRI = () => (
  <>
    <SEOHead
      title="NRI Property Investment India | Complete Guide | Lacasaa Real Estate"
      description="Expert assistance for NRIs investing in Indian real estate. Legal guidance, property management, and remote purchase support."
      keywords="nri property investment, nri real estate india, nri home loan, property management for nri, invest in india from abroad"
      canonical="https://lacasaarealestate.com/nri-services"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery1} alt="NRI services" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Globe size={16} />
          <span className="text-sm font-medium">Global Services</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          NRI Services
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Invest in Indian real estate from anywhere in the world. Complete end-to-end support for NRIs.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-sm opacity-80">NRI Clients</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-80">Countries Served</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">₹300 Cr+</div>
            <div className="text-sm opacity-80">Investments Made</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-80">Remote Processing</div>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Comprehensive NRI Services" 
          subtitle="Everything you need to invest in Indian real estate from abroad" 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Building size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Property Search & Selection</h3>
            <p className="text-muted-foreground text-sm mb-4">Virtual property tours and detailed video walkthroughs. We help you shortlist properties based on your requirements.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Virtual Tours</li>
              <li className="flex items-center gap-2">✓ Video Walkthroughs</li>
              <li className="flex items-center gap-2">✓ Detailed Reports</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <FileText size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Legal Assistance</h3>
            <p className="text-muted-foreground text-sm mb-4">Complete legal support including power of attorney, documentation, and RERA compliance verification.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Power of Attorney</li>
              <li className="flex items-center gap-2">✓ Document Verification</li>
              <li className="flex items-center gap-2">✓ Legal Compliance</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <DollarSign size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Financial Guidance</h3>
            <p className="text-muted-foreground text-sm mb-4">NRI home loan assistance, tax planning, and repatriation guidance for hassle-free transactions.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ NRI Home Loans</li>
              <li className="flex items-center gap-2">✓ Tax Planning</li>
              <li className="flex items-center gap-2">✓ Repatriation Support</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Globe size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Remote Purchase</h3>
            <p className="text-muted-foreground text-sm mb-4">Complete your property purchase without visiting India. We handle everything on your behalf.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Remote Documentation</li>
              <li className="flex items-center gap-2">✓ Video Consultations</li>
              <li className="flex items-center gap-2">✓ Digital Signatures</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Building size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Property Management</h3>
            <p className="text-muted-foreground text-sm mb-4">Complete property management services including tenant management, maintenance, and rent collection.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Tenant Screening</li>
              <li className="flex items-center gap-2">✓ Rent Collection</li>
              <li className="flex items-center gap-2">✓ Maintenance Support</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Phone size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Dedicated Support</h3>
            <p className="text-muted-foreground text-sm mb-4">24/7 dedicated relationship manager for personalized assistance across time zones.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ 24/7 Support</li>
              <li className="flex items-center gap-2">✓ WhatsApp Updates</li>
              <li className="flex items-center gap-2">✓ Monthly Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="NRI Investment FAQs" 
          subtitle="Common questions about investing in Indian real estate"
          center
        />
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          <div className="luxury-card p-6">
            <h3 className="font-heading text-lg font-semibold mb-3">Can NRIs buy property in India?</h3>
            <p className="text-muted-foreground">Yes, NRIs can buy residential and commercial properties in India without RBI approval. However, agricultural land, plantation property, and farmhouses require special permission.</p>
          </div>
          <div className="luxury-card p-6">
            <h3 className="font-heading text-lg font-semibold mb-3">What documents are required?</h3>
            <p className="text-muted-foreground">Passport, visa, PAN card, overseas address proof, Indian address proof (if any), and passport-size photographs. Power of Attorney if purchasing remotely.</p>
          </div>
          <div className="luxury-card p-6">
            <h3 className="font-heading text-lg font-semibold mb-3">Can NRIs get home loans in India?</h3>
            <p className="text-muted-foreground">Yes, NRIs can avail home loans from Indian banks and NBFCs. Typically, banks finance up to 80% of the property value with competitive interest rates.</p>
          </div>
          <div className="luxury-card p-6">
            <h3 className="font-heading text-lg font-semibold mb-3">How to repatriate sale proceeds?</h3>
            <p className="text-muted-foreground">NRIs can repatriate sale proceeds up to the amount paid in foreign exchange for the property. Proper documentation and chartered accountant certification required.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <SectionHeading 
          title="Start Your Investment Journey" 
          subtitle="Schedule a free consultation with our NRI property experts"
          center
        />
        <div className="max-w-2xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+919821090922"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors"
          >
            <Phone size={20} />
            Call Us Now
          </a>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Book Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NRI;
