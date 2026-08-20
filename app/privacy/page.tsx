import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Shivam Online Hub",
  description:
    "Privacy Policy of Shivam Online Hub - Jan Suvidha Kendra.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span>LEGAL INFORMATION</span>
        <h1>Privacy Policy</h1>
        <p>
          Shivam Online Hub आपकी privacy और personal information की
          सुरक्षा को महत्व देता है।
        </p>
      </section>

      <section className="legal-content">

        <div className="legal-card">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Shivam Online Hub. यह Privacy Policy बताती है कि
            हमारी website और services का उपयोग करते समय information को
            किस प्रकार handle किया जाता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>2. Information We May Receive</h2>
          <p>
            Online services के दौरान आवश्यकता के अनुसार आपका नाम,
            mobile number, email address या service से संबंधित documents
            जैसी information provide करनी पड़ सकती है।
          </p>
        </div>

        <div className="legal-card">
          <h2>3. Use of Information</h2>
          <p>
            उपलब्ध कराई गई information का उपयोग requested online service,
            application या assistance प्रदान करने के लिए किया जा सकता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>4. Information Security</h2>
          <p>
            हम personal information को जिम्मेदारी से handle करने का
            प्रयास करते हैं। फिर भी internet पर किसी भी information
            transmission की पूर्ण security की guarantee नहीं दी जा सकती।
          </p>
        </div>

        <div className="legal-card">
          <h2>5. Third-Party Websites</h2>
          <p>
            हमारी website से कुछ external या government websites के links
            उपलब्ध हो सकते हैं। उन websites की privacy policies और
            practices पर हमारा control नहीं है।
          </p>
        </div>

        <div className="legal-card">
          <h2>6. Cookies</h2>
          <p>
            Website experience को बेहतर बनाने के लिए सामान्य technical
            data या cookies का उपयोग हो सकता है। Browser settings के
            माध्यम से cookies को control किया जा सकता है।
          </p>
        </div>

        <div className="legal-card">
          <h2>7. Policy Updates</h2>
          <p>
            आवश्यकता के अनुसार इस Privacy Policy को future में update
            किया जा सकता है। Updated version इसी page पर उपलब्ध कराया
            जाएगा।
          </p>
        </div>

        <div className="legal-card">
          <h2>8. Contact</h2>
          <p>
            Privacy से संबंधित किसी प्रश्न के लिए हमारी
            <Link href="/contact"> Contact Us </Link>
            page के माध्यम से संपर्क किया जा सकता है।
          </p>
        </div>

      </section>

      <div className="legal-back">
        <Link href="/">← Back to Home</Link>
      </div>
    </main>
  );
}