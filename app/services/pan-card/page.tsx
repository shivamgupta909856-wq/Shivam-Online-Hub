import Link from "next/link";

export default function PanCardPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="detail-badge">
          💳 PAN CARD SERVICE
        </div>

        <h1>
          PAN Card <span>Services</span>
        </h1>

        <p>
          New PAN Card, PAN Card Correction और PAN से जुड़ी
          online services के लिए Shivam Online Hub पर सहायता प्राप्त करें।
        </p>

      </section>


      {/* MAIN CONTENT */}
      <section className="detail-container">

        {/* ABOUT */}
        <div className="detail-card">

          <div className="detail-icon">💳</div>

          <h2>PAN Card Service में क्या-क्या होता है?</h2>

          <p>
            PAN Card एक महत्वपूर्ण पहचान दस्तावेज है जिसका उपयोग
            बैंकिंग, ITR, financial transactions और कई अन्य कार्यों में
            किया जाता है।
          </p>

          <div className="detail-list">

            <div>✓ New PAN Card Application</div>
            <div>✓ PAN Card Correction</div>
            <div>✓ Name / Date of Birth Correction</div>
            <div>✓ Address Related Assistance</div>
            <div>✓ PAN Related Online Assistance</div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="detail-card">

          <div className="detail-icon">📄</div>

          <h2>जरूरी Documents</h2>

          <p>
            PAN Card application या correction के लिए documents
            applicant की स्थिति और application type के अनुसार अलग हो सकते हैं।
          </p>

          <div className="document-box">

            <div>
              <strong>पहचान प्रमाण</strong>
              <span>
                Aadhaar Card या मान्य पहचान प्रमाण
              </span>
            </div>

            <div>
              <strong>पता प्रमाण</strong>
              <span>
                Aadhaar Card या मान्य Address Proof
              </span>
            </div>

            <div>
              <strong>जन्मतिथि प्रमाण</strong>
              <span>
                मान्य Date of Birth Proof
              </span>
            </div>

            <div>
              <strong>Mobile Number</strong>
              <span>
                चालू Mobile Number
              </span>
            </div>

          </div>

          <p className="note">
            ℹ️ Exact documents application के प्रकार के अनुसार
            अलग हो सकते हैं। आवेदन से पहले आवश्यक documents की
            पुष्टि कर लें।
          </p>

        </div>


        {/* PROCESS */}
        <div className="detail-card">

          <div className="detail-icon">⚡</div>

          <h2>PAN Card आवेदन प्रक्रिया</h2>

          <div className="process-grid">

            <div>
              <strong>01</strong>
              <span>Documents तैयार करें</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Application Details भरें</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Application Submit करें</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Application Status देखें</span>
            </div>

          </div>

        </div>


        {/* CONTACT */}
        <div className="detail-contact">

          <div>
            <span>READY TO APPLY?</span>

            <h2>
              PAN Card के लिए
              <strong> Contact करें।</strong>
            </h2>

            <p>
              Documents लेकर Shivam Online Hub से संपर्क करें।
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

        <strong>Shivam Online Hub</strong>

        <span>
          Jan Suvidha Kendra
        </span>

      </footer>

    </main>
  );
}