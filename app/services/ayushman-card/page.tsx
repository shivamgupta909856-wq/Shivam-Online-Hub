import Link from "next/link";

export default function AyushmanCardPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          💚
        </div>

        <div className="service-detail-badge">
          ⚡ ONLINE SERVICE
        </div>

        <h1>
          Ayushman <span>Card</span>
        </h1>

        <p>
          Ayushman Card से संबंधित online application,
          eligibility और अन्य digital assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            Ayushman Card क्या है?
          </h2>

          <p>
            Ayushman Bharat योजना के अंतर्गत पात्र लाभार्थियों को
            health coverage से संबंधित सुविधा मिल सकती है।
            पात्रता और उपलब्ध लाभ सरकारी नियमों के अनुसार होते हैं।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>📝 Ayushman Card से संबंधित online assistance</li>
            <li>🔎 Eligibility check में सहायता</li>
            <li>📄 Card download में सहायता</li>
            <li>🔄 उपलब्ध details/update process में सहायता</li>
            <li>💻 Online application assistance</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक दस्तावेज
          </h2>

          <ul>
            <li>🪪 Aadhaar Card</li>
            <li>📱 Mobile number</li>
            <li>👨‍👩‍👧‍👦 Family/beneficiary related information</li>
            <li>📋 अन्य आवश्यक जानकारी, यदि लागू हो</li>
          </ul>

          <p className="service-note">
            ⚠️ Eligibility और आवश्यक documents व्यक्ति/परिवार
            के अनुसार अलग हो सकते हैं।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED AYUSHMAN SERVICE?
            </span>

            <h2>
              Ayushman Card के लिए
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