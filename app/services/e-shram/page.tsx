import Link from "next/link";

export default function EShramPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          👷
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          E-Shram <span>Card</span>
        </h1>

        <p>
          E-Shram Card registration, update और related online
          services की सहायता यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            E-Shram Card क्या है?
          </h2>

          <p>
            E-Shram Card असंगठित क्षेत्र के workers के लिए
            एक digital identification सुविधा है। इसके registration
            और online related काम में सहायता प्राप्त की जा सकती है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 नया E-Shram registration</li>
            <li>🔄 E-Shram details update में सहायता</li>
            <li>📄 E-Shram Card download में सहायता</li>
            <li>📱 Mobile number related assistance</li>
            <li>💻 Online application assistance</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक जानकारी
          </h2>

          <ul>
            <li>🪪 Aadhaar Card</li>
            <li>📱 Aadhaar से linked mobile number</li>
            <li>🏦 Bank account details, जहाँ आवश्यक हो</li>
            <li>📋 अन्य आवश्यक जानकारी</li>
          </ul>

          <p className="service-note">
            ⚠️ आवश्यक documents और eligibility काम के अनुसार
            अलग हो सकते हैं।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>
            <span>
              NEED E-SHRAM SERVICE?
            </span>

            <h2>
              E-Shram Card के लिए
              <strong> हमसे संपर्क करें।</strong>
            </h2>

            <p>
              Service की जानकारी के लिए पहले details देखें,
              फिर Shivam Online Hub से संपर्क करें।
            </p>
          </div>

          <Link
            href="/contact"
            className="primary-btn"
          >
            Contact Us →
          </Link>

        </div>

      </section>

    </main>
  );
}