import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  { title: "1. Agreement to Terms", content: "By accessing and using the Lacasaa Real Estate website (lacasaarealestate.com), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website. These terms apply to all visitors, users, and others who access or use the service." },
  { title: "2. Intellectual Property Rights", content: "Unless otherwise stated, Lacasaa Real Estate and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this from the website for your own personal use subjected to restrictions set in these terms and conditions. You must not: republish material, sell or sublicense material, reproduce, duplicate or copy material, or redistribute content without prior written consent." },
  { title: "3. Property Listings", content: "All property listings on the website are provided for informational purposes only. While we strive to ensure the accuracy of all information, Lacasaa Real Estate does not warrant or guarantee the accuracy, completeness, or reliability of any property listing. Prices, availability, and other details are subject to change without notice. Property images may be representative and not reflect the exact current condition." },
  { title: "4. User Accounts", content: "When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password and for all activities that occur under your account." },
  { title: "5. User Conduct", content: "You agree not to use the website: in any way that violates any applicable national or international law or regulation; to transmit any advertising or promotional material without our prior written consent; to impersonate or attempt to impersonate Lacasaa Real Estate, an employee, another user, or any other person or entity; to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website." },
  { title: "6. Property Transactions", content: "Lacasaa Real Estate acts as an intermediary between buyers, sellers, landlords, and tenants. We do not guarantee the completion of any property transaction. All property transactions are subject to applicable laws and regulations. The final terms of any transaction will be agreed upon between the parties involved and may differ from information displayed on the website." },
  { title: "7. Limitation of Liability", content: "In no event shall Lacasaa Real Estate, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: your access to or use of or inability to access or use the website; any conduct or content of any third party on the website; any property transaction facilitated through the website." },
  { title: "8. Indemnification", content: "You agree to defend, indemnify, and hold harmless Lacasaa Real Estate and its licensees, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from: your use of and access to the website; your violation of any term of these Terms and Conditions; your violation of any third party right, including any intellectual property right." },
  { title: "9. Fee Structure", content: "Lacasaa Real Estate may charge brokerage fees and service charges for property transactions facilitated through our services. All fees will be communicated transparently before any transaction is finalized. Payment terms and conditions will be agreed upon between the parties involved in the transaction." },
  { title: "10. Dispute Resolution", content: "Any dispute arising out of or in connection with these Terms and Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra. We encourage parties to resolve disputes amicably through negotiation or mediation before pursuing legal action." },
  { title: "11. Third-Party Links", content: "Our website may contain links to third-party websites or services that are not owned or controlled by Lacasaa Real Estate. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by the use of such content or services." },
  { title: "12. Termination", content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the website will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive." },
  { title: "13. Changes to Terms", content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms." },
  { title: "14. RERA Compliance", content: "Lacasaa Real Estate complies with the Real Estate (Regulation and Development) Act, 2016 (RERA). All properties listed on our website that fall under RERA jurisdiction are registered as required by law. RERA registration numbers, where applicable, are displayed in the property listings." },
  { title: "15. Anti-Money Laundering", content: "Lacasaa Real Estate is committed to preventing money laundering and terrorist financing. We may request identification documents and proof of funds from parties involved in property transactions. We reserve the right to refuse any transaction that we reasonably believe may be associated with money laundering or terrorist financing." },
  { title: "16. Contact Information", content: "For any questions about these Terms and Conditions, please contact us at: Lacasaa Real Estate, Ascension House, Ground Floor, Flat no 1 Boran road, Hill Rd, Bandra West, Mumbai. Email: info@lacasaa.in | Phone: +91-9820620922" },
];

const Terms = () => (
  <>
    <SEOHead
      title="Terms & Conditions | Lacasaa Real Estate"
      description="Read the Lacasaa Real Estate terms and conditions. Understand your rights and obligations when using our real estate services and website."
      keywords="lacasaa terms, real estate terms conditions, property transaction terms"
      canonical="https://lacasaarealestate.com/terms"
    />

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <SectionHeading title="Terms & Conditions" subtitle="Last updated: April 2026" />
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="glass-card p-6">
              <h2 className="font-heading text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Terms;
