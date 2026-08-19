import Link from "next/link";

export default function JobVacancyPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="detail-badge">
          💼 JOB & VACANCY FORMS
        </div>

        <h1>
          Job & <span>Vacancy Forms</span>
        </h1>

        <p>
          Government और private job vacancies से जुड़े online
          applications, registration और form filling में
          Shivam Online Hub पर digital assistance प्राप्त करें।
        </p>

      </section>


      {/* MAIN CONTENT */}
      <section className="detail-container">

        {/* SERVICE INFORMATION */}
        <div className="detail-card">

          <div className="detail-icon">💼</div>

          <h2>Job & Vacancy Services में क्या मिलता है?</h2>

          <p>
            विभिन्न government और private job vacancies के
            online application forms भरने तथा registration
            process में सहायता उपलब्ध है।
          </p>

          <div className="detail-list">

            <div>✓ Government Job Forms</div>

            <div>✓ Private Job Application Forms</div>

            <div>✓ Recruitment Forms</div>

            <div>✓ Online Registration</div>

            <div>✓ Vacancy Application Assistance</div>

            <div>✓ Application Status Assistance</div>

          </div>

        </div>


        {/* POPULAR SERVICES */}
        <div className="detail-card">

          <div className="detail-icon">📋</div>

          <h2>Popular Job Services</h2>

          <p>
            अलग-अलग recruitment और vacancy की eligibility,
            documents, fees और last date अलग हो सकती है।
          </p>

          <div className="document-box">

            <div>
              <strong>🏛️ Government Jobs</strong>

              <span>
                उपलब्ध सरकारी भर्ती के online application में सहायता।
              </span>
            </div>

            <div>
              <strong>🏢 Private Jobs</strong>

              <span>
                उपलब्ध private job applications और registrations में सहायता।
              </span>
            </div>

            <div>
              <strong>📝 Recruitment Forms</strong>

              <span>
                विभिन्न recruitment forms भरने में digital assistance।
              </span>
            </div>

            <div>
              <strong>🔎 Application Status</strong>

              <span>
                उपलब्ध applications का status check करने में सहायता।
              </span>
            </div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="detail-card">

          <div className="detail-icon">📄</div>

          <h2>आम तौर पर लगने वाले Documents</h2>

          <p>
            Documents vacancy और recruitment के अनुसार अलग हो सकते हैं।
            सामान्य रूप से निम्न documents की आवश्यकता पड़ सकती है।
          </p>

          <div className="detail-list">

            <div>✓ Aadhaar Card / Valid ID Proof</div>

            <div>✓ Passport Size Photo</div>

            <div>✓ Signature</div>

            <div>✓ Educational Marksheet / Certificate</div>

            <div>✓ Mobile Number</div>

            <div>✓ Email ID</div>

            <div>✓ Category Certificate, यदि लागू हो</div>

            <div>✓ अन्य संबंधित Documents</div>

          </div>

          <p className="note">
            ℹ️ Exact documents संबंधित recruitment notification
            के अनुसार अलग हो सकते हैं।
          </p>

        </div>


        {/* PROCESS */}
        <div className="detail-card">

          <div className="detail-icon">⚡</div>

          <h2>Job Form भरने की Basic Process</h2>

          <div className="process-grid">

            <div>
              <strong>01</strong>
              <span>Vacancy चुनें</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Eligibility देखें</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Documents तैयार करें</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Online Form Submit करें</span>
            </div>

          </div>

        </div>


        {/* IMPORTANT INFORMATION */}
        <div className="detail-card">

          <div className="detail-icon">ℹ️</div>

          <h2>महत्वपूर्ण जानकारी</h2>

          <p>
            प्रत्येक job vacancy की eligibility, age limit,
            application fee, documents और last date अलग हो सकती है।
            Form भरने से पहले संबंधित भर्ती की official notification
            और current requirements जरूर जांचें।
          </p>

        </div>


        {/* CONTACT */}
        <div className="detail-contact">

          <div>

            <span>LOOKING FOR A JOB?</span>

            <h2>
              Job Form भरना है?
              <strong> Contact करें।</strong>
            </h2>

            <p>
              Vacancy की जानकारी और जरूरी documents लेकर
              Shivam Online Hub से संपर्क करें।
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