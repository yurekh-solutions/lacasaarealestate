import { MapPin, ArrowRight, TrendingUp, Home, Building2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-home.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const areas = [
  {
    name: "Bandra West",
    image: property1,
    tagline: "The Queen of Suburbs",
    avgPrice: "₹45,000 - ₹85,000/sqft",
    highlights: ["Bollywood celebrity hub", "Sea-facing promenades", "Vibrant nightlife & cafes", "Excellent connectivity via Bandra-Worli Sea Link"],
    description: "Bandra West is Mumbai's most iconic neighborhood, blending cosmopolitan charm with old-world elegance. From the bustling Linking Road to the serene Bandstand promenade, it offers an unparalleled lifestyle. Home to some of Mumbai's finest restaurants, boutiques, and cultural landmarks, Bandra West remains the gold standard for luxury living.",
    residential: 45,
    commercial: 12,
  },
  {
    name: "Khar West",
    image: property2,
    tagline: "The Quiet Luxury Enclave",
    avgPrice: "₹40,000 - ₹70,000/sqft",
    highlights: ["Tree-lined streets", "Premium boutique shopping", "Close to Bandra amenities", "Peaceful residential character"],
    description: "Khar West offers the best of both worlds — proximity to Bandra's vibrancy while maintaining its own quiet, upscale character. Known for its charming bungalows, tree-lined avenues, and artisanal cafes, Khar West appeals to those who seek luxury without the bustle. It's increasingly popular among young professionals and families.",
    residential: 30,
    commercial: 8,
  },
  {
    name: "Santacruz West",
    image: property3,
    tagline: "The Rising Star",
    avgPrice: "₹35,000 - ₹60,000/sqft",
    highlights: ["Airport proximity", "Rapid infrastructure growth", "Family-friendly neighborhoods", "Excellent schools & hospitals"],
    description: "Santacruz West has emerged as one of Mumbai's most desirable residential areas, offering excellent connectivity and a strong community feel. With proximity to the domestic airport, top schools like St. Joseph's, and a growing number of premium developments, it attracts families and professionals seeking value without compromising on quality.",
    residential: 35,
    commercial: 10,
  },
  {
    name: "Juhu",
    image: property4,
    tagline: "Mumbai's Beach Paradise",
    avgPrice: "₹50,000 - ₹90,000/sqft",
    highlights: ["Iconic Juhu Beach", "Celebrity neighborhood", "Luxury bungalows & penthouses", "ISKCON Temple & cultural spots"],
    description: "Juhu is synonymous with luxury and glamour. Home to Bollywood's biggest stars and business moguls, this beachside neighborhood offers sprawling bungalows, sea-facing penthouses, and an aspirational lifestyle. The famed Juhu Beach, fine dining restaurants, and five-star hotels make it one of Mumbai's most prestigious addresses.",
    residential: 25,
    commercial: 5,
  },
  {
    name: "Worli",
    image: gallery1,
    tagline: "South Mumbai's Modern Hub",
    avgPrice: "₹55,000 - ₹1,00,000/sqft",
    highlights: ["Bandra-Worli Sea Link access", "Ultra-luxury high-rises", "Corporate headquarters", "Worli Sea Face promenade"],
    description: "Worli represents the pinnacle of modern Mumbai living. With the Bandra-Worli Sea Link providing seamless connectivity, this area has transformed into a hub for ultra-luxury residences and corporate offices. The Worli Sea Face offers stunning sunset views, and developments here feature world-class amenities rivaling international standards.",
    residential: 20,
    commercial: 15,
  },
];

const AreasWeServe = () => (
  <>
    <SEOHead
      title="Areas We Serve | Lacasaa - Bandra, Khar, Juhu, Santacruz, Worli"
      description="Explore Mumbai's premium neighborhoods with Lacasaa Real Estate. Detailed guides for Bandra, Khar, Santacruz, Juhu & Worli — property prices, highlights, and listings."
      keywords="bandra real estate, khar property, juhu apartments, santacruz flats, worli luxury, mumbai neighborhoods, property rates mumbai"
      canonical="https://lacasaarealestate.com/areas"
    />

    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Areas We Serve" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Areas We Serve</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Discover Mumbai's most prestigious neighborhoods through our expert lens</p>
      </div>
    </section>

    {/* Areas */}
    <section className="section-padding">
      <div className="container-main space-y-16">
        {areas.map((area, i) => (
          <div key={area.name} className={`glass-card overflow-hidden grid lg:grid-cols-2 gap-0 hover-lift ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px] lg:[direction:ltr]">
              <img src={area.image} alt={area.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 to-transparent flex items-end p-6">
                <div>
                  <span className="text-gold-light text-sm font-medium">{area.tagline}</span>
                  <h2 className="font-heading text-3xl text-warm-white font-semibold">{area.name}</h2>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-10 lg:[direction:ltr]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm font-medium text-accent">{area.avgPrice}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{area.description}</p>
              <ul className="space-y-2 mb-6">
                {area.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star size={12} className="text-gold flex-shrink-0" /> {h}
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Home size={16} className="text-accent" />
                  <span><strong>{area.residential}+</strong> Residential</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 size={16} className="text-accent" />
                  <span><strong>{area.commercial}+</strong> Commercial</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all text-sm">
                Explore Properties <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Market Summary */}
    <section className="section-padding bg-deep-brown">
      <div className="container-main text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-warm-white font-semibold mb-4">Mumbai Market at a Glance</h2>
        <p className="text-warm-white/70 mb-12 max-w-xl mx-auto">Real-time market insights from our team of experts</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, value: "12%", label: "Avg. Annual Appreciation" },
            { icon: Home, value: "155+", label: "Active Listings" },
            { icon: Building2, value: "50+", label: "Commercial Spaces" },
            { icon: MapPin, value: "5", label: "Premium Neighborhoods" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon size={28} className="text-gold-light mx-auto mb-3" />
              <p className="font-heading text-3xl lg:text-4xl text-warm-white font-bold mb-1">{s.value}</p>
              <p className="text-warm-white/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AreasWeServe;
