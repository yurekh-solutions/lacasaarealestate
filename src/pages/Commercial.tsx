import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import { commercialProperties } from "@/data/properties";
import heroImage from "@/assets/hero-home.jpg";

const Commercial = () => (
  <>
    <SEOHead
      title="Commercial Properties | Lacasaa - Office & Retail Spaces in Mumbai"
      description="Find premium commercial properties in Mumbai - office spaces, retail shops, showrooms & warehouses in BKC, Bandra, Worli, Andheri & Lower Parel."
      keywords="commercial property mumbai, office space BKC, retail shop bandra, showroom mumbai, commercial rent mumbai, office for rent worli"
      canonical="https://lacasaarealestate.com/commercial"
    />

    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Commercial Properties" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Welcome to Commercial</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Lacasaa specializes in premium commercial spaces for businesses of all sizes.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Our Commercial Listings" subtitle="Prime business locations across Mumbai" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialProperties.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Commercial;
