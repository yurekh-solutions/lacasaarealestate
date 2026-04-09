import { Star, Quote } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import teamPlaceholder from "@/assets/team-placeholder.jpg";

const testimonials = [
  { name: "Rajesh Mehta", role: "Property Investor", rating: 5, text: "Lacasaa made my property investment journey incredibly smooth. Their market knowledge of Bandra and Khar is unmatched. Mazhar and the team helped me find a 3 BHK in Bandra West that has already appreciated 20% in value. Highly recommend their services!" },
  { name: "Priya Sharma", role: "Homeowner", rating: 5, text: "We were looking for our dream home in Juhu and the Lacasaa team went above and beyond. Gurbani personally showed us multiple options and helped us negotiate the best deal. The entire buying process was transparent and hassle-free." },
  { name: "Arjun Kapoor", role: "Business Owner", rating: 5, text: "Finding the right commercial space in BKC was crucial for our business. Lacasaa understood our requirements perfectly and presented us with options that were within budget and ideal for our operations. Their commercial leasing expertise is top-notch." },
  { name: "Sneha Desai", role: "NRI Investor", rating: 5, text: "As an NRI, investing in Mumbai real estate seemed daunting. But Lacasaa's investment advisory service made it effortless. They handled everything from property identification to legal documentation. I now own two properties in Santacruz and Worli." },
  { name: "Mohammad Khan", role: "Tenant", rating: 5, text: "I needed a premium rental in Khar on short notice for my family's relocation. Vibhuti from Lacasaa arranged viewings within 24 hours and we secured a beautiful sea-facing apartment within a week. Their responsiveness is remarkable." },
  { name: "Anita Joshi", role: "Society Committee Member", rating: 5, text: "Our housing society in Bandra was looking for a reliable partner for our redevelopment project. Lacasaa's expertise in navigating regulatory requirements and builder negotiations was invaluable. They truly care about stakeholder interests." },
  { name: "Vikram Singh", role: "First-time Buyer", rating: 4, text: "As a first-time buyer, I had so many questions and concerns. The Lacasaa team, especially Sufiyan, patiently guided me through every step. They helped me understand the market, evaluate properties, and make an informed decision. Great experience overall." },
  { name: "Fatima Shaikh", role: "Landlord", rating: 5, text: "I've been using Lacasaa's services to lease my commercial properties in Andheri for over 3 years. They consistently find quality tenants, handle all documentation, and ensure timely rent collection. A truly professional outfit." },
];

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
];

const Testimonials = () => (
  <>
    <SEOHead
      title="Testimonials | Lacasaa Real Estate - Client Reviews & Success Stories"
      description="Read what our clients say about Lacasaa Real Estate. Trusted by 1000+ happy clients across Mumbai for residential, commercial, and investment properties."
      keywords="lacasaa reviews, real estate testimonials mumbai, client feedback, property agent reviews bandra"
      canonical="https://lacasaarealestate.com/testimonials"
    />

    {/* Stats */}
    <section className="section-padding bg-deep-brown">
      <div className="container-main">
        <h1 className="font-heading text-4xl sm:text-5xl text-warm-white font-semibold text-center mb-12">What Our Clients Say</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl lg:text-5xl text-gold-light font-bold mb-2">{s.value}</p>
              <p className="text-warm-white/70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Client Testimonials" subtitle="Real stories from real clients" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 hover-lift">
              <Quote size={28} className="text-accent/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-4 border-t border-border pt-4">
                <img src={teamPlaceholder} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-heading font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
