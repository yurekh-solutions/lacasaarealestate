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
  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
    {/* Image Section */}
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
        loading="lazy" 
      />
      
      {/* Price Badge - Top Left */}
      <div className="absolute top-4 left-4">
        <div className="bg-gradient-to-r from-accent to-primary text-warm-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
          ₹ {price}
        </div>
      </div>
      
      {/* Status Badge - Top Left, below price */}
      {(status === 'new-launch' || status === 'featured') && (
        <div className="absolute top-4 left-4 mt-14">
          {status === 'new-launch' && (
            <span className="bg-gradient-to-r from-amber-500 to-gold text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
              New Launch
            </span>
          )}
          {status === 'featured' && (
            <span className="bg-gradient-to-r from-accent to-primary text-warm-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
              Featured
            </span>
          )}
        </div>
      )}
    </div>
    
    {/* Content Section */}
    <div className="p-5">
      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
      
      {/* Location */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
        <MapPin size={14} className="text-accent flex-shrink-0" />
        <span className="font-medium">{location}</span>
      </div>
      
      {/* CTA Button - Full Width */}
      <Link 
        to={id ? `/property/${id}` : "/contact"} 
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-warm-white py-3.5 rounded-2xl text-sm font-semibold hover:shadow-xl transition-all duration-300 group-hover:gap-3"
      >
        View Details <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default PropertyCard;
