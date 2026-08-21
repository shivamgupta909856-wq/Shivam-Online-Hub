import Link from "next/link";

export default function PMKisanPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          🌾
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          PM <span>Kisan</span>
        </h1>

        <p>
          PM Kisan से संबंधित online services, registration,
          status check और application assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            PM Kisan क्या है?
          </h2>

          <p>
            PM-KISAN एक केंद्र सरकार की योजना है जिसके अंतर्गत
            पात्र किसान परिवारों को निर्धारित नियमों के अनुसार
            financial assistance प्रदान की जाती है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 PM Kisan registration में सहायता</li>
            <li>🔎 Beneficiary/status check में सहायता</li>
            <li>🔄 उपलब्ध details/update process में सहायता</li>
            <li>🏦 Bank account related details की जाँच में सहायता</li>
            <li>💻 Online application assistance</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक दस्तावेज / जानकारी
          </h2>

          <ul>
            <li>🪪 Aadhaar Card</li>
            <li>📱 Mobile number</li>
            <li>🏦 Bank account details</li>
            <li>🌾 भूमि/कृषि से संबंधित जानकारी, जहाँ आवश्यक हो</li>
            <li>📋 अन्य आवश्यक जानकारी</li>
          </ul>

          <p className="service-note">
            ⚠️ Eligibility और आवश्यक documents सरकारी नियमों
            के अनुसार हो सकते हैं।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED PM KISAN SERVICE?
            </span>

            <h2>
              PM Kisan के लिए
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