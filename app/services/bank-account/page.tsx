import Link from "next/link";

export default function BankAccountPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-icon">
          🏦
        </div>

        <div className="service-detail-badge">
          ⚡ DIGITAL BANKING ASSISTANCE
        </div>

        <h1>
          Bank Account <span>Services</span>
        </h1>

        <p>
          Bank account से संबंधित online और digital
          assistance यहाँ उपलब्ध है।
        </p>

      </section>


      {/* CONTENT */}
      <section className="service-detail-container">

        <div className="service-detail-card">

          <h2>
            Bank Account Services
          </h2>

          <p>
            Shivam Online Hub पर bank account से संबंधित
            उपलब्ध online और digital services में सहायता
            प्रदान की जाती है। Service और eligibility bank
            तथा संबंधित नियमों पर निर्भर करती है।
          </p>

        </div>


        <div className="service-detail-card">

          <h2>
            किन कामों में सहायता मिलती है?
          </h2>

          <ul>
            <li>🏦 Bank account related online assistance</li>
            <li>📝 उपलब्ध account application process में guidance</li>
            <li>📱 Mobile banking related basic assistance</li>
            <li>📄 Bank forms और document preparation में सहायता</li>
            <li>💻 Digital banking services में सामान्य assistance</li>
          </ul>

        </div>


        <div className="service-detail-card">

          <h2>
            आवश्यक दस्तावेज / जानकारी
          </h2>

          <ul>
            <li>🪪 Aadhaar Card या अन्य valid ID</li>
            <li>📱 Mobile number</li>
            <li>🏠 Address proof, जहाँ आवश्यक हो</li>
            <li>📸 Passport size photograph, जहाँ आवश्यक हो</li>
            <li>📋 Bank द्वारा मांगे गए अन्य documents</li>
          </ul>

          <p className="service-note">
            ⚠️ Documents और eligibility संबंधित bank के
            नियमों के अनुसार अलग हो सकते हैं।
          </p>

        </div>


        {/* IMPORTANT NOTE */}
        <div className="service-detail-card">

          <h2>
            🔒 Important
          </h2>

          <p>
            Banking services के लिए हमेशा अपने bank के
            official rules और verification process का पालन करें।
            अपना OTP, PIN, password या अन्य confidential
            banking information किसी के साथ share न करें।
          </p>

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <div>

            <span>
              NEED BANKING ASSISTANCE?
            </span>

            <h2>
              Bank Account Service के लिए
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