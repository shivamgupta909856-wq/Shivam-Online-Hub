"use client";

import Link from "next/link";

export default function OnlineFormsPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-badge">
          📄 ONLINE FORMS • APPLICATION ASSISTANCE
        </div>

        <div className="service-detail-icon">
          📄
        </div>

        <h1>
          Online <span>Forms</span>
        </h1>

        <p>
          Admission, scholarship, government schemes, recruitment
          और अन्य online applications भरने में सहायता।
        </p>

        <div className="service-detail-buttons">

          <Link
            href="/contact"
            className="detail-primary-btn"
          >
            Contact Us →
          </Link>

          <Link
            href="/services"
            className="detail-secondary-btn"
          >
            ← All Services
          </Link>

        </div>

      </section>


      {/* FORM SERVICES */}
      <section className="detail-section">

        <div className="detail-heading">

          <span>ONLINE APPLICATION SERVICES</span>

          <h2>
            कौन-कौन से{" "}
            <strong>Online Forms?</strong>
          </h2>

          <p>
            अलग-अलग प्रकार के online applications भरने में
            step-by-step assistance उपलब्ध है।
          </p>

        </div>


        <div className="detail-grid">

          {/* CARD 1 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              🎓
            </div>

            <h3>
              Admission Forms
            </h3>

            <p>
              College, school और विभिन्न educational
              admission forms भरने में सहायता।
            </p>

          </div>


          {/* CARD 2 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              💼
            </div>

            <h3>
              Job Application Forms
            </h3>

            <p>
              उपलब्ध government और private job
              applications भरने में सहायता।
            </p>

          </div>


          {/* CARD 3 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              🎓
            </div>

            <h3>
              Scholarship Forms
            </h3>

            <p>
              Scholarship और education related
              online applications में सहायता।
            </p>

          </div>


          {/* CARD 4 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              🏛️
            </div>

            <h3>
              Government Forms
            </h3>

            <p>
              विभिन्न government schemes और services
              के available online forms में सहायता।
            </p>

          </div>


          {/* CARD 5 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              📝
            </div>

            <h3>
              Recruitment Forms
            </h3>

            <p>
              Recruitment और vacancy notifications के
              online application forms में सहायता।
            </p>

          </div>


          {/* CARD 6 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              🌐
            </div>

            <h3>
              Other Online Applications
            </h3>

            <p>
              उपलब्ध अन्य online applications को सही
              तरीके से भरने में सहायता।
            </p>

          </div>

        </div>

      </section>


      {/* DOCUMENTS */}
      <section className="documents-section">

        <div className="detail-heading">

          <span>REQUIRED DOCUMENTS</span>

          <h2>
            Form भरने के लिए{" "}
            <strong>क्या चाहिए?</strong>
          </h2>

          <p>
            Form के अनुसार documents अलग-अलग हो सकते हैं।
            सामान्यतः निम्न जानकारी की आवश्यकता पड़ सकती है।
          </p>

        </div>


        <div className="documents-box">

          <div>
            <span>01</span>

            <p>
              Aadhaar Card या अन्य पहचान संबंधी document
            </p>
          </div>


          <div>
            <span>02</span>

            <p>
              Mobile Number और Email ID
            </p>
          </div>


          <div>
            <span>03</span>

            <p>
              Passport Size Photo और Signature
            </p>
          </div>


          <div>
            <span>04</span>

            <p>
              Educational Documents / Certificates
            </p>
          </div>


          <div>
            <span>05</span>

            <p>
              Address और अन्य आवश्यक personal details
            </p>
          </div>


          <div>
            <span>06</span>

            <p>
              संबंधित form की notification में बताए गए
              अन्य documents
            </p>
          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="detail-section">

        <div className="detail-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Form भरने की{" "}
            <strong>प्रक्रिया</strong>
          </h2>

        </div>


        <div className="detail-grid">

          <div className="detail-card">

            <div className="detail-card-icon">
              1️⃣
            </div>

            <h3>
              Details दें
            </h3>

            <p>
              अपने form और application से संबंधित
              जरूरी जानकारी दें।
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-card-icon">
              2️⃣
            </div>

            <h3>
              Documents दें
            </h3>

            <p>
              Form के अनुसार जरूरी documents उपलब्ध कराएँ।
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-card-icon">
              3️⃣
            </div>

            <h3>
              Form Submit
            </h3>

            <p>
              उपलब्ध जानकारी के आधार पर online application
              भरने में सहायता।
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-card-icon">
              4️⃣
            </div>

            <h3>
              Confirmation
            </h3>

            <p>
              Submission के बाद उपलब्ध receipt या
              confirmation details प्राप्त करें।
            </p>

          </div>

        </div>

      </section>


      {/* IMPORTANT NOTE */}
      <section className="important-note">

        <div className="note-icon">
          ℹ️
        </div>

        <div>

          <h3>
            जरूरी जानकारी
          </h3>

          <p>
            हर application की eligibility, documents, fee और
            last date अलग हो सकती है। Form भरने से पहले
            संबंधित official notification की जानकारी जरूर check करें।
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="detail-cta">

        <div>

          <span>
            NEED ONLINE FORM ASSISTANCE?
          </span>

          <h2>
            आपका Form,
            <strong> सही तरीके से भरने में सहायता।</strong>
          </h2>

          <p>
            Form और documents की जानकारी लेकर हमसे contact करें।
          </p>

        </div>


        <Link
          href="/contact"
          className="detail-primary-btn"
        >
          Contact Us →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="detail-footer">

        <div>

          <strong>
            Shivam Online Hub
          </strong>

          <small>
            Jan Suvidha Kendra
          </small>

        </div>


        <span>
          © {new Date().getFullYear()} Shivam Online Hub
        </span>

      </footer>

    </main>
  );
}