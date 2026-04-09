import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Globe, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => (
  <footer className="glass-footer relative  ">
    {/* Top accent line */}
    
    <div className="relative container-main section-padding pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Connect */}
        <div className="lg:col-span-1">
         <div className="mb-6 p-6">
  <Link to="/" className="flex items-center gap-3 group">
    
    {/* Logo Container */}
    <div className="bg-white rounded-xl p-2 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img
        src={logo}
        alt="Lacasaa Real Estate"
        className="h-12 w-auto object-contain"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="font-heading text-2xl font-bold text-warm-white">
        Lacasaa
      </h2>
      <p className="text-xs text-warm-white/60 -mt-1">
        Real Estate
      </p>
    </div>

  </Link>
</div>
          <p className="text-sm opacity-70 mb-6 leading-relaxed">
            Your trusted partner for premium properties in Mumbai. Specializing in luxury residential and commercial real estate.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3 items-start group">
              <div className="w-8 h-8 rounded-lg bg-warm-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-warm-white/20 transition-colors">
                <MapPin size={16} className="text-gold-light" />
              </div>
              <p className="opacity-70 text-xs leading-relaxed">Ascension House, Ground Floor, Boran road, Hill Rd, Bandra West</p>
            </div>
            <a href="tel:+919821090922" className="flex gap-3 items-center group hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-warm-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-warm-white/20 transition-colors">
                <Phone size={16} className="text-gold-light" />
              </div>
              <span className="opacity-70 text-xs">+91 - 9821090922</span>
            </a>
            <a href="mailto:Mazhar@lacasaarealestate.com" className="flex gap-3 items-center group hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-warm-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-warm-white/20 transition-colors">
                <Mail size={16} className="text-gold-light" />
              </div>
              <span className="opacity-70 text-xs">Mazhar@lacasaarealestate.com</span>
            </a>
            <a href="https://lacasaarealestate.com" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center group hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-warm-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-warm-white/20 transition-colors">
                <Globe size={16} className="text-gold-light" />
              </div>
              <span className="opacity-70 text-xs">lacasaarealestate.com</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-heading font-semibold mb-6 text-warm-white flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-gold-light to-accent rounded-full"></span>
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <Link to="/" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> About Us
            </Link>
            <Link to="/residential" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Residential
            </Link>
            <Link to="/commercial" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Commercial
            </Link>
            <Link to="/new-launches" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> New Launches
            </Link>
            <Link to="/luxury-penthouses" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Penthouses
            </Link>
            <Link to="/investment" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Investment
            </Link>
            <Link to="/contact" className="flex items-center gap-1 opacity-70 hover:opacity-100 hover:text-gold-light transition-all group">
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-heading font-semibold mb-6 text-warm-white flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-gold-light to-accent rounded-full"></span>
            Services
          </h3>
          <div className="space-y-2 text-xs">
            <Link to="/home-loans" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Home Loans</Link>
            <Link to="/interior-design" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Interior Design</Link>
            <Link to="/nri-services" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">NRI Services</Link>
            <Link to="/legal-services" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Legal Services</Link>
            <Link to="/builders" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Builders</Link>
            <Link to="/areas" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Areas We Serve</Link>
            <Link to="/calculator" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">EMI Calculator</Link>
            <Link to="/brochure" className="block opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Brochure</Link>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-heading font-semibold mb-6 text-warm-white flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-gold-light to-accent rounded-full"></span>
            Locate Us
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-warm-white/10">
            <iframe
              title="Lacasaa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1!2d72.8347!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE1LjgiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative border-t border-warm-white/10 py-6 px-4">
      <div className="container-main flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>© 2026 Lacasaa Real Estate. All Rights Reserved</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold-light transition-colors">Terms & Conditions</Link>
          <Link to="/faq" className="hover:text-gold-light transition-colors">FAQ</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
