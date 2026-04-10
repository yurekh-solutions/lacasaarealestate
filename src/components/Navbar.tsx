import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo2.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Residential", path: "/residential" },
  { label: "Commercial", path: "/commercial" },
  // { label: "New Launches", path: "/new-launches" },
  // { label: "Penthouses", path: "/luxury-penthouses" },
  { label: "Services", path: "/services" },
  // { label: "Investment", path: "/investment" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-deep-brown to-primary text-warm-white text-sm py-2 px-4">
        <div className="container-main flex justify-between items-center flex-wrap gap-2">
          <a href="tel:+919821090922" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
            <Phone size={14} /> +91 - 9821090922
          </a>
          <a href="mailto:Mazhar@lacasaarealestate.com" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
            <Mail size={14} /> Mazhar@lacasaarealestate.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-nav sticky top-0 z-50 shadow-soft">
        <div className="container-main flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src={logo} alt="Lacasaa Real Estate" className="h-12 sm:h-14 lg:h-16 w-auto drop-shadow-lg" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl lg:text-2xl font-bold text-gradient">Lacasaa</h1>
              <p className="text-xs text-muted-foreground -mt-1">Real Estate</p>
            </div>
          </Link>

          {/* Desktop Navigation - Wrapped */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end flex-1 ml-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase rounded-lg transition-all duration-300 whitespace-nowrap ${
                  pathname === l.path
                    ? "bg-gradient-to-r from-accent to-primary text-warm-white shadow-lg"
                    : "text-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground neu-button" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden glass-panel border-t border-glass-border animate-fade-in mx-4 mb-4 rounded-2xl shadow-elegant">
            <div className="flex flex-col py-4 px-6 gap-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-xl transition-all ${
                    pathname === l.path
                      ? "bg-gradient-to-r from-accent to-primary text-warm-white shadow-lg"
                      : "text-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
