"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type Update = {
  id: number;
  title: string;
  organization: string;
  last_date: string;
  apply_link: string;
};

export default function UpdatesSection() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Updates fetch error:", error);
      } else {
        setUpdates(data || []);
      }

      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return null;
  }

  if (updates.length === 0) {
    return null;
  }

  return (
    <section className="home-updates">

      <div className="updates-heading">
        <span>LATEST UPDATES</span>

        <h2>
          Latest <strong>Vacancies & Notices</strong>
        </h2>

        <p>
          Latest vacancy, admission और important online updates.
        </p>
      </div>

      <div className="updates-grid">

        {updates.map((update) => (
          <div className="update-card" key={update.id}>

            <div className="update-top">
              <span className="update-badge">
                NEW
              </span>

              <span className="update-icon">
                📢
              </span>
            </div>

            <h3>{update.title}</h3>

            <p className="update-org">
              🏢 {update.organization}
            </p>

            <div className="update-date">
              📅 Last Date:{" "}
              {new Date(update.last_date).toLocaleDateString("en-IN")}
            </div>

            <a
              href={update.apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="update-apply"
            >
              Apply Now →
            </a>

          </div>
        ))}

      </div>

      <style jsx>{`
        .home-updates {
          padding: 80px 16px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .updates-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .updates-heading span {
          color: #58c7ff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .updates-heading h2 {
          color: white;
          font-size: 42px;
          margin: 12px 0;
          font-weight: 800;
        }

        .updates-heading h2 strong {
          color: #55cfff;
        }

        .updates-heading p {
          color: rgba(255,255,255,0.65);
          margin: 0;
          letter-spacing: normal;
          word-spacing: normal;
        }

        .updates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .update-card {
          padding: 25px;
          border-radius: 22px;
          background: rgba(20, 75, 150, 0.35);
          border: 1px solid rgba(90, 190, 255, 0.22);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 15px 45px rgba(0,0,0,0.25);
          transition: 0.3s ease;
        }

        .update-card:hover {
          transform: translateY(-7px);
          border-color: rgba(90, 210, 255, 0.5);
          box-shadow: 0 20px 55px rgba(0,100,255,0.25);
        }

        .update-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .update-badge {
          padding: 6px 11px;
          border-radius: 20px;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.35);
          color: #86efac;
          font-size: 11px;
          font-weight: 800;
        }

        .update-icon {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          font-size: 22px;
        }

        .update-card h3 {
          color: white;
          font-size: 20px;
          line-height: 1.4;
          margin: 0 0 12px;
        }

        .update-org {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          margin-bottom: 14px;
        }

        .update-date {
          color: #ffd166;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .update-apply {
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          padding: 12px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          text-decoration: none;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .update-apply:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 850px) {
          .updates-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .updates-heading h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 600px) {
          .home-updates {
            padding: 55px 12px;
          }

          .updates-grid {
            grid-template-columns: 1fr;
          }

          .updates-heading h2 {
            font-size: 28px;
          }

          .updates-heading span {
            letter-spacing: 2px;
          }
        }
      `}</style>

    </section>
  );
}