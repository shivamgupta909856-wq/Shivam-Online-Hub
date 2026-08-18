"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const whatsappMessage = `Hello Shivam Online Hub,

Name: ${name}
Mobile: ${phone}

Service / Message:
${message}`;

    window.open(
      `https://wa.me/919098569757?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-badge">
          💬 GET IN TOUCH
        </div>

        <h1>
          Contact <span>Us</span>
        </h1>

        <p>
          किसी भी online service, form या digital काम के लिए
          Shivam Online Hub से संपर्क करें।
        </p>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-container">

        {/* LEFT */}
        <div className="contact-info">

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>

            <div>
              <span>CALL US</span>
              <h3>9098569757</h3>

              <a href="tel:9098569757">
                Call Now →
              </a>
            </div>
          </div>


          <div className="contact-info-card">
            <div className="contact-icon">💬</div>

            <div>
              <span>WHATSAPP</span>
              <h3>Chat With Us</h3>

              <a
                href="https://wa.me/919098569757"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now →
              </a>
            </div>
          </div>


          <div className="contact-info-card">
            <div className="contact-icon">📧</div>

            <div>
              <span>EMAIL</span>
              <h3>Shivam Online Hub</h3>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamgupta909856@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Send Email →
</a>
            </div>
          </div>


          <div className="contact-info-card">
            <div className="contact-icon">📍</div>

            <div>
              <span>OUR LOCATION</span>

              <h3>Shivam Online Hub</h3>

              <p>
                Gram Post Pondi Tilwari,
                Tahsil Majhauli,
                District Sidhi,
                Madhya Pradesh
              </p>
            </div>
          </div>

        </div>


        {/* FORM */}
        <div className="contact-form-card">

          <div className="form-heading">
            <span>SEND A MESSAGE</span>

            <h2>
              Let's <strong>Connect</strong>
            </h2>

            <p>
              नीचे details भरें और WhatsApp के माध्यम से
              हमें message भेजें।
            </p>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="phone">
                Mobile Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter mobile number"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                Service / Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="आपको किस service की जरूरत है?"
                required
              />
            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send on WhatsApp →
            </button>

          </form>

        </div>

      </section>


      {/* QUICK CTA */}
      <section className="contact-cta">

        <div>
          <span>SHIVAM ONLINE HUB</span>

          <h2>
            आपका digital काम,
            <strong> आसान समाधान।</strong>
          </h2>

          <p>
            आज ही हमसे संपर्क करें।
          </p>
        </div>

        <Link
          href="/services"
          className="contact-cta-button"
        >
          Explore Services →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="contact-footer">

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