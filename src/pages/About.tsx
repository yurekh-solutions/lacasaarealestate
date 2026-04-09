import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/properties";
import heroImage from "@/assets/hero-home.jpg";

const About = () => (
  <>
    <SEOHead
      title="About Us | Lacasaa Real Estate - Mumbai's Trusted Property Experts"
      description="Meet the Lacasaa team led by Mazhar Dalvi. Premier real estate services in Bandra, Khar, Santacruz, Juhu & Worli. Residential, commercial, redevelopment & investment advisory."
      keywords="lacasaa about, mazhar dalvi, mumbai real estate team, bandra property experts, luxury real estate mumbai"
      canonical="https://lacasaarealestate.com/about"
    />

    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="About Lacasaa" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep-brown/70" />
      </div>
      <div className="relative container-main text-center px-4">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Welcome to Lacasaa</h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Your trusted partner in Mumbai's premium real estate market</p>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <SectionHeading title="Our Story" />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Mazhar Dalvi, the driving force behind Lacasaa Real Estate, is a seasoned entrepreneur with a profound understanding of the real estate landscape. His visionary leadership has propelled Lacasaa Real Estate to the forefront of the market, establishing a reputation for excellence, integrity, and innovation.</p>
          <p>With an unwavering commitment to excellence, Mazhar Dalvi has played a pivotal role in shaping Lacasaa Real Estate into a premier destination for those seeking properties in coveted locations such as Bandra, Khar, Santacruz, Juhu, and Worli. His profound understanding of the real estate landscape, coupled with strategic insights, has positioned Lacasaa Real Estate as a go-to choice for discerning clients.</p>
          <p>Mazhar's vision extends beyond traditional real estate services, encompassing a diverse range of offerings. Lacasaa Real Estate, under his leadership, excels in leasing out both residential and commercial properties, facilitating seamless buying and selling transactions, overseeing redevelopment projects, providing expert guidance on property investments, and managing land lease and sales.</p>
          <p>Known for his hands-on approach and client-centric philosophy, Mazhar Dalvi has built a team of seasoned professionals at Lacasaa Real Estate who share his dedication to delivering exceptional service. With a keen eye for market trends and an innate ability to foresee opportunities, Mazhar ensures that Lacasaa Real Estate remains at the forefront of the industry.</p>
          <p>As you explore Lacasaa Real Estate, guided by Mazhar Dalvi's vision, you'll discover a commitment to personalized solutions, integrity, and a relentless pursuit of excellence. Whether you are a buyer, seller, investor, or developer, Mazhar Dalvi and Lacasaa Real Estate stand ready to turn your real estate aspirations into reality.</p>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading title="Lacasaa Team" subtitle="Meet our dedicated professionals" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
