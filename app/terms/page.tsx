import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Shivam Online Hub",
  description:
    "Terms and Conditions of Shivam Online Hub - Jan Suvidha Kendra.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span>LEGAL INFORMATION</span>
        <h1>Terms & Conditions</h1>
        <p>
          Shivam Online Hub की website और services का उपयोग करने से पहले
          इन terms को ध्यान से पढ़ें।
        </p>
      </section>

      <section className="legal-content">

        <div className="legal-card">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Shivam Online Hub की website का उपयोग करके आप इन Terms &
            Conditions को समझने और स्वीकार करने के लिए सहमत होते हैं।
          </p>
        </div>

        <div className="legal-card">
          <h2>2. Our Services</h2>
          <p>
            Shivam Online Hub एक Jan Suvidha Kendra के रूप में विभिन्न
            online forms, digital services और government-related
            assistance उपलब्ध कराने का प्रयास करता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>3. User Information</h2>
          <p>
            Service लेते समय user द्वारा दी गई information सही और
            complete होनी चाहिए। गलत information के कारण होने वाली
            समस्या के लिए user स्वयं जिम्मेदार हो सकता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>4. Government Services</h2>
          <p>
            Government services और applications के final approval,
            rejection, processing time या decision का अधिकार संबंधित
            government department या authority के पास होता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>5. Service Availability</h2>
          <p>
            कुछ services government portals, third-party platforms,
            internet connection या technical issues पर निर्भर हो सकती
            हैं। इसलिए हर service की continuous availability की guarantee
            नहीं दी जा सकती।
          </p>
        </div>

        <div className="legal-card">
          <h2>6. External Links</h2>
          <p>
            Website पर उपलब्ध external links third-party websites की ओर
            ले जा सकते हैं। उन websites के content या policies के लिए
            Shivam Online Hub जिम्मेदार नहीं है।
          </p>
        </div>

        <div className="legal-card">
          <h2>7. Changes to Services</h2>
          <p>
            Services, information या website content को आवश्यकता के
            अनुसार बिना prior notice के update या modify किया जा सकता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>8. Contact</h2>
          <p>
            किसी भी प्रश्न या सहायता के लिए हमारी
            <Link href="/contact"> Contact Us </Link>
            page पर जाएँ।
          </p>
        </div>

      </section>

      <div className="legal-back">
        <Link href="/">← Back to Home</Link>
      </div>
    </main>
  );
}