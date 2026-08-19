import Link from "next/link";

export default function AadhaarPage() {
  return (
    <main className="aadhaar-page">

      {/* HERO */}
      <section className="aadhaar-hero">

        <span className="aadhaar-badge">
          AADHAAR SERVICE
        </span>

        <h1>
          Aadhaar Card <span>Services</span>
        </h1>

        <p>
          Aadhaar Card se judi important services, required
          documents aur useful information ek hi jagah par.
        </p>

      </section>


      {/* SERVICE CARDS */}
      <section className="aadhaar-grid">

        {/* NEW AADHAAR */}
        <div className="aadhaar-card">

          <div className="aadhaar-icon">
            🪪
          </div>

          <h2>
            Naya Aadhaar Card
          </h2>

          <p>
            Naye Aadhaar enrolment ke liye applicable
            documents ke saath Aadhaar enrolment centre
            par verification karaya jata hai.
          </p>

          <ul>
            <li>Identity Proof</li>
            <li>Address Proof</li>
            <li>Date of Birth Proof, jahan applicable ho</li>
            <li>Children ke liye applicable documents</li>
          </ul>

        </div>


        {/* UPDATE */}
        <div className="aadhaar-card">

          <div className="aadhaar-icon">
            🔄
          </div>

          <h2>
            Aadhaar Update
          </h2>

          <p>
            Aadhaar mein available services ke according
            personal information update ya correction
            karne mein assistance.
          </p>

          <ul>
            <li>Name Update</li>
            <li>Address Update</li>
            <li>Date of Birth / Age Update</li>
            <li>Gender Update</li>
            <li>Mobile Number Update</li>
            <li>Email Update</li>
          </ul>

        </div>


        {/* DOCUMENT UPDATE */}
        <div className="aadhaar-card">

          <div className="aadhaar-icon">
            📄
          </div>

          <h2>
            Document & Biometric Update
          </h2>

          <p>
            Aadhaar record mein applicable document ya
            biometric related update ke liye assistance.
          </p>

          <ul>
            <li>Document Update</li>
            <li>Fingerprint Update</li>
            <li>Iris Update</li>
            <li>Photograph Update</li>
          </ul>

        </div>


        {/* IMPORTANT */}
        <div className="aadhaar-important">

          <h2>
            📌 Important Information
          </h2>

          <ul>
            <li>
              Required documents service aur applicant ki
              situation ke according alag ho sakte hain.
            </li>

            <li>
              Original documents verification ke liye
              saath le jana chahiye.
            </li>

            <li>
              Aadhaar service ke latest rules, acceptable
              documents aur charges UIDAI ke current
              guidelines ke according hote hain.
            </li>

            <li>
              Service lene se pehle required documents ki
              confirmation kar lena best rahega.
            </li>
          </ul>

        </div>

      </section>


      {/* CONTACT */}
      <section className="aadhaar-contact">

        <h2>
          Aadhaar Service ke liye Contact Karein
        </h2>

        <p>
          Documents aur service ki requirement samajhne
          ke baad humse sampark karein.
        </p>

        <Link
          href="/contact"
          className="aadhaar-contact-btn"
        >
          Contact Us →
        </Link>

      </section>


      {/* BACK */}
      <div className="aadhaar-back">

        <Link href="/services">
          ← Back to All Services
        </Link>

      </div>

    </main>
  );
}