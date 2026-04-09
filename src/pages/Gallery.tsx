import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import interiorBanner from "@/assets/interior-banner.jpg";
import heroHome from "@/assets/hero-home.jpg";

const categories = ["All", "Residential", "Commercial", "Interiors", "Amenities"];

const images = [
  { src: gallery1, category: "Residential", title: "Grand Lobby - Bandra West" },
  { src: gallery2, category: "Amenities", title: "Infinity Pool - Juhu Project" },
  { src: gallery3, category: "Interiors", title: "Master Bedroom - Khar Villa" },
  { src: gallery4, category: "Amenities", title: "Fitness Center - Worli Tower" },
  { src: gallery5, category: "Interiors", title: "Luxury Bathroom - Santacruz" },
  { src: gallery6, category: "Commercial", title: "Executive Office - BKC" },
  { src: property1, category: "Interiors", title: "Living Room - Sea View Apartment" },
  { src: property2, category: "Interiors", title: "Kitchen & Dining - Penthouse" },
  { src: property3, category: "Commercial", title: "Modern Workspace - Lower Parel" },
  { src: property4, category: "Residential", title: "Evening View - Premium Tower" },
  { src: interiorBanner, category: "Interiors", title: "Design Showroom" },
  { src: heroHome, category: "Residential", title: "Luxury Residence - Bandra" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <SEOHead
        title="Gallery | Lacasaa Real Estate - Property Photos & Projects"
        description="Browse our gallery of luxury residential & commercial properties in Mumbai. See stunning interiors, amenities, and architectural photography from Lacasaa projects."
        keywords="property gallery mumbai, luxury apartment photos, real estate gallery bandra, interior design mumbai"
        canonical="https://lacasaarealestate.com/gallery"
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading title="Our Gallery" subtitle="Explore our portfolio of premium properties and interiors" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <p className="text-warm-white font-heading text-lg font-semibold">{img.title}</p>
                    <p className="text-warm-white/70 text-xs">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-deep-brown/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-warm-white text-3xl font-light hover:text-gold-light">&times;</button>
          <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="max-w-full max-h-[85vh] rounded-xl object-contain" />
          <p className="absolute bottom-8 text-warm-white font-heading text-xl">{filtered[lightbox].title}</p>
        </div>
      )}
    </>
  );
};

export default Gallery;
