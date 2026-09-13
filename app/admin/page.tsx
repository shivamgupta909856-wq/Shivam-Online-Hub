import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import AdminLogout from "../components/AdminLogout";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <main className="admin-page">
        <div className="admin-container">

          {/* Header */}
          <section className="admin-header">
            <div>
              <span className="admin-badge">SHIVAM ONLINE HUB</span>

              <h1>Admin Dashboard</h1>

              <p>
                Welcome back, Admin 👋
              </p>
            </div>

            <div className="header-actions">
  <div className="status">
    <span></span>
    Online
  </div>

  <AdminLogout />
</div>
          </section>

          {/* Cards */}
          <section className="admin-grid">

            <Link href="/admin/services" className="admin-card card-1">
              <div className="icon">📋</div>
              <h2>Services</h2>
              <p>
                Website ki services add, edit aur manage karein.
              </p>
              <div className="arrow">→</div>
            </Link>

            <Link href="/admin/updates" className="admin-card card-2">
              <div className="icon">📢</div>
              <h2>Updates & Notices</h2>
              <p>
                New vacancy, forms aur important notices add karein.
              </p>
              <div className="arrow">→</div>
            </Link>

            <Link href="/admin/enquiries" className="admin-card card-3">
              <div className="icon">📩</div>
              <h2>Enquiries</h2>
              <p>
                Website se aane wale user messages dekhein.
              </p>
              <div className="arrow">→</div>
            </Link>

            <div className="admin-card card-4">
              <div className="icon">📊</div>
              <h2>Website Status</h2>
              <p>
                Shivam Online Hub website successfully connected.
              </p>

              <div className="connected">
                <span></span>
                Connected
              </div>
            </div>

            <div className="admin-card card-5">
              <div className="icon">🔐</div>
              <h2>Admin Account</h2>

              <p className="email">
                {user?.email || "Admin"}
              </p>

              <div className="secure">
                🔒 Secure Login
              </div>
            </div>

            <Link href="/" className="admin-card card-6">
              <div className="icon">🌐</div>
              <h2>View Website</h2>
              <p>
                Main Shivam Online Hub website open karein.
              </p>
              <div className="arrow">→</div>
            </Link>

          </section>

          {/* Bottom Info */}
          <section className="admin-info">
            <div className="info-icon">💡</div>

            <div>
              <h2>Admin Panel</h2>
              <p>
                Yahan se aap Shivam Online Hub ki website ka content
                manage kar sakenge. New vacancy aur updates add karne
                ke baad wo website par automatically show kiye ja sakenge.
              </p>
            </div>
          </section>

        </div>
      </main>

      <style>{`
        .admin-page {
          min-height: calc(100vh - 70px);
          padding: 45px 20px 70px;
          color: white;
        }

        .admin-container {
          max-width: 1180px;
          margin: auto;
        }

        /* HEADER */

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 28px 30px;
          border-radius: 26px;

          background: rgba(10, 20, 45, 0.48);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.25),
            inset 0 1px rgba(255,255,255,0.08);

          animation: slideDown 0.7s ease both;
        }

        .admin-badge {
          display: inline-block;
          padding: 7px 13px;
          border-radius: 50px;

          background: rgba(59,130,246,0.18);
          border: 1px solid rgba(96,165,250,0.3);

          color: #93c5fd;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .admin-header h1 {
          margin: 10px 0 4px;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 850;
          letter-spacing: -1px;
        }

        .admin-header p {
          margin: 0;
          color: rgba(255,255,255,0.65);
          font-size: 14px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 9px;

          padding: 10px 16px;
          border-radius: 50px;

          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);

          color: #86efac;
          font-size: 13px;
          font-weight: 700;
        }

        .status span,
        .connected span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 12px #22c55e;
          animation: pulse 1.8s infinite;
        }

        /* GRID */

        .admin-grid {
          margin-top: 25px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* CARDS */

        .admin-card {
          position: relative;
          min-height: 190px;
          padding: 25px;

          overflow: hidden;
          text-decoration: none;
          color: white;

          border-radius: 25px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.13),
              rgba(255,255,255,0.045)
            );

          border: 1px solid rgba(255,255,255,0.14);

          backdrop-filter: blur(17px);
          -webkit-backdrop-filter: blur(17px);

          box-shadow:
            0 15px 45px rgba(0,0,0,0.22),
            inset 0 1px rgba(255,255,255,0.08);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;

          animation: cardUp 0.7s ease both;
        }

        .admin-card::before {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;

          background: rgba(59,130,246,0.18);

          filter: blur(35px);

          top: -60px;
          right: -50px;

          transition: 0.4s ease;
        }

        .admin-card:hover {
          transform: translateY(-8px) scale(1.015);

          border-color: rgba(147,197,253,0.38);

          box-shadow:
            0 25px 60px rgba(0,0,0,0.35),
            0 0 30px rgba(59,130,246,0.10);
        }

        .admin-card:hover::before {
          transform: scale(1.5);
        }

        .card-1 { animation-delay: .08s; }
        .card-2 { animation-delay: .16s; }
        .card-3 { animation-delay: .24s; }
        .card-4 { animation-delay: .32s; }
        .card-5 { animation-delay: .40s; }
        .card-6 { animation-delay: .48s; }

        .icon {
          position: relative;
          z-index: 1;

          width: 55px;
          height: 55px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 17px;

          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.13);

          font-size: 27px;

          transition: transform 0.35s ease;
        }

        .admin-card:hover .icon {
          transform: rotate(-5deg) scale(1.12);
        }

        .admin-card h2 {
          position: relative;
          z-index: 1;

          margin: 17px 0 7px;

          font-size: 20px;
          font-weight: 800;
        }

        .admin-card p {
          position: relative;
          z-index: 1;

          margin: 0;
          max-width: 300px;

          color: rgba(255,255,255,0.62);
          font-size: 13px;
          line-height: 1.6;
        }

        .arrow {
          position: absolute;
          right: 22px;
          bottom: 20px;

          width: 35px;
          height: 35px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(255,255,255,0.09);

          font-size: 19px;

          transition: 0.35s ease;
        }

        .admin-card:hover .arrow {
          transform: translateX(5px);
          background: rgba(59,130,246,0.25);
        }

        .connected {
          position: relative;
          z-index: 1;

          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 17px;

          color: #86efac;
          font-size: 13px;
          font-weight: 700;
        }

        .secure {
          position: relative;
          z-index: 1;

          display: inline-block;
          margin-top: 16px;
          padding: 7px 11px;

          border-radius: 9px;

          background: rgba(255,255,255,0.08);

          color: rgba(255,255,255,0.72);
          font-size: 11px;
        }

        .email {
          word-break: break-all;
        }

        /* INFO */

        .admin-info {
          display: flex;
          align-items: center;
          gap: 18px;

          margin-top: 25px;
          padding: 25px 28px;

          border-radius: 24px;

          background: rgba(10,20,45,0.40);
          border: 1px solid rgba(255,255,255,0.13);

          backdrop-filter: blur(18px);

          animation: cardUp 0.8s ease 0.6s both;
        }

        .info-icon {
          flex-shrink: 0;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;

          background: rgba(59,130,246,0.15);

          font-size: 25px;
        }

        .admin-info h2 {
          margin: 0 0 5px;
          font-size: 18px;
        }

        .admin-info p {
          margin: 0;
          color: rgba(255,255,255,0.60);
          font-size: 13px;
          line-height: 1.6;
        }

        /* ANIMATIONS */

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(0.75);
          }
        }

        /* MOBILE */

        @media (max-width: 850px) {
          .admin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .admin-page {
            padding: 25px 14px 50px;
          }

          .admin-header {
            padding: 22px;
            flex-direction: column;
            align-items: flex-start;
          }

          .admin-grid {
            grid-template-columns: 1fr;
          }

          .admin-card {
            min-height: 175px;
          }

          .admin-info {
            align-items: flex-start;
          }
        }
          .header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 700px) {
  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
}
      `}</style>
    </>
  );
}