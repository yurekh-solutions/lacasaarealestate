import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  { title: "1. Introduction", content: "Lacasaa Real Estate (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lacasaarealestate.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto." },
  { title: "2. Information We Collect", content: "We may collect information about you in a variety of ways. The information we may collect includes: Personal Data such as your name, email address, telephone number, and mailing address that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site. We also collect derivative data — information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed." },
  { title: "3. How We Use Your Information", content: "We use the information we collect to: Process and manage your property inquiries; Respond to your comments, questions, and provide customer service; Send you marketing and promotional communications (with your consent); Monitor and analyze usage and trends to improve your experience; Deliver targeted advertising, newsletters, and other information regarding promotions; Maintain the safety and security of our website." },
  { title: "4. Disclosure of Your Information", content: "We may share information we have collected about you in certain situations: with third-party service providers who perform services for us (such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance); to comply with applicable laws and regulations; to respond to a subpoena, search warrant or other lawful request for information; or to protect against legal liability." },
  { title: "5. Tracking Technologies", content: "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience. When you access the site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the site." },
  { title: "6. Third-Party Websites", content: "The site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information." },
  { title: "7. Security of Your Information", content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse." },
  { title: "8. Policy for Children", content: "We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible." },
  { title: "9. Data Retention", content: "We will retain your personal information only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies." },
  { title: "10. Your Rights Under GDPR", content: "If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Lacasaa Real Estate aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. You have the right to: access, update or delete the information we have on you; rectification; object to processing; portability; withdraw consent." },
  { title: "11. California Privacy Rights", content: "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information." },
  { title: "12. Cookies Policy", content: "Our website uses cookies to enhance your browsing experience. Cookies are small text files that are placed on your computer by websites that you visit. We use essential cookies (required for the website to function properly), analytics cookies (to understand how visitors interact with our website), and marketing cookies (to track visitors across websites). You can manage your cookie preferences through your browser settings." },
  { title: "13. Email Communications", content: "We may use your email address to send you: Property listing updates; Market reports and insights; Newsletters; Promotional offers and new service information. You can opt out of receiving promotional emails by clicking the unsubscribe link in any promotional email or by contacting us directly." },
  { title: "14. Property Inquiry Data", content: "When you submit a property inquiry through our website, we collect your contact details and property preferences. This information is used solely for the purpose of assisting you in finding suitable properties and will not be shared with unrelated third parties without your explicit consent." },
  { title: "15. Changes to This Privacy Policy", content: "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date." },
  { title: "16. Contact Us", content: "If you have questions or comments about this Privacy Policy, please contact us at: Lacasaa Real Estate, Ascension House, Ground Floor, Flat no 1 Boran road, Hill Rd, Bandra West, Mumbai. Email: info@lacasaa.in | Phone: +91-9820620922" },
];

const Privacy = () => (
  <>
    <SEOHead
      title="Privacy Policy | Lacasaa Real Estate"
      description="Read the Lacasaa Real Estate privacy policy. Learn how we collect, use, and protect your personal information when using our services."
      keywords="lacasaa privacy policy, real estate privacy, data protection"
      canonical="https://lacasaarealestate.com/privacy"
    />

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <SectionHeading title="Privacy Policy" subtitle="Last updated: April 2026" />
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

export default Privacy;
