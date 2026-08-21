"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "🪪",
    title: "Aadhaar Services",
    text: "Aadhaar related online services and assistance.",
  },
  {
    icon: "💳",
    title: "PAN Card",
    text: "New PAN application, correction and related services.",
  },
  {
    icon: "📄",
    title: "Online Forms",
    text: "Admission, vacancy, scholarship and other online forms.",
  },
  {
    icon: "🏠",
    title: "Government Services",
    text: "Online assistance for various government services.",
  },
  {
    icon: "🚆",
    title: "Railway Services",
    text: "Railway ticket and other online travel assistance.",
  },
  {
    icon: "💡",
    title: "Bill Payment",
    text: "Convenient online bill payment assistance.",
  },
  {
    icon: "👷",
    title: "E-Shram Card",
    text: "E-Shram Card registration and related online assistance.",
  },
  {
    icon: "💚",
    title: "Ayushman Card",
    text: "Ayushman Card application and related assistance.",
  },
  {
    icon: "🌾",
    title: "PM Kisan",
    text: "PM Kisan related online services and assistance.",
  },
  {
    icon: "🏢",
    title: "Udyam Registration",
    text: "Online Udyam Registration and MSME related assistance.",
  },
  {
    icon: "📑",
    title: "Income Certificate",
    text: "Online income certificate application assistance.",
  },
  {
    icon: "📜",
    title: "Caste Certificate",
    text: "Online caste certificate application assistance.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Samagra ID",
    text: "Samagra ID registration, correction and related services.",
  },
  {
    icon: "🏦",
    title: "Bank Account Services",
    text: "Online banking assistance and account related services.",
  },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className={`home-page ${visible ? "home-loaded" : ""}`}>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge hero-animate">
            ⚡ DIGITAL SERVICES • ONLINE SOLUTIONS
          </div>

          <h1 className="hero-title-animate">
            Welcome to{" "}
            <span>Shivam Online Hub</span>
          </h1>

          <p className="hero-text hero-text-animate">
            Your trusted <strong>Jan Suvidha Kendra</strong> for
            online forms, government services, digital solutions
            and much more.
          </p>

          <div className="hero-buttons hero-buttons-animate">

            <Link
              href="/services"
              className="primary-btn"
            >
              Explore Services →
            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >
              Contact Us
            </Link>

          </div>

          <div className="hero-stats hero-stats-animate">

            <div>
              <strong>50+</strong>
              <span>Services</span>
            </div>

            <div>
              <strong>1000+</strong>
              <span>Applications</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Digital Support</span>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="floating-card card-one">
            🪪
            <div>
              <strong>Aadhaar</strong>
              <small>Digital Services</small>
            </div>
          </div>

          <div className="floating-card card-two">
            📄
            <div>
              <strong>Online Forms</strong>
              <small>Fast & Easy</small>
            </div>
          </div>

          <div className="floating-card card-three">
            💻
            <div>
              <strong>Digital Hub</strong>
              <small>Smart Solutions</small>
            </div>
          </div>

          <div className="hero-orb">

            <div className="orb-inner">

              <img
                src="/logo2.png"
                alt="Shivam Online Hub"
              />

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="home-services">

        <div className="section-heading home-section-reveal">

          <span>WHAT WE OFFER</span>

          <h2>
            Our <strong>Popular Services</strong>
          </h2>

          <p>
            सभी जरूरी online और digital services एक ही जगह।
          </p>

        </div>


        <div className="home-service-grid">

          {services.map((service, index) => (

            <div
              className="home-service-card service-scroll-card"
              key={service.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <Link href="/services">
                Learn More →
              </Link>

            </div>

          ))}

        </div>


        <div className="services-button home-section-reveal">

          <Link
            href="/services"
            className="primary-btn"
          >
            View All Services →
          </Link>

        </div>

      </section>


      {/* WHY US */}
      <section className="why-home">

        <div className="section-heading home-section-reveal">

          <span>WHY SHIVAM ONLINE HUB</span>

          <h2>
            Simple. Fast. <strong>Reliable.</strong>
          </h2>

        </div>


        <div className="why-home-grid">

          <div
            className="why-home-card why-card-animate"
            style={{ animationDelay: "0ms" }}
          >

            <div>⚡</div>

            <h3>Fast Service</h3>

            <p>
              Online applications और digital काम
              को आसान और fast बनाने की कोशिश।
            </p>

          </div>


          <div
            className="why-home-card why-card-animate"
            style={{ animationDelay: "150ms" }}
          >

            <div>🔒</div>

            <h3>Secure Process</h3>

            <p>
              आपके documents और information को
              जिम्मेदारी के साथ handle किया जाता है।
            </p>

          </div>


          <div
            className="why-home-card why-card-animate"
            style={{ animationDelay: "300ms" }}
          >

            <div>🤝</div>

            <h3>Trusted Support</h3>

            <p>
              किसी भी online service में सहायता के
              लिए आसान और friendly support।
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta home-cta-animate">

        <div>

          <span>NEED ONLINE SERVICE?</span>

          <h2>
            हम आपके online काम को
            <strong> आसान बनाते हैं।</strong>
          </h2>

          <p>
            आज ही Shivam Online Hub से संपर्क करें।
          </p>

        </div>

        <Link
          href="/contact"
          className="primary-btn"
        >
          Get In Touch →
        </Link>

      </section>

    </main>
  );
}