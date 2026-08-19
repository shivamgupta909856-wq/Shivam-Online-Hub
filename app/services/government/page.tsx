import Link from "next/link";

export default function GovernmentServicesPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="detail-badge">
          🏛️ GOVERNMENT SERVICES
        </div>

        <h1>
          Government <span>Services</span>
        </h1>

        <p>
          सरकारी योजनाओं, प्रमाण पत्रों और विभिन्न online
          government services के लिए Shivam Online Hub पर
          digital assistance प्राप्त करें।
        </p>

      </section>


      {/* CONTENT */}
      <section className="detail-container">

        {/* SERVICE INFORMATION */}
        <div className="detail-card">

          <div className="detail-icon">🏛️</div>

          <h2>Government Services में क्या मिलता है?</h2>

          <p>
            विभिन्न सरकारी योजनाओं और online सरकारी सेवाओं से
            जुड़े applications, forms और digital process में
            सहायता उपलब्ध है।
          </p>

          <div className="detail-list">

            <div>✓ Government Scheme Assistance</div>

            <div>✓ Online Government Applications</div>

            <div>✓ Certificate Related Assistance</div>

            <div>✓ Online Form Assistance</div>

            <div>✓ Application Status Assistance</div>

            <div>✓ Document Related Assistance</div>

          </div>

        </div>


        {/* POPULAR SERVICES */}
        <div className="detail-card">

          <div className="detail-icon">📋</div>

          <h2>Popular Government Services</h2>

          <p>
            सरकारी services की requirements अलग-अलग हो सकती हैं।
            किसी service के लिए आवेदन करने से पहले उसकी eligibility
            और documents की पुष्टि करना जरूरी है।
          </p>

          <div className="document-box">

            <div>
              <strong>📜 Certificate Services</strong>

              <span>
                विभिन्न प्रमाण पत्रों से संबंधित online assistance।
              </span>
            </div>

            <div>
              <strong>🏠 Government Schemes</strong>

              <span>
                सरकारी योजनाओं के online application में सहायता।
              </span>
            </div>

            <div>
              <strong>📝 Government Forms</strong>

              <span>
                विभिन्न सरकारी applications और online forms।
              </span>
            </div>

            <div>
              <strong>🔎 Application Status</strong>

              <span>
                उपलब्ध services में application status check assistance।
              </span>
            </div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="detail-card">

          <div className="detail-icon">📄</div>

          <h2>आम तौर पर लगने वाले Documents</h2>

          <p>
            Exact documents service के अनुसार अलग हो सकते हैं।
            सामान्य रूप से निम्न documents की आवश्यकता पड़ सकती है।
          </p>

          <div className="detail-list">

            <div>✓ Aadhaar Card</div>

            <div>✓ Mobile Number</div>

            <div>✓ Passport Size Photo</div>

            <div>✓ Address Proof</div>

            <div>✓ Bank Account Details</div>

            <div>✓ संबंधित अन्य Documents</div>

          </div>

          <p className="note">
            ℹ️ जरूरी documents संबंधित सरकारी service और उसके
            नियमों के अनुसार अलग हो सकते हैं।
          </p>

        </div>


        {/* PROCESS */}
        <div className="detail-card">

          <div className="detail-icon">⚡</div>

          <h2>Online आवेदन की Basic Process</h2>

          <div className="process-grid">

            <div>
              <strong>01</strong>
              <span>Service चुनें</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Documents तैयार करें</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Online Application करें</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Status देखें</span>
            </div>

          </div>

        </div>


        {/* IMPORTANT INFORMATION */}
        <div className="detail-card">

          <div className="detail-icon">ℹ️</div>

          <h2>महत्वपूर्ण जानकारी</h2>

          <p>
            प्रत्येक सरकारी service की eligibility, documents,
            fees और processing time अलग हो सकते हैं। इसलिए आवेदन
            करने से पहले संबंधित service की current requirements
            की पुष्टि जरूर करें।
          </p>

        </div>


        {/* CONTACT */}
        <div className="detail-contact">

          <div>

            <span>NEED GOVERNMENT SERVICE?</span>

            <h2>
              सरकारी सेवा के लिए
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