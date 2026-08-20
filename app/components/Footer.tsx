import Link from "next/link";

export default function Footer() {
  return (
    <footer className="premium-footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand-section">

          <div className="footer-logo">
            <div className="footer-logo-box">
              <img
                src="/logo2.png"
                alt="Shivam Online Hub"
              />
            </div>

            <div>
              <h3>Shivam Online Hub</h3>
              <span>Jan Suvidha Kendra</span>
            </div>
          </div>

          <p className="footer-description">
            Online forms, government services, Aadhaar,
            PAN Card, digital services aur online solutions
            ke liye ek trusted destination.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/profile.php?id=100083713851147"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span>f</span>
              Facebook
            </a>

            <a
              href="https://www.instagram.com/official_shivam_agrahari_2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span>◎</span>
              Instagram
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <Link href="/">
            <span>→</span>
            Home
          </Link>

          <Link href="/about">
            <span>→</span>
            About Us
          </Link>

          <Link href="/services">
            <span>→</span>
            Our Services
          </Link>

          <Link href="/contact">
            <span>→</span>
            Contact Us
          </Link>

        </div>


        {/* POPULAR SERVICES */}
        <div className="footer-column">

          <h4>Popular Services</h4>

          <Link href="/services">
            <span>→</span>
            Aadhaar Services
          </Link>

          <Link href="/services">
            <span>→</span>
            PAN Card
          </Link>

          <Link href="/services">
            <span>→</span>
            Online Forms
          </Link>

          <Link href="/services">
            <span>→</span>
            Government Services
          </Link>

          <Link href="/services">
            <span>→</span>
            Railway Services
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h4>Get In Touch</h4>

          <div className="footer-contact-item">
            <span>📍</span>
            <p>
              Shivam Online Hub<br />
              Jan Suvidha Kendra
            </p>
          </div>

          <div className="footer-contact-item">
            <span>💬</span>
            <p>
              Online Service &<br />
              Digital Support
            </p>
          </div>

          <Link
            href="/contact"
            className="footer-main-button"
          >
            Contact Us
            <span>→</span>
          </Link>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom-container">

        <div className="footer-line"></div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()}{" "}
            <strong>Shivam Online Hub</strong>.
            All Rights Reserved.
          </p>

          <div className="footer-legal">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}