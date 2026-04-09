import { Award, Star, Trophy, Calendar, Building2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { awards } from "@/data/properties";
import gallery3 from "@/assets/gallery-3.jpg";

const Awards = () => (
  <>
    <SEOHead
      title="Awards & Recognition | Lacasaa Real Estate Mumbai"
      description="Recognized as Mumbai's leading real estate consultancy. Multiple awards for excellence in customer service and property dealings."
      keywords="real estate awards mumbai, best property consultant, recognized real estate company, awards lacasaa"
      canonical="https://lacasaarealestate.com/awards"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery3} alt="Awards and recognition" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Trophy size={16} />
          <span className="text-sm font-medium">Award-Winning Service</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Awards & Recognition
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Recognized for excellence in real estate services. Our awards reflect our commitment to quality and customer satisfaction.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">4+</div>
            <div className="text-sm opacity-80">Major Awards</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-sm opacity-80">Certifications</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-80">Years Excellence</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-80">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>

    {/* Awards Timeline */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Our Awards Journey" 
          subtitle="Recognized consistently for excellence in real estate services" 
        />
        <div className="max-w-4xl mx-auto mt-12">
          {awards.map((award, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-accent flex items-center justify-center text-warm-white flex-shrink-0">
                  <Trophy size={28} />
                </div>
                {index < awards.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-accent to-transparent mt-2" />
                )}
              </div>
              <div className="luxury-card p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-accent">{award.year}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-muted-foreground">{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recognition */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="Industry Recognition" 
          subtitle="Trusted by leading organizations and publications"
          center
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="luxury-card p-8 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Star size={40} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">5-Star Rated</h3>
            <p className="text-muted-foreground text-sm">Consistently rated 5 stars by our clients across all major review platforms.</p>
          </div>
          <div className="luxury-card p-8 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Building2 size={40} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">RERA Certified</h3>
            <p className="text-muted-foreground text-sm">Fully registered and compliant with Maharashtra RERA regulations.</p>
          </div>
          <div className="luxury-card p-8 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Award size={40} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">ISO Certified</h3>
            <p className="text-muted-foreground text-sm">Certified for quality management systems and service excellence.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="font-heading text-2xl sm:text-3xl font-semibold mb-6 leading-relaxed">
            "Lacasaa Real Estate has set the gold standard for real estate services in Mumbai. Their professionalism, integrity, and client-first approach are truly commendable."
          </blockquote>
          <div className="flex items-center justify-center gap-2">
            <Star className="text-gold" size={20} fill="currentColor" />
            <Star className="text-gold" size={20} fill="currentColor" />
            <Star className="text-gold" size={20} fill="currentColor" />
            <Star className="text-gold" size={20} fill="currentColor" />
            <Star className="text-gold" size={20} fill="currentColor" />
          </div>
          <p className="text-muted-foreground mt-4">— Mumbai Realty Awards Jury, 2025</p>
        </div>
      </div>
    </section>
  </>
);

export default Awards;
