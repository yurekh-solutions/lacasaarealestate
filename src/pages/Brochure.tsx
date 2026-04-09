import { FileDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const Brochure = () => (
  <>
    <SEOHead
      title="Brochure | Lacasaa Real Estate - Download Our Property Catalog"
      description="Download the Lacasaa Real Estate brochure. Explore our complete portfolio of luxury residential and commercial properties in Mumbai."
      keywords="lacasaa brochure, property brochure mumbai, real estate catalog, lacasaa portfolio"
      canonical="https://lacasaarealestate.com/brochure"
    />

    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-main text-center">
        <SectionHeading title="Our Brochure" subtitle="Explore our complete property portfolio" />
        <div className="glass-card max-w-lg mx-auto p-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <FileDown size={36} className="text-accent" />
          </div>
          <h3 className="font-heading text-2xl font-semibold mb-3">Lacasaa Property Catalog</h3>
          <p className="text-muted-foreground text-sm mb-8">Get a comprehensive overview of our residential and commercial offerings across Mumbai's premium locations.</p>
          <a
            href="https://lacasaarealestate.com/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <FileDown size={18} /> Download Brochure
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Brochure;
