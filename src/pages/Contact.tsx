import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'property' | 'nri'>('general');
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "",
    message: "", 
    propertyType: "",
    budget: "",
    gdpr: false 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Hi, I'm ${form.name}. ${form.subject ? 'Subject: ' + form.subject + '. ' : ''}${form.message} ${form.propertyType ? 'Property Type: ' + form.propertyType + '. ' : ''}${form.budget ? 'Budget: ' + form.budget + '. ' : ''}Phone: ${form.phone}, Email: ${form.email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919821090922?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setForm({ name: "", email: "", phone: "", subject: "", message: "", propertyType: "", budget: "", gdpr: false });
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Lacasaa Real Estate - Get in Touch"
        description="Contact Lacasaa Real Estate for premium property inquiries in Mumbai. Visit us at Bandra West or call +91-9821090922."
        keywords="contact lacasaa, mumbai real estate contact, bandra property agent, property inquiry mumbai"
        canonical="https://lacasaarealestate.com/contact"
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
        <div className="container-main text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
            Get in Touch
          </h1>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Ready to find your dream property? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="neu-flat p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-warm-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">Ascension House, Ground Floor, Flat no 1 Boran road, Hill Rd, Bandra West</p>
                  </div>
                </div>
              </div>
              
              <div className="neu-flat p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-warm-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
                    <a href="tel:+919821090922" className="text-accent text-sm font-medium hover:underline">+91 - 9821090922</a>
                    <p className="text-muted-foreground text-xs mt-1">Mon-Sat: 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="neu-flat p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-warm-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
                    <a href="mailto:Mazhar@lacasaarealestate.com" className="text-accent text-sm font-medium hover:underline">Mazhar@lacasaarealestate.com</a>
                    <p className="text-muted-foreground text-xs mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="neu-flat p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-warm-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday - Saturday: 10 AM - 7 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form with Tabs */}
            <div className="lg:col-span-2">
              <div className="glass-card-premium p-8">
                <SectionHeading title="Send us a Message" center={false} />
                
                {/* Tabs */}
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={activeTab === 'general' ? 'tab-button-active' : 'tab-button'}
                  >
                    <User size={16} className="inline mr-2" />
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('property')}
                    className={activeTab === 'property' ? 'tab-button-active' : 'tab-button'}
                  >
                    <MessageSquare size={16} className="inline mr-2" />
                    Property Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('nri')}
                    className={activeTab === 'nri' ? 'tab-button-active' : 'tab-button'}
                  >
                    🌍 NRI Services
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="glass-input w-full" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="glass-input w-full" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="glass-input w-full" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input type="text" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className="glass-input w-full" placeholder="Property Inquiry" />
                    </div>
                  </div>

                  {activeTab === 'property' && (
                    <div className="grid md:grid-cols-2 gap-6 p-6 neu-inset rounded-2xl">
                      <div>
                        <label className="block text-sm font-medium mb-2">Property Type</label>
                        <select value={form.propertyType} onChange={(e) => setForm({...form, propertyType: e.target.value})} className="glass-input w-full">
                          <option value="">Select Type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="penthouse">Penthouse</option>
                          <option value="new-launch">New Launch</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <select value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})} className="glass-input w-full">
                          <option value="">Select Budget</option>
                          <option value="1-2cr">₹1 Cr - ₹2 Cr</option>
                          <option value="2-5cr">₹2 Cr - ₹5 Cr</option>
                          <option value="5-10cr">₹5 Cr - ₹10 Cr</option>
                          <option value="10cr+">₹10 Cr+</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeTab === 'nri' && (
                    <div className="p-6 neu-inset rounded-2xl bg-blue-50/30">
                      <p className="text-sm text-muted-foreground mb-4">
                        🌍 Interested in investing from abroad? We provide complete NRI services including remote purchase, legal assistance, and property management.
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="glass-input w-full resize-none" placeholder="Tell us about your requirements..." />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" checked={form.gdpr} onChange={(e) => setForm({...form, gdpr: e.target.checked})} className="mt-1 w-4 h-4 rounded border-glass-border text-accent focus:ring-accent" required />
                    <label className="text-sm text-muted-foreground">
                      I agree to receive communications from Lacasaa Real Estate. I understand I can unsubscribe at any time.
                    </label>
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-warm-white py-4 rounded-xl text-base font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </button>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-3">Or contact us directly</p>
                    <a 
                      href="https://wa.me/919821090922?text=Hi,%20I'm%20interested%20in%20your%20properties" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-main">
          <SectionHeading title="Find Us Here" center />
          <div className="mt-8 rounded-3xl overflow-hidden shadow-elegant neu-flat">
            <iframe
              title="Lacasaa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1!2d72.8347!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE1LjgiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
