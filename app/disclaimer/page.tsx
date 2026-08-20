import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Shivam Online Hub",
  description:
    "Disclaimer of Shivam Online Hub - Jan Suvidha Kendra.",
};

export default function DisclaimerPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span>LEGAL INFORMATION</span>
        <h1>Disclaimer</h1>
        <p>
          Shivam Online Hub की website और online assistance से संबंधित
          महत्वपूर्ण जानकारी।
        </p>
      </section>

      <section className="legal-content">

        <div className="legal-card">
          <h2>1. General Information</h2>
          <p>
            इस website पर दी गई information सामान्य informational और
            service assistance purposes के लिए है। इसे official
            government notification या legal advice का replacement नहीं
            माना जाना चाहिए।
          </p>
        </div>

        <div className="legal-card">
          <h2>2. Government Departments</h2>
          <p>
            Shivam Online Hub किसी भी government department की official
            website, authority या संस्था होने का दावा नहीं करता, जब तक
            किसी specific service के लिए स्पष्ट रूप से ऐसा न बताया गया हो।
          </p>
        </div>

        <div className="legal-card">
          <h2>3. Application Results</h2>
          <p>
            किसी application, certificate, form या government service का
            approval या rejection संबंधित department या authority के
            निर्णय पर निर्भर करता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>4. Information Accuracy</h2>
          <p>
            हम website पर accurate और useful information रखने का प्रयास
            करते हैं। फिर भी government rules, fees, deadlines और
            procedures समय के साथ बदल सकते हैं।
          </p>
        </div>

        <div className="legal-card">
          <h2>5. Third-Party Websites</h2>
          <p>
            Website पर दिए गए external links third-party या official
            portals तक ले जा सकते हैं। उन websites के content,
            availability या policies की जिम्मेदारी संबंधित website की है।
          </p>
        </div>

        <div className="legal-card">
          <h2>6. Service Delays</h2>
          <p>
            Internet problems, server issues, government portal downtime
            या अन्य technical reasons के कारण service में delay हो सकता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>7. Changes to Disclaimer</h2>
          <p>
            इस Disclaimer को आवश्यकता के अनुसार समय-समय पर update किया
            जा सकता है। Updated information इसी page पर उपलब्ध होगी।
          </p>
        </div>

        <div className="legal-card">
          <h2>8. Contact</h2>
          <p>
            किसी भी clarification के लिए हमारी
            <Link href="/contact"> Contact Us </Link>
            page के माध्यम से संपर्क करें।
          </p>
        </div>

      </section>

      <div className="legal-back">
        <Link href="/">← Back to Home</Link>
      </div>
    </main>
  );
}