import { Bath, BedDouble, Maximize, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id?: number;
  title: string;
  price: string;
  area: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  status?: string;
  builder?: string;
}

const PropertyCard = ({ id, title, price, area, location, bedrooms, bathrooms, sqft, image, status }: PropertyCardProps) => (
  <div className="property-card group">
    {/* Image Section */}
    <div className="relative overflow-hidden aspect-[4/3]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        loading="lazy" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
        {status === 'new-launch' && (
          <span className="badge-new shadow-lg">New Launch</span>
        )}
        {status === 'featured' && (
          <span className="badge-featured shadow-lg">Featured</span>
        )}
        <div className="bg-gradient-to-r from-accent to-primary text-warm-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-xl shadow-lg">
          ₹ {price}
        </div>
      </div>
    </div>
    
    {/* Content Section */}
    <div className="p-4 bg-gradient-to-br from-warm-white/90 via-warm-white/70 to-secondary/20 backdrop-blur-xl">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors line-clamp-1">{title}</h3>
      
      {/* Location */}
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
        <MapPin size={12} className="text-accent flex-shrink-0" />
        <span className="line-clamp-1">{location}</span>
      </div>
      
      {/* Features - Compact */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 p-2 neu-inset rounded-lg">
        <span className="flex items-center gap-1"><BedDouble size={14} className="text-accent" /> {bedrooms}</span>
        <span className="flex items-center gap-1"><Bath size={14} className="text-accent" /> {bathrooms}</span>
        <span className="flex items-center gap-1"><Maximize size={14} className="text-accent" /> {sqft}</span>
      </div>
      
      {/* CTA Button */}
      <Link 
        to={id ? `/property/${id}` : "/contact"} 
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-warm-white py-2.5 rounded-xl text-xs font-semibold hover:shadow-lg transition-all duration-300 group-hover:gap-3"
      >
        View Details <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

export default PropertyCard;
