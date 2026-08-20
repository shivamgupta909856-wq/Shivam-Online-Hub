import Link from "next/link";

const services = [
  {
    icon: "🪪",
    title: "Aadhaar Services",
    description:
      "Aadhaar related online services, update assistance and document guidance.",
    tags: ["Aadhaar", "Update", "Documents"],
    link: "/services/aadhaar",
  },
  {
    icon: "💳",
    title: "PAN Card Services",
    description:
      "New PAN application, correction and other PAN related online assistance.",
    tags: ["New PAN", "Correction", "Online"],
    link: "/services/pan-card",
  },
  {
    icon: "📄",
    title: "Online Forms",
    description:
      "Admission, scholarship, vacancy and other online application forms.",
    tags: ["Admission", "Forms", "Scholarship"],
    link: "/services/online-form",
  },
  {
    icon: "🏛️",
    title: "Government Services",
    description:
      "Government schemes, certificates, applications and other government services.",
    tags: ["Government", "Schemes", "Certificates"],
    link: "/services/government",
  },
  {
    icon: "🎓",
    title: "Education Services",
    description:
      "Admission, examination, scholarship and other education related assistance.",
    tags: ["Admission", "Exam", "Scholarship"],
    link: "/services/education",
  },
  {
    icon: "💼",
    title: "Job & Vacancy Forms",
    description:
      "Government and private job vacancy forms and online application assistance.",
    tags: ["Jobs", "Vacancy", "Recruitment"],
    link: "/services/job-vacancy",
  },
  {
    icon: "🚆",
    title: "Railway Services",
    description:
      "Railway ticket booking assistance and other available railway services.",
    tags: ["Railway", "Ticket", "Travel"],
    link: "/services/railway",
  },
  {
    icon: "💡",
    title: "Bill Payment",
    description:
      "Electricity, mobile and other online bill payment assistance.",
    tags: ["Electricity", "Mobile", "Bills"],
    link: "/services/bill-payment",
  },
  {
    icon: "🖨️",
    title: "Digital & Print Services",
    description:
      "Printing, scanning, document preparation and other digital services.",
    tags: ["Print", "Scan", "Documents"],
    link: "/services/digital-print",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      <section className="services-hero">
        <div className="services-badge">
          ⚡ DIGITAL SERVICES • ONLINE SOLUTIONS
        </div>

        <h1>
          Online <span>Services</span>
        </h1>

        <p>
         Shivam Online Hub एक Jan Suvidha Kendra है जहाँ
  Aadhaar, PAN Card, E-Shram Card, online forms,
  government services, railway services, bill payment
  और digital services की online assistance मिलती है।
        </p>
      </section>

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
                href={service.link}
                className="service-action"
              >
                <span>View Service</span>
                <span>→</span>
              </Link>

            </div>
          ))}

        </div>
      </section>

      <section className="services-cta">

        <div className="services-cta-content">
          <span>NEED HELP?</span>

          <h2>
            आपका काम,
            <strong> हमारी जिम्मेदारी।</strong>
          </h2>

          <p>
            किसी service के बारे में जानकारी चाहिए?
            पहले service की details देखें और फिर हमसे contact करें।
          </p>
        </div>

        <Link
          href="/contact"
          className="services-cta-button"
        >
          Contact Us →
        </Link>

      </section>

    </main>
  );
}