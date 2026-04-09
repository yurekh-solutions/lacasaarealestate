import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, DollarSign, Shield, BarChart3 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery4 from "@/assets/gallery-4.jpg";

const Investment = () => (
  <>
    <SEOHead
      title="Real Estate Investment Opportunities Mumbai | High ROI Properties | Lacasaa"
      description="Discover lucrative real estate investment opportunities in Mumbai. Expert guidance on properties with high ROI, rental yields, and capital appreciation."
      keywords="real estate investment mumbai, high roi properties, property investment guide, rental yield, capital appreciation"
      canonical="https://lacasaarealestate.com/investment"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery4} alt="Investment opportunities" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <TrendingUp size={16} />
          <span className="text-sm font-medium">Smart Investments</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Investment Opportunities
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Maximize your returns with Mumbai's most promising real estate investments. Expert guidance for portfolio growth.
        </p>
      </div>
    </section>

    {/* Investment Highlights */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">12-18%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">₹500 Cr+</div>
            <div className="text-sm opacity-80">Investments Facilitated</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Happy Investors</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">8-10%</div>
            <div className="text-sm opacity-80">Rental Yields</div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Invest */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Why Invest in Mumbai Real Estate?" 
          subtitle="Mumbai offers unmatched growth potential for property investors" 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="luxury-card p-6 hover-lift">
            <div className="w-14 h-14 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp size={28} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Capital Appreciation</h3>
            <p className="text-muted-foreground text-sm">Mumbai properties have shown consistent 10-15% annual appreciation over the past decade.</p>
          </div>
          <div className="luxury-card p-6 hover-lift">
            <div className="w-14 h-14 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <DollarSign size={28} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Rental Income</h3>
            <p className="text-muted-foreground text-sm">High demand ensures steady rental income with yields of 8-10% in prime locations.</p>
          </div>
          <div className="luxury-card p-6 hover-lift">
            <div className="w-14 h-14 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield size={28} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Safe Investment</h3>
            <p className="text-muted-foreground text-sm">Real estate remains one of the safest and most stable investment avenues in India.</p>
          </div>
          <div className="luxury-card p-6 hover-lift">
            <div className="w-14 h-14 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <BarChart3 size={28} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Tax Benefits</h3>
            <p className="text-muted-foreground text-sm">Avail significant tax deductions on home loans under Section 80C and 24(b).</p>
          </div>
        </div>
      </div>
    </section>

    {/* Investment Strategies */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="Investment Strategies" 
          subtitle="Choose the investment approach that aligns with your financial goals"
          center
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-bold uppercase">Short Term</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Pre-Launch Properties</h3>
            <p className="text-muted-foreground mb-6">Invest in pre-launch projects and enjoy 15-25% appreciation before possession.</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-center gap-2">✓ Lower entry price</li>
              <li className="flex items-center gap-2">✓ High appreciation potential</li>
              <li className="flex items-center gap-2">✓ Flexible payment plans</li>
            </ul>
            <Link to="/new-launches" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              Explore New Launches <ArrowRight size={16} />
            </Link>
          </div>
          <div className="luxury-card p-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-bold uppercase">Medium Term</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Rental Properties</h3>
            <p className="text-muted-foreground mb-6">Generate consistent monthly income with high-demand rental properties.</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-center gap-2">✓ Steady cash flow</li>
              <li className="flex items-center gap-2">✓ Property appreciation</li>
              <li className="flex items-center gap-2">✓ Tax advantages</li>
            </ul>
            <Link to="/residential" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              View Properties <ArrowRight size={16} />
            </Link>
          </div>
          <div className="luxury-card p-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-bold uppercase">Long Term</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Commercial Spaces</h3>
            <p className="text-muted-foreground mb-6">Higher returns with commercial properties and long-term leases.</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-center gap-2">✓ Higher rental yields</li>
              <li className="flex items-center gap-2">✓ Longer lease terms</li>
              <li className="flex items-center gap-2">✓ Corporate tenants</li>
            </ul>
            <Link to="/commercial" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
              Explore Commercial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <SectionHeading 
          title="Start Your Investment Journey" 
          subtitle="Our investment advisors will help you build a profitable property portfolio"
          center
        />
        <div className="max-w-2xl mx-auto mt-8">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors text-lg"
          >
            Consult Our Experts <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Investment;
