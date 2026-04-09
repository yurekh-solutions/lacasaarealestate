import { Link } from "react-router-dom";
import { ArrowRight, Star, Crown, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { luxuryPenthouses } from "@/data/properties";
import gallery2 from "@/assets/gallery-2.jpg";

const LuxuryPenthouses = () => (
  <>
    <SEOHead
      title="Luxury Penthouses in Mumbai | Premium Sky Villas | Lacasaa Real Estate"
      description="Discover Mumbai's most exclusive penthouses and sky villas. Ultra-luxury properties with private pools, terraces, and panoramic views."
      keywords="luxury penthouses mumbai, sky villas, premium penthouses, ultra luxury apartments, private pool penthouse"
      canonical="https://lacasaarealestate.com/luxury-penthouses"
    />

    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery2} alt="Luxury penthouses" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Crown size={16} />
          <span className="text-sm font-medium">Ultra Luxury Collection</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Luxury Penthouses
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Experience the pinnacle of luxury living. Exclusive sky villas with breathtaking views and world-class amenities.
        </p>
      </div>
    </section>

    {/* Featured Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-sm opacity-80">Exclusive Penthouses</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">₹12 Cr</div>
            <div className="text-sm opacity-80">Starting Price</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">3800+</div>
            <div className="text-sm opacity-80">Sq Ft Average</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">5★</div>
            <div className="text-sm opacity-80">Luxury Rating</div>
          </div>
        </div>
      </div>
    </section>

    {/* Penthouses */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Ultra-Luxury Collection" 
          subtitle="Handpicked penthouses offering the finest living experience in Mumbai" 
        />
        <div className="space-y-12">
          {luxuryPenthouses.map((penthouse, index) => (
            <div key={penthouse.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:direction-ltr' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src={penthouse.image} 
                    alt={penthouse.title} 
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-gold" size={20} fill="currentColor" />
                      <span className="text-warm-white font-semibold">{penthouse.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:direction-ltr' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 py-1 rounded-full mb-4">
                  <Crown size={14} />
                  <span className="text-xs font-bold uppercase tracking-wide">Penthouse</span>
                </div>
                <h3 className="font-heading text-3xl font-semibold mb-4">{penthouse.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span>{penthouse.location}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{penthouse.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{penthouse.bedrooms}</div>
                    <div className="text-xs text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{penthouse.bathrooms}</div>
                    <div className="text-xs text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{(penthouse.sqft / 1000).toFixed(1)}K</div>
                    <div className="text-xs text-muted-foreground">Sq Ft</div>
                  </div>
                </div>
                {penthouse.amenities && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Premium Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {penthouse.amenities.map((amenity) => (
                        <span key={amenity} className="bg-gradient-to-r from-gold/10 to-accent/10 text-foreground text-xs px-3 py-1.5 rounded-full border border-gold/20">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold transition-colors"
                >
                  Schedule Private Viewing <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main text-center">
        <SectionHeading 
          title="Bespoke Property Search" 
          subtitle="Can't find what you're looking for? We'll help you discover your dream penthouse"
          center
        />
        <div className="max-w-2xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors"
          >
            Contact Our Luxury Team <ArrowRight size={20} />
          </Link>
          <Link 
            to="/residential" 
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default LuxuryPenthouses;
