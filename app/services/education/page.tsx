import Link from "next/link";

export default function EducationServicesPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="detail-badge">
          🎓 EDUCATION SERVICES
        </div>

        <h1>
          Education <span>Services</span>
        </h1>

        <p>
          Admission, examination, scholarship और education से
          जुड़ी online services के लिए Shivam Online Hub पर
          digital assistance प्राप्त करें।
        </p>

      </section>


      {/* MAIN CONTENT */}
      <section className="detail-container">

        {/* SERVICES */}
        <div className="detail-card">

          <div className="detail-icon">🎓</div>

          <h2>Education Services में क्या मिलता है?</h2>

          <p>
            Students के लिए विभिन्न education related online
            forms, applications और digital processes में सहायता
            उपलब्ध है।
          </p>

          <div className="detail-list">

            <div>✓ College Admission Forms</div>

            <div>✓ School Admission Assistance</div>

            <div>✓ Scholarship Forms</div>

            <div>✓ Examination Forms</div>

            <div>✓ Online Registration</div>

            <div>✓ Education Related Applications</div>

          </div>

        </div>


        {/* POPULAR SERVICES */}
        <div className="detail-card">

          <div className="detail-icon">📚</div>

          <h2>Popular Education Services</h2>

          <p>
            अलग-अलग admission, examination और scholarship की
            requirements अलग हो सकती हैं।
          </p>

          <div className="document-box">

            <div>
              <strong>🏫 Admission Forms</strong>

              <span>
                School और college admission के online forms में सहायता।
              </span>
            </div>

            <div>
              <strong>💰 Scholarship Forms</strong>

              <span>
                उपलब्ध scholarship applications भरने में सहायता।
              </span>
            </div>

            <div>
              <strong>📝 Examination Forms</strong>

              <span>
                परीक्षा registration और online examination forms में सहायता।
              </span>
            </div>

            <div>
              <strong>📋 Online Registration</strong>

              <span>
                विभिन्न education related online registrations में सहायता।
              </span>
            </div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="detail-card">

          <div className="detail-icon">📄</div>

          <h2>आम तौर पर लगने वाले Documents</h2>

          <p>
            Documents course, admission, scholarship या examination
            के अनुसार अलग हो सकते हैं। सामान्य रूप से इनकी जरूरत
            पड़ सकती है।
          </p>

          <div className="detail-list">

            <div>✓ Aadhaar Card</div>

            <div>✓ Passport Size Photo</div>

            <div>✓ Mobile Number</div>

            <div>✓ Previous Class Marksheet</div>

            <div>✓ Transfer Certificate, यदि आवश्यक हो</div>

            <div>✓ Bank Account Details, यदि आवश्यक हो</div>

          </div>

          <p className="note">
            ℹ️ Exact documents संबंधित institution या application
            की current requirements के अनुसार अलग हो सकते हैं।
          </p>

        </div>


        {/* PROCESS */}
        <div className="detail-card">

          <div className="detail-icon">⚡</div>

          <h2>Education Form भरने की Basic Process</h2>

          <div className="process-grid">

            <div>
              <strong>01</strong>
              <span>Course / Service चुनें</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Documents तैयार करें</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Online Form भरें</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Application Submit करें</span>
            </div>

          </div>

        </div>


        {/* IMPORTANT */}
        <div className="detail-card">

          <div className="detail-icon">ℹ️</div>

          <h2>महत्वपूर्ण जानकारी</h2>

          <p>
            हर admission, scholarship और examination form की
            eligibility, last date, fees और documents अलग हो सकते हैं।
            Form भरने से पहले संबंधित संस्था या official notification
            की current जानकारी जरूर जांचें।
          </p>

        </div>


        {/* CONTACT */}
        <div className="detail-contact">

          <div>

            <span>NEED EDUCATION SERVICE?</span>

            <h2>
              Education से जुड़ा काम?
              <strong> Contact करें।</strong>
            </h2>

            <p>
              जरूरी documents लेकर Shivam Online Hub से संपर्क करें।
            </p>

          </div>

          <Link
            href="/contact"
            className="detail-contact-button"
          >
            Contact Us →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="detail-footer">

        <div>
          <strong>Shivam Online Hub</strong>
        </div>

        <span>
          Jan Suvidha Kendra
        </span>

      </footer>

    </main>
  );
}