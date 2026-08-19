"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ================= PROFILE ================= */}

      <section className="about-profile">

        <div className="about-photo-wrap">
          <div className="about-photo-glow"></div>

          <div className="about-photo">
            <img
              src="/shivam-gupta.jpg"
              alt="Shivam Gupta"
            />
          </div>
        </div>


        <div className="about-intro">

          <span className="about-badge">
            👋 ABOUT THE FOUNDER
          </span>

          <p className="about-small">
            SHIVAM ONLINE HUB
          </p>

          <h1>
            Hi, I'm <span>Shivam Gupta</span>
          </h1>

          <h2>
            Founder & Digital Service Provider
          </h2>

          <p className="about-description">
  I enjoy working with online and digital services.
  With this interest, I started
  <strong> Shivam Online Hub </strong>
  in July 2026 to provide reliable digital assistance
  and useful online services at one place.
</p>

<p className="about-description">
  My goal is to make online work easier for people
  by providing the right information, simple guidance
  and trusted assistance for various digital,
  government and online services.
</p>

          <div className="about-buttons">

            <Link
              href="/services"
              className="about-primary-btn"
            >
              Hamari Services →
            </Link>

            <Link
              href="/contact"
              className="about-secondary-btn"
            >
              Contact Me
            </Link>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section className="about-education">

        <div className="about-section-title">

          <span>
            MY EDUCATION
          </span>

          <h2>
            Education & <strong>Journey</strong>
          </h2>

          <p>
            Meri education journey ne mujhe technical
            knowledge ke saath digital field mein kaam
            karne ka confidence diya.
          </p>

        </div>


        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <span className="education-label">
              DIPLOMA
            </span>

            <h3>
              Diploma in Electrical Engineering
            </h3>

            <p>
              SRIT Jabalpur
            </p>

            <small>
              Technical Education • Jabalpur
            </small>

          </div>

        </div>


        <div className="education-card">

          <div className="education-icon">
            📚
          </div>

          <div>

            <span className="education-label">
              12TH STANDARD
            </span>

            <h3>
              Higher Secondary • Biology
            </h3>

            <p>
              Class 12th with Biology
            </p>

            <small>
              Higher Secondary Education
            </small>

          </div>

        </div>

      </section>


      {/* ================= SHIVAM ONLINE HUB ================= */}

      <section className="about-hub">

        <div className="about-section-title">

          <span>
            OUR STORY
          </span>

          <h2>
            What is <strong>Shivam Online Hub?</strong>
          </h2>

          <p>
            Shivam Online Hub ek Jan Suvidha Kendra hai
            jahan customers ko different online,
            digital aur government services ki
            assistance ek hi jagah milti hai.
          </p>

        </div>


        <div className="about-hub-grid">

          <div className="about-info-card">

            <div>
              💻
            </div>

            <h3>
              Digital Services
            </h3>

            <p>
              Online aur digital kaam ko easy banane
              ke liye different services ki assistance
              provide ki jaati hai.
            </p>

          </div>


          <div className="about-info-card">

            <div>
              🤝
            </div>

            <h3>
              Trusted Assistance
            </h3>

            <p>
              Customer ko unke kaam se related
              sahi information aur simple guidance
              dene ka poora effort kiya jata hai.
            </p>

          </div>


          <div className="about-info-card">

            <div>
              💰
            </div>

            <h3>
              Affordable Service
            </h3>

            <p>
              Hamara aim hai ki kaam ko reasonable
              aur kam charges mein complete karne
              ki koshish ki jaye.
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="about-why">

        <div className="about-section-title">

          <span>
            WHY SHIVAM ONLINE HUB?
          </span>

          <h2>
            Why People <strong>Choose Us</strong>
          </h2>

        </div>


        <div className="why-about-grid">

          <div>

            <span>
              01
            </span>

            <h3>
              Sabhi Services Ek Jagah
            </h3>

            <p>
              Different online kaam ke liye
              alag-alag jagah jaane ki zarurat
              kam hoti hai.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Sahi Information
            </h3>

            <p>
              Customer ko unke kaam se related
              useful aur clear information dene
              ki koshish ki jaati hai.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Kam Charges
            </h3>

            <p>
              Services ko reasonable aur
              affordable charges mein provide
              karne ka effort hota hai.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <h3>
              Easy Process
            </h3>

            <p>
              Online kaam ki process ko simple
              aur easy-to-understand banane
              ki koshish ki jaati hai.
            </p>

          </div>

        </div>

      </section>


      {/* ================= TRUST MESSAGE ================= */}

      <section className="about-trust">

        <div className="trust-icon">
          🤝
        </div>


        <div>

          <span>
            OUR PROMISE
          </span>

          <h2>
            Aapka Kaam,
            <strong> Hamari Responsibility.</strong>
          </h2>

          <p>
            Hamara main purpose hai ki jab koi
            customer Shivam Online Hub par aaye,
            to use apne online kaam ke liye
            proper guidance aur assistance mile.
          </p>

          <blockquote>
            "Yahan bharose ke saath apna online
            kaam karwaya ja sakta hai."
          </blockquote>

          <p>
            Hum chahte hain ki customer ko apne
            kaam ke liye unnecessary jagah-jagah
            na bhatakna pade.
          </p>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="about-final-cta">

        <span>
          NEED ONLINE SERVICE?
        </span>

        <h2>
          Apne Kaam Ke Liye
          <strong> Humse Contact Karein.</strong>
        </h2>

        <p>
          Kisi service ki information chahiye?
          Pehle hamari service details dekhein
          aur phir humse contact karein.
        </p>


        <div>

          <Link
            href="/services"
            className="about-cta-primary"
          >
            View Services
          </Link>

          <Link
            href="/contact"
            className="about-cta-secondary"
          >
            Contact Us →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="about-footer">

        <div>

          <strong>
            Shivam Online Hub
          </strong>

          <span>
            Jan Suvidha Kendra
          </span>

        </div>

        <p>
          © {new Date().getFullYear()} Shivam Online Hub
        </p>

      </footer>

    </main>
  );
}