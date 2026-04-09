import { useParams, Link, useNavigate } from "react-router-dom";
import { Bath, BedDouble, Maximize, MapPin, ArrowLeft, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { residentialProperties, commercialProperties, newLaunches, luxuryPenthouses } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const propertyId = parseInt(id || "0");
  
  // Find property across all arrays
  const allProperties = [...residentialProperties, ...commercialProperties, ...newLaunches, ...luxuryPenthouses];
  const property = allProperties.find(p => p.id === propertyId);
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <Link to="/" className="text-accent hover:underline">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in ${property.title} (${property.location}). Price: ₹${property.price}. ${form.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919821090922?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title={`${property.title} | Lacasaa Real Estate`}
        description={`${property.title} in ${property.location}. ${property.bedrooms} BHK, ${property.sqft} sqft. Price: ₹${property.price}`}
        keywords={`${property.title}, ${property.location}, real estate mumbai`}
        canonical={`https://lacasaarealestate.com/property/${property.id}`}
      />

      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-warm-white/80 backdrop-blur-lg border-b border-glass-border">
        <div className="container-main py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back to Listings
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-deep-brown/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-main pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {property.status === 'new-launch' && (
              <span className="badge-new shadow-lg">New Launch</span>
            )}
            {property.status === 'featured' && (
              <span className="badge-featured shadow-lg">Featured</span>
            )}
            {property.builder && (
              <span className="bg-warm-white/90 backdrop-blur-xl text-foreground text-xs font-medium px-4 py-2 rounded-full shadow-lg">
                {property.builder}
              </span>
            )}
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-warm-white mb-3">{property.title}</h1>
          <div className="flex items-center gap-2 text-warm-white/90 text-lg">
            <MapPin size={20} />
            <span>{property.location}</span>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="glass-card-premium p-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 neu-inset rounded-xl">
                  <BedDouble size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">Bedrooms</p>
                </div>
                <div className="text-center p-4 neu-inset rounded-xl">
                  <Bath size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">Bathrooms</p>
                </div>
                <div className="text-center p-4 neu-inset rounded-xl">
                  <Maximize size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{property.sqft}</p>
                  <p className="text-xs text-muted-foreground">Sq Ft</p>
                </div>
              </div>

              {/* Description */}
              <div className="glass-card-premium p-8">
                <h2 className="font-heading text-2xl font-bold mb-4">Property Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{property.description || `Discover ${property.title}, a premium ${property.bedrooms} BHK property in ${property.location}. This ${property.sqft} sqft property offers modern amenities and excellent connectivity.`}</p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {(property.amenities || ["Premium Location", "Modern Design", "24/7 Security", "Power Backup"]).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 neu-inset rounded-lg">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Area & Type */}
              <div className="glass-card-premium p-8">
                <h2 className="font-heading text-2xl font-bold mb-4">Property Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 neu-inset rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Property Type</p>
                    <p className="font-semibold text-foreground capitalize">{property.type || 'Residential'}</p>
                  </div>
                  <div className="p-4 neu-inset rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Area</p>
                    <p className="font-semibold text-foreground">{property.area}</p>
                  </div>
                  <div className="p-4 neu-inset rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-foreground">{property.location}</p>
                  </div>
                  <div className="p-4 neu-inset rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold text-foreground capitalize">{property.status?.replace('-', ' ') || 'Ready'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="glass-card-premium p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Starting Price</p>
                  <p className="font-heading text-4xl font-bold text-gradient mb-2">₹ {property.price}</p>
                  <p className="text-xs text-muted-foreground">{property.area}</p>
                </div>

                {/* Contact Form */}
                <div className="glass-card-premium p-6">
                  <h3 className="font-heading text-xl font-bold mb-6">Interested? Contact Us</h3>
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="glass-input w-full"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="glass-input w-full"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        className="glass-input w-full min-h-[100px]"
                        placeholder="I'm interested in this property..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-warm-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <MessageCircle size={20} />
                      Enquire via WhatsApp
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-glass-border">
                    <p className="text-xs text-muted-foreground text-center mb-3">Or contact directly</p>
                    <div className="space-y-3">
                      <a
                        href="tel:+919821090922"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-warm-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        <Phone size={18} />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
