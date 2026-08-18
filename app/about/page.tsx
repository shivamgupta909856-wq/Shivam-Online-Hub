import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <p className="about-tag">
          ABOUT US
        </p>

        <h1>
          Shivam <span>Online Hub</span>
        </h1>

        <p className="about-subtitle">
          Your trusted destination for
          government, digital and online
          assistance under one roof.
        </p>

      </section>

      <section className="about-section">

        <div className="about-card">

          <div className="about-icon">
            🏢
          </div>

          <h2>
            Who We Are
          </h2>

          <p>
            Shivam Online Hub is a digital
            service center providing convenient
            assistance for various government
            and online services.
          </p>

          <p>
            Our goal is to make online work
            simple, fast and accessible for
            everyone.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">
            🎯
          </div>

          <h2>
            Our Mission
          </h2>

          <p>
            We aim to provide reliable digital
            assistance from a single place so
            customers can complete their online
            work conveniently.
          </p>

          <p>
            Simple process, helpful guidance
            and customer-friendly service are
            our priorities.
          </p>

        </div>

      </section>

      <section className="about-services">

        <h2>
          What We Help With
        </h2>

        <div className="about-service-grid">

          <div className="mini-service">
            <span>🪪</span>
            <h3>Aadhaar</h3>
            <p>
              Aadhaar related online assistance.
            </p>
          </div>

          <div className="mini-service">
            <span>💳</span>
            <h3>PAN Card</h3>
            <p>
              PAN application and correction assistance.
            </p>
          </div>

          <div className="mini-service">
            <span>📄</span>
            <h3>Online Forms</h3>
            <p>
              Admission and vacancy forms.
            </p>
          </div>

          <div className="mini-service">
            <span>🚆</span>
            <h3>Railway</h3>
            <p>
              Railway ticket booking assistance.
            </p>
          </div>

          <div className="mini-service">
            <span>🏦</span>
            <h3>Banking</h3>
            <p>
              Digital banking assistance.
            </p>
          </div>

          <div className="mini-service">
            <span>📜</span>
            <h3>Certificates</h3>
            <p>
              Online certificate application assistance.
            </p>
          </div>

        </div>

      </section>

      <section className="why-us">

        <h2>
          Why Choose Us?
        </h2>

        <div className="why-grid">

          <div>
            <strong>01</strong>
            <h3>Easy Process</h3>
            <p>
              Simple and easy online assistance.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Convenient</h3>
            <p>
              Multiple digital services at one place.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Helpful Support</h3>
            <p>
              Guidance whenever you need assistance.
            </p>
          </div>

        </div>

      </section>

      <section className="about-cta">

        <p>
          HAVE A DIGITAL WORK?
        </p>

        <h2>
          Let's Get It Done.
        </h2>

        <Link
          href="/contact"
          className="primary-button"
        >
          Contact Us →
        </Link>

      </section>

    </div>
  );
}