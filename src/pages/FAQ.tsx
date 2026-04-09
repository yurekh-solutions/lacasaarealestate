import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  { q: "What areas does Lacasaa Real Estate cover?", a: "We primarily operate in Mumbai's premium Western suburbs and South Mumbai, including Bandra, Khar, Santacruz, Juhu, Worli, BKC, Lower Parel, Andheri, and Nariman Point. We also assist with properties across the broader Mumbai Metropolitan Region." },
  { q: "What types of properties do you deal with?", a: "We handle both residential and commercial properties — from luxury apartments, penthouses, and villas to office spaces, retail shops, showrooms, and warehouses. We also manage redevelopment projects and land transactions." },
  { q: "How do I schedule a property viewing?", a: "You can schedule a viewing by contacting us via phone (+91-9821090922), email (info@lacasaa.in), or through our Contact Us page. Our team typically arranges viewings within 24-48 hours of your request." },
  { q: "Do you charge brokerage fees?", a: "Yes, standard brokerage fees apply as per industry norms. For rentals, it is typically one month's rent. For sales, the brokerage is a percentage of the transaction value. All fees are discussed transparently upfront before any commitment." },
  { q: "Can NRIs buy property through Lacasaa?", a: "Absolutely! We have extensive experience assisting NRI clients with property purchases in Mumbai. We handle everything from property identification to legal documentation, power of attorney coordination, and registration assistance." },
  { q: "What documents are needed to buy a property?", a: "Typically you'll need: PAN card, Aadhaar card, proof of income/employment, bank statements, passport-size photographs, and address proof. For NRIs, additional documents like passport copies and NRE/NRO account details may be required." },
  { q: "Do you help with home loans?", a: "While we don't directly offer financing, we have partnerships with leading banks and financial institutions. We can help connect you with loan officers and assist in preparing the documentation needed for home loan approval." },
  { q: "What is the process for selling my property?", a: "Our selling process includes: property valuation, professional photography, listing across platforms, buyer screening, negotiation, legal documentation, and registration. We handle every step to ensure you get the best value for your property." },
  { q: "Are your listed properties RERA registered?", a: "Yes, all properties that fall under RERA jurisdiction are duly registered. We verify RERA compliance as part of our due diligence process and display registration numbers where applicable." },
  { q: "How can I invest in real estate through Lacasaa?", a: "Our investment advisory team can help you identify high-potential properties based on your budget, risk appetite, and return expectations. We provide market analysis, rental yield projections, and capital appreciation estimates to help you make informed decisions." },
  { q: "Do you manage rental properties?", a: "Yes, we offer property management services for landlords including tenant screening, rent collection, maintenance coordination, and lease renewal management. This is especially useful for NRI landlords." },
  { q: "What makes Lacasaa different from other agents?", a: "Our deep expertise in Mumbai's premium neighborhoods, transparent dealings, end-to-end service, dedicated client management, and a team of seasoned professionals set us apart. We don't just close deals — we build lasting relationships." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEOHead
        title="FAQ | Lacasaa Real Estate - Frequently Asked Questions"
        description="Find answers to common questions about buying, selling, renting, and investing in Mumbai real estate with Lacasaa. NRI investments, brokerage, RERA, and more."
        keywords="real estate faq mumbai, property buying questions, nri property investment, rera mumbai, brokerage fees real estate"
        canonical="https://lacasaarealestate.com/faq"
      />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about working with Lacasaa" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading text-lg font-semibold pr-4">{faq.q}</span>
                  {open === i ? <ChevronUp size={20} className="text-accent flex-shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
