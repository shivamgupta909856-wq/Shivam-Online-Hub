import Link from "next/link";

export default function IncomeCertificatePage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          📑
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          Income <span>Certificate</span>
        </h1>

        <p>
          Income Certificate के लिए online application और
          document assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            Income Certificate क्या है?
          </h2>

          <p>
            Income Certificate किसी व्यक्ति या परिवार की
            निर्धारित अवधि की आय से संबंधित सरकारी प्रमाण-पत्र
            है। इसका उपयोग विभिन्न सरकारी योजनाओं, छात्रवृत्ति,
            admission और अन्य आवश्यक कार्यों में किया जा सकता है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 Income Certificate application में सहायता</li>
            <li>📄 आवश्यक documents की जानकारी</li>
            <li>💻 Online application भरने में assistance</li>
            <li>🔎 Application/status से संबंधित guidance</li>
            <li>📥 Certificate download में सहायता</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक दस्तावेज / जानकारी
          </h2>

          <ul>
            <li>🪪 पहचान से संबंधित document</li>
            <li>🏠 Address proof, जहाँ आवश्यक हो</li>
            <li>💰 आय से संबंधित जानकारी/documents</li>
            <li>📱 Mobile number</li>
            <li>📋 अन्य आवश्यक documents</li>
          </ul>

          <p className="service-note">
            ⚠️ आवश्यक documents और प्रक्रिया राज्य तथा
            संबंधित सरकारी नियमों के अनुसार अलग हो सकती है।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED INCOME CERTIFICATE?
            </span>

            <h2>
              Income Certificate के लिए
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