import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Home } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import { newLaunches } from "@/data/properties";
import gallery1 from "@/assets/gallery-1.jpg";

const NewLaunches = () => (
  <>
    <SEOHead
      title="New Property Launches in Mumbai 2026 | Lacasaa Real Estate"
      description="Explore the newest residential and commercial property launches in Mumbai. Be the first to invest in premium projects from top developers."
      keywords="new property launches mumbai, new projects 2026, upcoming properties, pre-launch offers"
      canonical="https://lacasaarealestate.com/new-launches"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery1} alt="New launches" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Calendar size={16} />
          <span className="text-sm font-medium">Just Launched</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          New Property Launches
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Be the first to own a piece of Mumbai's skyline. Exclusive pre-launch offers on premium properties.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-sm opacity-80">New Projects</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">₹2.8 Cr</div>
            <div className="text-sm opacity-80">Starting Price</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-sm opacity-80">Top Developers</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">15%</div>
            <div className="text-sm opacity-80">Pre-launch Discount</div>
          </div>
        </div>
      </div>
    </section>

    {/* Properties */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Latest Launches" 
          subtitle="Exclusive pre-launch and newly launched properties with attractive offers" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newLaunches.map((property) => (
            <div key={property.id} className="luxury-card hover-lift">
              <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="badge-new">New Launch</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin size={14} />
                  <span>{property.location}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{property.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">{property.area}</span>
                  <span className="text-muted-foreground">{property.bedrooms} BHK</span>
                </div>
                {property.amenities && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Enquire Now <ArrowRight size={16} />
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
          title="Get Early Access" 
          subtitle="Register now for exclusive pre-launch pricing and priority selection"
          center
        />
        <div className="max-w-2xl mx-auto mt-8">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors text-lg"
          >
            Schedule a Visit <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NewLaunches;
