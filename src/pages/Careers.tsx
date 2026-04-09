import { useState } from "react";
import { Briefcase, MapPin, Clock, Send, Users, Heart, TrendingUp, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-home.jpg";

const perks = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Accelerate your career with hands-on experience in Mumbai's premium real estate market" },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside seasoned professionals who mentor and inspire" },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible schedules, team outings, and a supportive work environment" },
  { icon: Award, title: "Competitive Pay", desc: "Attractive base salary plus commission structure with performance bonuses" },
];

const openings = [
  { id: 1, title: "Senior Sales Executive - Residential", location: "Bandra West", type: "Full-time", experience: "3-5 years", desc: "Drive residential property sales across Bandra, Khar, and Santacruz. Build client relationships and close deals for luxury apartments and penthouses." },
  { id: 2, title: "Commercial Leasing Manager", location: "BKC / Lower Parel", type: "Full-time", experience: "5-8 years", desc: "Manage commercial leasing operations for office spaces and retail units. Develop relationships with corporate clients and negotiate lease agreements." },
  { id: 3, title: "Digital Marketing Specialist", location: "Bandra West", type: "Full-time", experience: "2-4 years", desc: "Lead our digital marketing efforts across social media, SEO, and paid campaigns. Create compelling property listings and manage our online presence." },
  { id: 4, title: "Property Valuation Analyst", location: "Bandra West", type: "Full-time", experience: "2-3 years", desc: "Conduct property valuations, market analysis, and feasibility studies. Prepare detailed reports for clients on investment potential and pricing strategies." },
  { id: 5, title: "Client Relationship Executive", location: "Bandra West", type: "Full-time", experience: "1-3 years", desc: "Manage client communications, schedule property viewings, and ensure excellent customer experience throughout the transaction process." },
  { id: 6, title: "Intern - Real Estate Operations", location: "Bandra West", type: "Internship", experience: "Freshers", desc: "Learn the fundamentals of real estate operations. Assist with property research, client coordination, and marketing activities. Great opportunity for graduates." },
];

const Careers = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application! We'll review and get back to you soon.");
    setForm({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Careers | Lacasaa Real Estate - Join Our Team in Mumbai"
        description="Join Lacasaa Real Estate and build a rewarding career in Mumbai's premium property market. Explore current openings in sales, marketing, leasing, and more."
        keywords="real estate jobs mumbai, property sales career, lacasaa careers, real estate internship, bandra jobs"
        canonical="https://lacasaarealestate.com/careers"
      />

      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Careers at Lacasaa" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-deep-brown/70" />
        </div>
        <div className="relative container-main text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-4">Join Our Team</h1>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">Build your career with Mumbai's leading luxury real estate firm</p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading title="Why Work With Us" subtitle="At Lacasaa, we invest in our people" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="glass-card p-6 text-center hover-lift">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <p.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeading title="Current Openings" subtitle="Explore roles that match your expertise" />
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.id} className="glass-card p-6 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.experience}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{job.desc}</p>
                  </div>
                  <a href="#apply" className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding">
        <div className="container-main max-w-2xl">
          <SectionHeading title="Apply Now" subtitle="Send us your details and we'll get back to you" />
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none" required />
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none" required />
              </div>
              <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none" required>
                <option value="">Select Position</option>
                {openings.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
              </select>
              <textarea placeholder="Tell us about yourself and why you'd be a great fit..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none resize-none" required />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2">
                <Send size={16} /> Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
