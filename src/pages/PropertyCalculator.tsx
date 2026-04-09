import { useState } from "react";
import { Calculator, IndianRupee, Calendar, Percent, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const PropertyCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(10000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const loanAmount = propertyPrice * (1 - downPayment / 100);
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi = monthlyRate > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : loanAmount / months;
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };

  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;
  const principalPercent = 100 - interestPercent;

  return (
    <>
      <SEOHead
        title="Property Calculator | Lacasaa - EMI & Home Loan Calculator"
        description="Calculate your home loan EMI instantly. Free property cost estimator for Mumbai real estate. Plan your budget for apartments in Bandra, Khar, Juhu & more."
        keywords="emi calculator mumbai, home loan calculator, property cost estimator, mortgage calculator india, real estate calculator"
        canonical="https://lacasaarealestate.com/calculator"
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading title="Property Calculator" subtitle="Plan your property purchase with our instant EMI calculator" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass-card p-8">
              <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calculator size={22} className="text-accent" /> Loan Details
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-1"><IndianRupee size={14} /> Property Price</label>
                    <span className="text-sm text-accent font-semibold">{formatCurrency(propertyPrice)}</span>
                  </div>
                  <input type="range" min={1000000} max={500000000} step={500000} value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="w-full accent-accent" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>₹10 L</span><span>₹50 Cr</span></div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-1"><Percent size={14} /> Down Payment</label>
                    <span className="text-sm text-accent font-semibold">{downPayment}% ({formatCurrency(propertyPrice * downPayment / 100)})</span>
                  </div>
                  <input type="range" min={5} max={90} step={5} value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-accent" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>5%</span><span>90%</span></div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-1"><Percent size={14} /> Interest Rate</label>
                    <span className="text-sm text-accent font-semibold">{interestRate}% p.a.</span>
                  </div>
                  <input type="range" min={5} max={15} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-accent" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>5%</span><span>15%</span></div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-1"><Calendar size={14} /> Loan Tenure</label>
                    <span className="text-sm text-accent font-semibold">{tenure} years</span>
                  </div>
                  <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-accent" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1 yr</span><span>30 yrs</span></div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* EMI Card */}
              <div className="glass-card p-8 text-center bg-deep-brown text-warm-white">
                <p className="text-sm opacity-70 mb-2">Your Monthly EMI</p>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-gold-light mb-2">{formatCurrency(Math.round(emi))}</p>
                <p className="text-sm opacity-70">per month for {tenure} years</p>
              </div>

              {/* Breakdown */}
              <div className="glass-card p-8">
                <h3 className="font-heading text-xl font-semibold mb-4">Payment Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold">{formatCurrency(Math.round(loanAmount))}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Down Payment</span>
                    <span className="font-semibold">{formatCurrency(Math.round(propertyPrice * downPayment / 100))}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Interest</span>
                    <span className="font-semibold text-accent">{formatCurrency(Math.round(totalInterest))}</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between items-center">
                    <span className="text-sm font-medium">Total Payment</span>
                    <span className="font-heading text-xl font-bold">{formatCurrency(Math.round(totalPayment))}</span>
                  </div>
                </div>

                {/* Visual bar */}
                <div className="mt-6">
                  <div className="h-4 rounded-full overflow-hidden flex bg-secondary">
                    <div className="bg-primary transition-all duration-500" style={{ width: `${principalPercent}%` }} />
                    <div className="bg-accent transition-all duration-500" style={{ width: `${interestPercent}%` }} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary inline-block" /> Principal ({principalPercent.toFixed(0)}%)</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent inline-block" /> Interest ({interestPercent.toFixed(0)}%)</span>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="glass-card p-5 flex items-center justify-between hover-lift block">
                <div>
                  <p className="font-heading font-semibold">Need help with home loans?</p>
                  <p className="text-sm text-muted-foreground">Our team can connect you with the best lenders</p>
                </div>
                <ArrowRight className="text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyCalculator;
