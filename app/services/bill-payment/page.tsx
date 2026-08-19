"use client";

import Link from "next/link";

export default function BillPaymentPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-badge">
          💡 BILL PAYMENT • DIGITAL SERVICE
        </div>

        <div className="service-detail-icon">
          💡
        </div>

        <h1>
          Bill <span>Payment Services</span>
        </h1>

        <p>
          बिजली, मोबाइल और अन्य बिलों के online payment में
          Shivam Online Hub पर सहायता प्राप्त करें।
        </p>

        <div className="service-detail-buttons">
          <Link href="/contact" className="detail-primary-btn">
            Contact Us →
          </Link>

          <Link href="/services" className="detail-secondary-btn">
            ← All Services
          </Link>
        </div>

      </section>


      {/* SERVICES */}
      <section className="detail-section">

        <div className="detail-heading">
          <span>WHAT WE PROVIDE</span>

          <h2>
            Bill Payment में <strong>कौन-कौन सी सुविधा?</strong>
          </h2>

          <p>
            अपने जरूरी bill payment के लिए हमारी Jan Suvidha Kendra
            पर सहायता प्राप्त कर सकते हैं।
          </p>
        </div>


        <div className="detail-grid">

          <div className="detail-card">
            <div className="detail-card-icon">⚡</div>
            <h3>Electricity Bill</h3>
            <p>
              बिजली के बिल का online payment करने में सहायता।
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-card-icon">📱</div>
            <h3>Mobile Recharge</h3>
            <p>
              Mobile recharge और संबंधित digital payment services।
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-card-icon">📺</div>
            <h3>DTH Recharge</h3>
            <p>
              DTH और अन्य उपलब्ध recharge services में सहायता।
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-card-icon">🌐</div>
            <h3>Online Payments</h3>
            <p>
              उपलब्ध online payment services में सहायता।
            </p>
          </div>

        </div>

      </section>


      {/* DOCUMENTS */}
      <section className="documents-section">

        <div className="detail-heading">
          <span>REQUIRED INFORMATION</span>

          <h2>
            Payment के लिए <strong>क्या चाहिए?</strong>
          </h2>
        </div>

        <div className="documents-box">

          <div>
            <span>01</span>
            <p>जिस bill का payment करना है उसका bill / consumer number</p>
          </div>

          <div>
            <span>02</span>
            <p>Mobile number</p>
          </div>

          <div>
            <span>03</span>
            <p>Payment के लिए valid payment method</p>
          </div>

          <div>
            <span>04</span>
            <p>सही customer details</p>
          </div>

        </div>

      </section>


      {/* IMPORTANT NOTE */}
      <section className="important-note">

        <div className="note-icon">
          ℹ️
        </div>

        <div>
          <h3>जरूरी जानकारी</h3>

          <p>
            Payment करने से पहले bill की details और amount को
            ध्यान से verify करें। Service availability संबंधित
            provider पर निर्भर कर सकती है।
          </p>
        </div>

      </section>


      {/* CTA */}
      <section className="detail-cta">

        <div>
          <span>NEED BILL PAYMENT?</span>

          <h2>
            अपना Bill Payment
            <strong> आसानी से करवाएँ।</strong>
          </h2>

          <p>
            Service की जानकारी लेने के बाद हमसे contact करें।
          </p>
        </div>

        <Link href="/contact" className="detail-primary-btn">
          Contact Us →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="detail-footer">

        <div>
          <strong>Shivam Online Hub</strong>
          <small>Jan Suvidha Kendra</small>
        </div>

        <span>
          © {new Date().getFullYear()} Shivam Online Hub
        </span>

      </footer>

    </main>
  );
}