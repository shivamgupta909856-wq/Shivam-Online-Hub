"use client";

import Link from "next/link";

const services = [
  {
    icon: "🪪",
    title: "Aadhaar Services",
    description:
      "Aadhaar related online services and application assistance.",
    tags: ["Aadhaar", "Update", "Online"],
  },
  {
    icon: "💳",
    title: "PAN Card Services",
    description:
      "New PAN application, correction and other PAN related services.",
    tags: ["New PAN", "Correction", "Online"],
  },
  {
    icon: "📄",
    title: "Online Forms",
    description:
      "Admission forms, vacancy forms, scholarship forms and other online applications.",
    tags: ["Admission", "Jobs", "Scholarship"],
  },
  {
    icon: "🏠",
    title: "Government Services",
    description:
      "Assistance with various government schemes and digital services.",
    tags: ["Government", "Schemes", "Applications"],
  },
  {
    icon: "🎓",
    title: "Education Services",
    description:
      "Online admission, examination, scholarship and education related assistance.",
    tags: ["Admission", "Exam", "Scholarship"],
  },
  {
    icon: "💼",
    title: "Job & Vacancy Forms",
    description:
      "Online application assistance for government and private job opportunities.",
    tags: ["Vacancy", "Recruitment", "Forms"],
  },
  {
    icon: "🚆",
    title: "Railway Services",
    description:
      "Railway ticket booking assistance and other online railway services.",
    tags: ["Railway", "Ticket", "Travel"],
  },
  {
    icon: "💡",
    title: "Bill Payment",
    description:
      "Electricity, mobile and other online bill payment assistance.",
    tags: ["Electricity", "Mobile", "Bills"],
  },
  {
    icon: "🖨️",
    title: "Digital & Print Services",
    description:
      "Printing, scanning, document preparation and other digital services.",
    tags: ["Print", "Scan", "Documents"],
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">

        <div className="services-badge">
          ⚡ DIGITAL SERVICES • ONLINE SOLUTIONS
        </div>

        <h1>
          Our <span>Services</span>
        </h1>

        <p>
          Shivam Online Hub में आपको कई तरह की online,
          digital और government service assistance एक ही जगह मिलती है।
        </p>

      </section>


      {/* SERVICE GRID */}
      <section className="services-container">

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-premium-card"
              key={service.title}
            >

              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-big-icon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link
                href="/contact"
                className="service-action"
              >
                Get Service <span>→</span>
              </Link>

            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div className="services-cta-content">

          <span>NEED HELP?</span>

          <h2>
            आपका काम,
            <strong> हमारी जिम्मेदारी।</strong>
          </h2>

          <p>
            किसी service के बारे में जानकारी चाहिए?
            हमसे contact करें।
          </p>

        </div>

        <Link
          href="/contact"
          className="services-cta-button"
        >
          Contact Us →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="services-footer">

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