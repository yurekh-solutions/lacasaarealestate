import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Palette, Ruler, CheckCircle, Home } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery6 from "@/assets/gallery-6.jpg";
import interiorBanner from "@/assets/interior-banner.jpg";

const InteriorDesign = () => (
  <>
    <SEOHead
      title="Interior Design Services Mumbai | Home Interiors | Lacasaa Real Estate"
      description="Transform your space with our premium interior design services. 300+ verified interior brands, custom designs, and expert execution."
      keywords="interior design mumbai, home interiors, office interiors, custom furniture, interior decoration"
      canonical="https://lacasaarealestate.com/interior-design"
    />

    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-30">
        <img src={interiorBanner} alt="Interior design" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Palette size={16} />
          <span className="text-sm font-medium">300+ Verified Brands</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Interior Design Services
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Transform your property into a masterpiece. Compare costs instantly and choose from top verified interior brands.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">300+</div>
            <div className="text-sm opacity-80">Verified Brands</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">45 Days</div>
            <div className="text-sm opacity-80">Average Delivery</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">5 Year</div>
            <div className="text-sm opacity-80">Warranty</div>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Our Interior Services" 
          subtitle="Complete interior solutions for residential and commercial spaces" 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Home size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Residential Interiors</h3>
            <p className="text-muted-foreground mb-6">Complete home interiors including modular kitchen, wardrobes, living room, and bedrooms.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Modular Kitchen</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Wardrobes & Storage</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Living Room Design</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Bedroom Interiors</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Paintbrush size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Commercial Interiors</h3>
            <p className="text-muted-foreground mb-6">Professional office and retail space interiors that boost productivity and impress clients.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Office Spaces</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Retail Showrooms</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Restaurants & Cafes</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Co-working Spaces</li>
            </ul>
          </div>
          <div className="luxury-card p-8 hover-lift">
            <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Ruler size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Custom Furniture</h3>
            <p className="text-muted-foreground mb-6">Bespoke furniture designed and crafted to perfectly fit your space and style.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Custom Sofas</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Dining Sets</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Study Tables</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> TV Units</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="How It Works" 
          subtitle="Simple 4-step process to transform your space"
          center
        />
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center">
              <Palette size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Consultation</h3>
            <p className="text-muted-foreground text-sm">Share your requirements and budget with our designers</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center">
              <Ruler size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Design</h3>
            <p className="text-muted-foreground text-sm">Get 3D designs and material options to choose from</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center">
              <Paintbrush size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Execution</h3>
            <p className="text-muted-foreground text-sm">Expert craftsmen bring your design to life</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center">
              <CheckCircle size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Delivery</h3>
            <p className="text-muted-foreground text-sm">Quality check and handover with 5-year warranty</p>
          </div>
        </div>
      </div>
    </section>

    {/* Cost Estimator CTA */}
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img src={interiorBanner} alt="Interior design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-brown/80 backdrop-blur-sm" />
      </div>
      <div className="relative container-main text-center px-4">
        <h2 className="font-heading text-3xl sm:text-4xl text-warm-white font-semibold mb-4">
          Calculate Your Interiors Cost Instantly
        </h2>
        <p className="text-warm-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Use our advanced estimator to get an accurate cost breakdown for your dream interiors
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors text-lg">
          Get Free Quote <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>
);

export default InteriorDesign;
