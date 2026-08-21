import Link from "next/link";

export default function UdyamPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          🏢
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          Udyam <span>Registration</span>
        </h1>

        <p>
          Udyam Registration और MSME से संबंधित online
          registration तथा application assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            Udyam Registration क्या है?
          </h2>

          <p>
            Udyam Registration भारत में eligible Micro, Small और
            Medium Enterprises (MSMEs) के लिए registration की
            official प्रक्रिया है। Registration से संबंधित online
            process में सहायता प्राप्त की जा सकती है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 Udyam Registration application में सहायता</li>
            <li>🔄 Registration details से संबंधित assistance</li>
            <li>📄 Udyam Registration certificate download में सहायता</li>
            <li>💻 Online application process में सहायता</li>
            <li>📋 आवश्यक जानकारी भरने में guidance</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक दस्तावेज / जानकारी
          </h2>

          <ul>
            <li>🪪 Aadhaar से संबंधित जानकारी</li>
            <li>📱 Mobile number</li>
            <li>🏢 Business/Enterprise की जानकारी</li>
            <li>🏦 Bank account details, जहाँ आवश्यक हो</li>
            <li>📋 अन्य आवश्यक business details</li>
          </ul>

          <p className="service-note">
            ⚠️ Registration की eligibility और आवश्यक जानकारी
            official rules के अनुसार हो सकती है।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED UDYAM SERVICE?
            </span>

            <h2>
              Udyam Registration के लिए
              <strong> हमसे संपर्क करें।</strong>
            </h2>

            <p>
              Service की जानकारी के लिए details देखें और
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