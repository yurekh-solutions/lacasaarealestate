import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import { residentialProperties } from "@/data/properties";
import heroImage from "@/assets/hero-home.jpg";

const Residential = () => (
  <>
    <SEOHead
      title="Residential Properties | Lacasaa - Luxury Flats & Apartments in Mumbai"
      description="Explore premium residential properties in Mumbai - luxury flats, apartments & penthouses in Bandra, Khar, Santacruz, Juhu & Worli. Find your dream home with Lacasaa."
      keywords="residential property mumbai, luxury flats bandra, apartments khar, penthouse juhu, 3 bhk mumbai, 4 bhk bandra, property for sale mumbai"
      canonical="https://lacasaarealestate.com/residential"
    />

    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Residential Properties" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Welcome to Residential</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Lacasaa specializes in curating premium residential properties across Mumbai's most coveted neighborhoods.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Our Residential Listings" subtitle="Handpicked luxury homes for discerning buyers" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {residentialProperties.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Residential;
