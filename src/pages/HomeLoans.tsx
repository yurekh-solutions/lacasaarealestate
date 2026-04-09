import { ArrowRight, Home, Percent, Calculator, FileCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import gallery5 from "@/assets/gallery-5.jpg";

const HomeLoans = () => (
  <>
    <SEOHead
      title="Home Loan Assistance Mumbai | Best Interest Rates | Lacasaa Real Estate"
      description="Get expert home loan assistance with the best interest rates from top banks. We help you navigate the loan process with ease."
      keywords="home loan mumbai, best interest rates, home loan assistance, bank loans, property financing"
      canonical="https://lacasaarealestate.com/home-loans"
    />

    {/* Hero */}
    <section className="relative py-20 bg-gradient-to-br from-deep-brown via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img src={gallery5} alt="Home loans" className="w-full h-full object-cover" />
      </div>
      <div className="relative container-main text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full mb-6">
          <Percent size={16} />
          <span className="text-sm font-medium">Best Rates Guaranteed</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-white font-semibold mb-6">
          Home Loan Assistance
        </h1>
        <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
          Get the best home loan rates from 30+ banks. We simplify your loan journey from application to approval.
        </p>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">8.5%</div>
            <div className="text-sm opacity-80">Starting Interest Rate</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">30+</div>
            <div className="text-sm opacity-80">Partner Banks</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">₹1000 Cr+</div>
            <div className="text-sm opacity-80">Loans Facilitated</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-80">Approval Rate</div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Why Choose Our Home Loan Services?" 
          subtitle="We make your home loan journey smooth and hassle-free" 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="luxury-card p-6 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Percent size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Best Interest Rates</h3>
            <p className="text-muted-foreground text-sm">Compare rates from 30+ banks and get the lowest interest rate available.</p>
          </div>
          <div className="luxury-card p-6 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <FileCheck size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">Quick Approval</h3>
            <p className="text-muted-foreground text-sm">Fast-track your loan approval with our established bank relationships.</p>
          </div>
          <div className="luxury-card p-6 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Calculator size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">EMI Calculator</h3>
            <p className="text-muted-foreground text-sm">Use our EMI calculator to plan your monthly repayments effectively.</p>
          </div>
          <div className="luxury-card p-6 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Home size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3">End-to-End Support</h3>
            <p className="text-muted-foreground text-sm">Complete assistance from documentation to loan disbursement.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <SectionHeading 
          title="Home Loan Process" 
          subtitle="Simple 4-step process to get your home loan approved"
          center
        />
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center text-3xl font-bold">
              1
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Application</h3>
            <p className="text-muted-foreground text-sm">Submit your loan application with basic documents</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center text-3xl font-bold">
              2
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Verification</h3>
            <p className="text-muted-foreground text-sm">Bank verifies your documents and credit score</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center text-3xl font-bold">
              3
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Approval</h3>
            <p className="text-muted-foreground text-sm">Get loan sanction letter with terms and conditions</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary text-warm-white flex items-center justify-center text-3xl font-bold">
              4
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Disbursement</h3>
            <p className="text-muted-foreground text-sm">Loan amount disbursed to builder/seller account</p>
          </div>
        </div>
      </div>
    </section>

    {/* Documents */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading 
          title="Documents Required" 
          subtitle="Keep these documents ready for your home loan application"
          center
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="luxury-card p-8">
            <h3 className="font-heading text-2xl font-semibold mb-6">Identity & Address Proof</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">✓ Aadhaar Card</li>
              <li className="flex items-center gap-3">✓ PAN Card</li>
              <li className="flex items-center gap-3">✓ Passport</li>
              <li className="flex items-center gap-3">✓ Voter ID</li>
              <li className="flex items-center gap-3">✓ Driving License</li>
            </ul>
          </div>
          <div className="luxury-card p-8">
            <h3 className="font-heading text-2xl font-semibold mb-6">Financial Documents</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">✓ Salary Slips (Last 3 months)</li>
              <li className="flex items-center gap-3">✓ Bank Statements (Last 6 months)</li>
              <li className="flex items-center gap-3">✓ ITR (Last 2 years)</li>
              <li className="flex items-center gap-3">✓ Form 16</li>
              <li className="flex items-center gap-3">✓ Property Documents</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main text-center">
        <SectionHeading 
          title="Ready to Apply for Home Loan?" 
          subtitle="Get pre-approved and find your dream home with confidence"
          center
        />
        <div className="max-w-2xl mx-auto mt-8">
          <a 
            href="/calculator"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-gold transition-colors text-lg"
          >
            <Calculator size={20} />
            Use EMI Calculator
          </a>
        </div>
      </div>
    </section>
  </>
);

export default HomeLoans;
