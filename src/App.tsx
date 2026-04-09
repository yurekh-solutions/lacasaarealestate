import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Phone, MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import Brochure from "./pages/Brochure";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import AreasWeServe from "./pages/AreasWeServe";
import Careers from "./pages/Careers";
import PropertyCalculator from "./pages/PropertyCalculator";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import NewLaunches from "./pages/NewLaunches";
import LuxuryPenthouses from "./pages/LuxuryPenthouses";
import Builders from "./pages/Builders";
import Investment from "./pages/Investment";
import HomeLoans from "./pages/HomeLoans";
import InteriorDesign from "./pages/InteriorDesign";
import NRI from "./pages/NRI";
import LegalServices from "./pages/LegalServices";
import Awards from "./pages/Awards";
import PropertyDetail from "./pages/PropertyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/new-launches" element={<NewLaunches />} />
            <Route path="/luxury-penthouses" element={<LuxuryPenthouses />} />
            <Route path="/builders" element={<Builders />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/home-loans" element={<HomeLoans />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/nri-services" element={<NRI />} />
            <Route path="/legal-services" element={<LegalServices />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/areas" element={<AreasWeServe />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/calculator" element={<PropertyCalculator />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Action Buttons - WhatsApp & Call */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* Call Button */}
          <a
            href="tel:+919821090922"
            className="group relative w-14 h-14 bg-gradient-to-r from-accent to-primary rounded-full shadow-elegant flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse"
            aria-label="Call Us"
          >
            <Phone size={24} className="text-warm-white" />
            <span className="absolute right-full mr-3 px-3 py-1 bg-deep-brown text-warm-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Call Now
            </span>
          </a>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919821090922?text=Hi,%20I'm%20interested%20in%20your%20properties"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-elegant flex items-center justify-center hover:scale-110 transition-all duration-300 animate-bounce"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} className="text-warm-white" />
            <span className="absolute right-full mr-3 px-3 py-1 bg-deep-brown text-warm-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              WhatsApp
            </span>
          </a>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
