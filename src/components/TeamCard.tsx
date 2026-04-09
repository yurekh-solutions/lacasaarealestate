import { Mail, Phone } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

const TeamCard = ({ name, role, phone, email, image }: TeamCardProps) => (
  <div className="group relative glass-card-premium p-6 hover-lift overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
      {/* Image with ring effect */}
      <div className="relative w-28 h-28 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary p-1">
          <div className="w-full h-full rounded-full overflow-hidden bg-warm-white">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              loading="lazy" 
            />
          </div>
        </div>
        {/* Status indicator */}
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-warm-white shadow-lg" />
      </div>
      
      {/* Role Badge */}
      <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-3">
        <p className="text-xs text-accent font-semibold tracking-wide">{role}</p>
      </div>
      
      {/* Name */}
      <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{name}</h3>
      
      {/* Contact Info */}
      <div className="space-y-3">
        <a 
          href={`tel:${phone}`} 
          className="flex items-center gap-3 p-3 neu-inset rounded-xl hover:shadow-md transition-all group/link"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover/link:scale-110 transition-transform">
            <Phone size={18} className="text-warm-white" />
          </div>
          <span className="text-sm text-muted-foreground group-hover/link:text-accent transition-colors font-medium">{phone}</span>
        </a>
        
        <a 
          href={`mailto:${email}`} 
          className="flex items-center gap-3 p-3 neu-inset rounded-xl hover:shadow-md transition-all group/link"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover/link:scale-110 transition-transform">
            <Mail size={18} className="text-warm-white" />
          </div>
          <span className="text-xs text-muted-foreground group-hover/link:text-accent transition-colors font-medium truncate">{email}</span>
        </a>
      </div>
    </div>
  </div>
);

export default TeamCard;
