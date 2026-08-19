import Link from "next/link";

export default function RailwayServicesPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="detail-badge">
          🚆 RAILWAY SERVICES
        </div>

        <h1>
          Railway <span>Services</span>
        </h1>

        <p>
          Railway ticket booking और उपलब्ध online railway
          services के लिए Shivam Online Hub पर digital
          assistance प्राप्त करें।
        </p>

      </section>


      {/* MAIN CONTENT */}
      <section className="detail-container">

        {/* SERVICES */}
        <div className="detail-card">

          <div className="detail-icon">🚆</div>

          <h2>Railway Services में क्या मिलता है?</h2>

          <p>
            Railway से जुड़ी उपलब्ध online services और ticket
            booking process में सहायता प्रदान की जाती है।
          </p>

          <div className="detail-list">

            <div>✓ Railway Ticket Booking Assistance</div>

            <div>✓ Online Railway Services</div>

            <div>✓ Passenger Details Assistance</div>

            <div>✓ Journey Details Assistance</div>

            <div>✓ Booking Related Assistance</div>

            <div>✓ Available Status Information</div>

          </div>

        </div>


        {/* BOOKING INFORMATION */}
        <div className="detail-card">

          <div className="detail-icon">🎫</div>

          <h2>Railway Ticket Booking</h2>

          <p>
            Ticket booking के लिए यात्रा की सही जानकारी और
            passenger details पहले से तैयार रखना सुविधाजनक रहता है।
          </p>

          <div className="document-box">

            <div>
              <strong>📍 From & To</strong>

              <span>
                यात्रा का starting और destination station।
              </span>
            </div>

            <div>
              <strong>📅 Journey Date</strong>

              <span>
                यात्रा की तारीख और उपलब्ध train options।
              </span>
            </div>

            <div>
              <strong>👤 Passenger Details</strong>

              <span>
                Passenger की आवश्यक जानकारी सही होना जरूरी है।
              </span>
            </div>

            <div>
              <strong>📱 Contact Details</strong>

              <span>
                Booking के लिए आवश्यक contact information।
              </span>
            </div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="detail-card">

          <div className="detail-icon">📄</div>

          <h2>आम तौर पर जरूरी जानकारी</h2>

          <p>
            Railway booking के लिए आवश्यक details booking type
            और current railway rules के अनुसार अलग हो सकती हैं।
          </p>

          <div className="detail-list">

            <div>✓ Passenger Name</div>

            <div>✓ Age</div>

            <div>✓ Gender</div>

            <div>✓ Journey Date</div>

            <div>✓ Boarding Station</div>

            <div>✓ Destination Station</div>

            <div>✓ Valid Contact Details</div>

            <div>✓ Valid ID, यदि booking के लिए आवश्यक हो</div>

          </div>

          <p className="note">
            ℹ️ Booking के समय current railway rules और
            requirements लागू होंगे।
          </p>

        </div>


        {/* PROCESS */}
        <div className="detail-card">

          <div className="detail-icon">⚡</div>

          <h2>Railway Ticket Booking की Basic Process</h2>

          <div className="process-grid">

            <div>
              <strong>01</strong>
              <span>Journey Details दें</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Train / Availability देखें</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Passenger Details भरें</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Booking Process पूरा करें</span>
            </div>

          </div>

        </div>


        {/* IMPORTANT */}
        <div className="detail-card">

          <div className="detail-icon">ℹ️</div>

          <h2>महत्वपूर्ण जानकारी</h2>

          <p>
            Train availability, fare, cancellation rules और
            booking requirements समय के अनुसार बदल सकते हैं।
            Booking से पहले current railway rules और available
            information की पुष्टि जरूर करें।
          </p>

        </div>


        {/* CONTACT */}
        <div className="detail-contact">

          <div>

            <span>NEED RAILWAY SERVICE?</span>

            <h2>
              Railway Ticket चाहिए?
              <strong> Contact करें।</strong>
            </h2>

            <p>
              यात्रा की तारीख और जरूरी passenger details लेकर
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