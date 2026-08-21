import Link from "next/link";

export default function SamagraIdPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          👨‍👩‍👧‍👦
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          Samagra <span>ID</span>
        </h1>

        <p>
          Samagra ID registration, correction और related
          online services की assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            Samagra ID क्या है?
          </h2>

          <p>
            Samagra ID मध्य प्रदेश में परिवार और सदस्यों से
            संबंधित सरकारी सेवाओं में उपयोग की जाने वाली
            पहचान व्यवस्था है। Samagra से संबंधित online
            services में सहायता प्राप्त की जा सकती है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 Samagra ID registration में सहायता</li>
            <li>🔄 Samagra details correction में सहायता</li>
            <li>👨‍👩‍👧‍👦 Family/member details से संबंधित assistance</li>
            <li>🔎 Samagra ID/status check में सहायता</li>
            <li>📄 Samagra related documents download में सहायता</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक जानकारी / दस्तावेज
          </h2>

          <ul>
            <li>🪪 Aadhaar Card</li>
            <li>📱 Mobile number</li>
            <li>🏠 Address related information</li>
            <li>👨‍👩‍👧‍👦 Family members की जानकारी</li>
            <li>📋 अन्य आवश्यक जानकारी</li>
          </ul>

          <p className="service-note">
            ⚠️ आवश्यक documents और प्रक्रिया service के अनुसार
            अलग हो सकती है।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED SAMAGRA SERVICE?
            </span>

            <h2>
              Samagra ID के लिए
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