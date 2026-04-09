import { Link } from "react-router-dom";
import { ArrowRight, Building2, Award, Phone, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { builders } from "@/data/properties";
import gallery3 from "@/assets/gallery-3.jpg";

const Builders = () => (
  <>
    <SEOHead
      title="Top Builders & Developers in Mumbai | Lacasaa Real Estate Partners"
      description="Partner with Mumbai's most trusted real estate developers. We work with top builders like Lodha Group, Oberoi Realty, Runwal Group, and more."
      keywords="top builders mumbai, reputed developers, lodha group, oberoi realty, runwal group, trusted builders"
      canonical="https://lacasaarealestate.com/builders"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery3} alt="Top builders" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Award size={16} />
          <span className="text-sm font-medium">Trusted Partners</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Top Builders & Developers
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          We partner with Mumbai's most reputed developers to bring you quality homes and commercial spaces.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-sm opacity-80">Partner Builders</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">240+</div>
            <div className="text-sm opacity-80">Completed Projects</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-80">RERA Registered</div>
          </div>
        </div>
      </div>
    </section>

    {/* Builders Grid */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Our Builder Partners" 
          subtitle="Collaborating with Mumbai's finest developers for quality construction and timely delivery" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builders.map((builder) => (
            <div key={builder.id} className="luxury-card p-8 hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-warm-white">
                  <Building2 size={32} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{builder.projects}+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">{builder.name}</h3>
              <p className="text-muted-foreground mb-6">{builder.description}</p>
              <div className="space-y-3">
                <Link 
                  to="/contact" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg font-medium hover:bg-gold transition-colors"
                >
                  <Phone size={16} />
                  View Projects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="Why We Partner With The Best" 
          subtitle="Our rigorous selection process ensures quality and reliability"
          center
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Award size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Quality Assurance</h3>
            <p className="text-muted-foreground text-sm">Every builder meets our strict quality standards for construction, materials, and finishes.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Building2 size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Timely Delivery</h3>
            <p className="text-muted-foreground text-sm">We work only with developers who have a proven track record of on-time project completion.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Phone size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">After-Sales Support</h3>
            <p className="text-muted-foreground text-sm">Our builder partners provide excellent post-possession support and maintenance.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <SectionHeading 
          title="Interested in a Specific Builder?" 
          subtitle="Let us connect you with exclusive projects from your preferred developer"
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
          <a 
            href="mailto:Mazhar@lacasaarealestate.com"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Mail size={20} />
            Email Us
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Builders;
