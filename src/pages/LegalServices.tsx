import { ArrowRight, FileCheck, Scale, Shield, Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery2 from "@/assets/gallery-2.jpg";

const LegalServices = () => (
  <>
    <SEOHead
      title="Legal Services for Property | Documentation & Verification | Lacasaa"
      description="Complete legal support for property transactions. Title verification, documentation, RERA compliance, and dispute resolution."
      keywords="property legal services, title verification, property documentation, rera compliance, legal advisor mumbai"
      canonical="https://lacasaarealestate.com/legal-services"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery2} alt="Legal services" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Scale size={16} />
          <span className="text-sm font-medium">Expert Legal Team</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Legal Services
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Protect your investment with comprehensive legal support. Expert lawyers specializing in real estate transactions.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-80">Cases Handled</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-80">Expert Lawyers</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Legal Support</div>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Our Legal Services" 
          subtitle="Comprehensive legal solutions for all your property needs" 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Search size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Title Verification</h3>
            <p className="text-muted-foreground text-sm mb-4">Thorough verification of property title deeds and ownership history to ensure clear title.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Title Search (30 years)</li>
              <li className="flex items-center gap-2">✓ Ownership Verification</li>
              <li className="flex items-center gap-2">✓ Encumbrance Check</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <FileCheck size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Documentation</h3>
            <p className="text-muted-foreground text-sm mb-4">Complete documentation support for sale deeds, agreements, and registration.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Sale Deed Drafting</li>
              <li className="flex items-center gap-2">✓ Agreement Review</li>
              <li className="flex items-center gap-2">✓ Registration Support</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">RERA Compliance</h3>
            <p className="text-muted-foreground text-sm mb-4">Ensure all transactions comply with RERA regulations and statutory requirements.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ RERA Registration Check</li>
              <li className="flex items-center gap-2">✓ Compliance Verification</li>
              <li className="flex items-center gap-2">✓ Statutory Approvals</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Scale size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Dispute Resolution</h3>
            <p className="text-muted-foreground text-sm mb-4">Expert legal representation for property disputes and litigation matters.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Property Disputes</li>
              <li className="flex items-center gap-2">✓ Tenant Issues</li>
              <li className="flex items-center gap-2">✓ Legal Notices</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <FileCheck size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Due Diligence</h3>
            <p className="text-muted-foreground text-sm mb-4">Comprehensive property due diligence for safe and secure transactions.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Legal Report</li>
              <li className="flex items-center gap-2">✓ Risk Assessment</li>
              <li className="flex items-center gap-2">✓ Compliance Check</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Search size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">Legal Opinion</h3>
            <p className="text-muted-foreground text-sm mb-4">Expert legal opinion on property matters from experienced real estate lawyers.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Written Opinion</li>
              <li className="flex items-center gap-2">✓ Risk Analysis</li>
              <li className="flex items-center gap-2">✓ Recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main text-center">
        <SectionHeading 
          title="Why Legal Verification Matters" 
          subtitle="Avoid costly legal issues with proper verification"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Avoid Fraud</h3>
            <p className="text-muted-foreground text-sm">70% of property disputes arise from unclear titles. Our verification protects your investment.</p>
          </div>
          <div className="luxury-card p-8">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Peace of Mind</h3>
            <p className="text-muted-foreground text-sm">Complete legal clarity before you invest. Know exactly what you're buying.</p>
          </div>
          <div className="luxury-card p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-heading text-xl font-semibold mb-3">Save Money</h3>
            <p className="text-muted-foreground text-sm">Prevent costly litigation and legal issues that can arise from improper documentation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <SectionHeading 
          title="Need Legal Assistance?" 
          subtitle="Consult our expert real estate lawyers today"
          center
        />
        <div className="max-w-2xl mx-auto mt-8">
          <a 
            href="tel:+919821090922"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors text-lg"
          >
            <ArrowRight size={20} />
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  </>
);

export default LegalServices;
