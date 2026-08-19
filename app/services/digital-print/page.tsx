"use client";

import Link from "next/link";

export default function DigitalPrintPage() {
  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-badge">
          🖨️ DIGITAL & PRINT • DOCUMENT SERVICES
        </div>

        <div className="service-detail-icon">
          🖨️
        </div>

        <h1>
          Digital & <span>Print Services</span>
        </h1>

        <p>
          Printing, scanning, photocopy, photo और document
          preparation जैसी digital services एक ही जगह पर।
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


      {/* SERVICES */}
      <section className="detail-section">

        <div className="detail-heading">

          <span>OUR DIGITAL SERVICES</span>

          <h2>
            हम कौन-कौन सी{" "}
            <strong>Digital & Print Services</strong>
            देते हैं?
          </h2>

          <p>
            आपके जरूरी documents को print, scan और prepare
            करने में सहायता।
          </p>

        </div>


        <div className="detail-grid">

          {/* CARD 1 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              🖨️
            </div>

            <h3>
              Document Printing
            </h3>

            <p>
              जरूरी documents, forms और applications
              की printing की सुविधा।
            </p>

          </div>


          {/* CARD 2 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              📑
            </div>

            <h3>
              Photocopy
            </h3>

            <p>
              जरूरी documents की photocopy
              करवाने की सुविधा।
            </p>

          </div>


          {/* CARD 3 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              📄
            </div>

            <h3>
              Document Scanning
            </h3>

            <p>
              Documents को scan करके digital format
              में तैयार करने में सहायता।
            </p>

          </div>


          {/* CARD 4 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              📸
            </div>

            <h3>
              Photo Services
            </h3>

            <p>
              आवश्यक documents और applications के लिए
              photo related assistance।
            </p>

          </div>


          {/* CARD 5 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              📝
            </div>

            <h3>
              Document Preparation
            </h3>

            <p>
              Online applications और जरूरी documents
              को तैयार करने में सहायता।
            </p>

          </div>


          {/* CARD 6 */}
          <div className="detail-card">

            <div className="detail-card-icon">
              💾
            </div>

            <h3>
              Digital Documents
            </h3>

            <p>
              Documents को digital format में रखने,
              भेजने और तैयार करने में सहायता।
            </p>

          </div>

        </div>

      </section>


      {/* REQUIRED DOCUMENTS */}
      <section className="documents-section">

        <div className="detail-heading">

          <span>WHAT YOU MAY NEED</span>

          <h2>
            Service के लिए{" "}
            <strong>क्या लेकर आएँ?</strong>
          </h2>

        </div>


        <div className="documents-box">

          <div>
            <span>01</span>

            <p>
              जिस document की printing या photocopy
              करवानी है उसका original या digital copy।
            </p>
          </div>


          <div>
            <span>02</span>

            <p>
              PDF, JPG या अन्य उपलब्ध digital file,
              अगर document mobile में है।
            </p>
          </div>


          <div>
            <span>03</span>

            <p>
              जिस application या form के लिए document
              चाहिए उसकी सही जानकारी।
            </p>
          </div>


          <div>
            <span>04</span>

            <p>
              Photo या अन्य document की जरूरत हो तो
              संबंधित सामग्री साथ लाएँ।
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
            Printing या scanning से पहले document की
            जानकारी और quality को ध्यान से check करें।
            Service की availability और charges काम के
            प्रकार पर निर्भर कर सकते हैं।
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="detail-cta">

        <div>

          <span>
            NEED DIGITAL & PRINT SERVICE?
          </span>

          <h2>
            अपना काम{" "}
            <strong>आसानी से करवाएँ।</strong>
          </h2>

          <p>
            Service की जानकारी लेने के बाद हमसे contact करें।
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