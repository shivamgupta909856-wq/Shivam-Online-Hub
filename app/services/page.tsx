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

  {
    icon: "👷",
    title: "E-Shram Card",
    description:
      "E-Shram Card registration, update assistance and related online services.",
    tags: ["E-Shram", "Registration", "Update"],
    link: "/services/e-shram",
  },
  {
    icon: "💚",
    title: "Ayushman Card",
    description:
      "Ayushman Card application, eligibility assistance and related online services.",
    tags: ["Ayushman", "Health", "Card"],
    link: "/services/ayushman-card",
  },
  {
    icon: "🌾",
    title: "PM Kisan",
    description:
      "PM Kisan related online services, registration and application assistance.",
    tags: ["PM Kisan", "Farmer", "Online"],
    link: "/services/pm-kisan",
  },
  {
    icon: "🏢",
    title: "Udyam Registration",
    description:
      "Udyam Registration and MSME related online registration assistance.",
    tags: ["Udyam", "MSME", "Registration"],
    link: "/services/udyam",
  },
  {
    icon: "📑",
    title: "Income Certificate",
    description:
      "Online income certificate application and document assistance.",
    tags: ["Income", "Certificate", "Online"],
    link: "/services/income-certificate",
  },
  {
    icon: "📜",
    title: "Caste Certificate",
    description:
      "Online caste certificate application and document assistance.",
    tags: ["Caste", "Certificate", "Online"],
    link: "/services/caste-certificate",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Samagra ID",
    description:
      "Samagra ID registration, correction and related online assistance.",
    tags: ["Samagra", "ID", "Correction"],
    link: "/services/samagra-id",
  },
  {
    icon: "🏦",
    title: "Bank Account Services",
    description:
      "Bank account related online assistance and digital banking services.",
    tags: ["Banking", "Account", "Digital"],
    link: "/services/bank-account",
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
          Online <span>Services</span>
        </h1>

        <p>
          Shivam Online Hub एक Jan Suvidha Kendra है जहाँ
          Aadhaar, PAN Card, E-Shram Card, Ayushman Card,
          PM Kisan, Udyam Registration, certificates,
          online forms, government services, railway services,
          bill payment और digital services की online assistance मिलती है।
        </p>

        <div
          style={{
            marginTop: "15px",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          Total Services: {services.length}
        </div>

      </section>


      {/* SERVICES */}
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

              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>

              <div className="service-tags">

                {service.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

              <Link
                href={service.link}
                className="service-action"
              >
                <span>
                  View Service
                </span>

                <span>
                  →
                </span>
              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div className="services-cta-content">

          <span>
            NEED HELP?
          </span>

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