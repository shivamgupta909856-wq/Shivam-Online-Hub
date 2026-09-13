"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type Update = {
  id: number;
  title: string;
  organization: string;
  last_date: string;
  apply_link: string;
  created_at?: string;
};

export default function UpdatesPage() {
  const supabase = createClient();

  const [updates, setUpdates] = useState<Update[]>([]);

  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [applyLink, setApplyLink] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================
  // FETCH UPDATES
  // =========================

  const fetchUpdates = async () => {
    setListLoading(true);

    const { data, error } = await supabase
      .from("updates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError("❌ Updates load nahi ho rahe.");
    } else {
      setUpdates(data || []);
    }

    setListLoading(false);
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setTitle("");
    setOrganization("");
    setLastDate("");
    setApplyLink("");
    setEditingId(null);
  };

  // =========================
  // ADD / EDIT UPDATE
  // =========================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    // Basic validation
    if (!title.trim() || !organization.trim() || !lastDate || !applyLink.trim()) {
      setError("❌ Please sabhi fields fill karo.");
      setLoading(false);
      return;
    }

    // Safe URL validation
    try {
      const url = new URL(applyLink.trim());

      if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new Error("Invalid protocol");
      }
    } catch {
      setError("❌ Apply Link valid http/https URL hona chahiye.");
      setLoading(false);
      return;
    }

    if (editingId !== null) {
      // UPDATE
      const { error } = await supabase
        .from("updates")
        .update({
          title: title.trim(),
          organization: organization.trim(),
          last_date: lastDate,
          apply_link: applyLink.trim(),
        })
        .eq("id", editingId);

      if (error) {
        console.error(error);
        setError("❌ Update edit nahi hua.");
        setLoading(false);
        return;
      }

      setMessage("✅ Update successfully edit ho gaya!");
    } else {
      // INSERT
      const { error } = await supabase.from("updates").insert({
        title: title.trim(),
        organization: organization.trim(),
        last_date: lastDate,
        apply_link: applyLink.trim(),
      });

      if (error) {
        console.error(error);
        setError("❌ Update save nahi hua.");
        setLoading(false);
        return;
      }

      setMessage("✅ Update successfully save ho gaya!");
    }

    resetForm();
    await fetchUpdates();

    setLoading(false);
  };

  // =========================
  // EDIT BUTTON
  // =========================

  const handleEdit = (update: Update) => {
    setEditingId(update.id);
    setTitle(update.title);
    setOrganization(update.organization);
    setLastDate(update.last_date);
    setApplyLink(update.apply_link);

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE BUTTON
  // =========================

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Kya aap is update ko permanently delete karna chahte ho?"
    );

    if (!confirmDelete) return;

    setMessage("");
    setError("");

    const { error } = await supabase
      .from("updates")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      setError("❌ Update delete nahi hua.");
      return;
    }

    setMessage("✅ Update successfully delete ho gaya!");

    await fetchUpdates();
  };

  return (
    <>
      <main className="updates-page">
        <div className="updates-container">

          {/* HEADER */}

          <div className="updates-header">
            <div className="updates-icon">📢</div>

            <div>
              <h1>Updates & Notices</h1>
              <p>
                Yahan se new vacancy / notice add, edit aur delete kar sakte ho.
              </p>
            </div>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="updates-form">

            <div className="form-group">
              <label>Vacancy / Notice Title</label>

              <input
                type="text"
                placeholder="Example: SSC CHSL Recruitment 2026"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={150}
                required
              />
            </div>

            <div className="form-group">
              <label>Organization Name</label>

              <input
                type="text"
                placeholder="Example: Staff Selection Commission"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                maxLength={120}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Date</label>

              <input
                type="date"
                value={lastDate}
                onChange={(e) => setLastDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Apply Link</label>

              <input
                type="url"
                placeholder="https://example.com/apply"
                value={applyLink}
                onChange={(e) => setApplyLink(e.target.value)}
                required
              />
            </div>

            {message && (
              <div className="success-message">
                {message}
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-buttons">

              <button
                type="submit"
                disabled={loading}
                className="save-button"
              >
                {loading
                  ? "⏳ Saving..."
                  : editingId !== null
                  ? "✏️ Update Notice"
                  : "➕ Add Update"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    resetForm();
                    setMessage("");
                    setError("");
                  }}
                >
                  ✖ Cancel Edit
                </button>
              )}

            </div>
          </form>

          {/* EXISTING UPDATES */}

          <div className="existing-section">

            <div className="section-title">
              <span>📋</span>
              <div>
                <h2>Existing Updates</h2>
                <p>Website par currently available updates.</p>
              </div>
            </div>

            {listLoading ? (
              <div className="loading-box">
                ⏳ Loading updates...
              </div>
            ) : updates.length === 0 ? (
              <div className="empty-box">
                📭 Abhi koi update available nahi hai.
              </div>
            ) : (
              <div className="updates-list">

                {updates.map((update) => (
                  <div className="update-item" key={update.id}>

                    <div className="update-content">

                      <div className="update-badge">
                        NEW
                      </div>

                      <h3>{update.title}</h3>

                      <p className="organization">
                        🏢 {update.organization}
                      </p>

                      <p className="date">
                        📅 Last Date:{" "}
                        {new Date(update.last_date).toLocaleDateString("en-IN")}
                      </p>

                    </div>

                    <div className="update-actions">

                      <button
                        type="button"
                        className="edit-button"
                        onClick={() => handleEdit(update)}
                      >
                        ✏️ Edit
                      </button>

                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => handleDelete(update.id)}
                      >
                        🗑️ Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>
        </div>
      </main>

      <style jsx>{`

        .updates-page {
          min-height: calc(100vh - 70px);
          padding: 110px 16px 50px;
        }

        .updates-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .updates-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 24px;
        }

        .updates-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.12);
          font-size: 28px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }

        .updates-header h1 {
          margin: 0;
          color: white;
          font-size: 32px;
          font-weight: 800;
        }

        .updates-header p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
        }

        .updates-form,
        .existing-section {
          padding: 30px;
          border-radius: 26px;
          background: rgba(10, 35, 90, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow:
            0 20px 70px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .updates-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
        }

        .form-group input {
          width: 100%;
          box-sizing: border-box;
          padding: 15px 16px;
          border-radius: 13px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.22);
          color: white;
          font-size: 15px;
          outline: none;
          transition: 0.25s ease;
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.42);
        }

        .form-group input:focus {
          border-color: rgba(80, 170, 255, 0.8);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 0 3px rgba(40, 130, 255, 0.12);
        }

        .form-group input[type="date"] {
          color-scheme: dark;
        }

        .form-buttons {
          display: flex;
          gap: 12px;
          margin-top: 5px;
        }

        .save-button,
        .cancel-button {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 14px;
          color: white;
          font-size: 16px;
          font-weight: 750;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .save-button {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
        }

        .cancel-button {
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .save-button:hover,
        .cancel-button:hover,
        .edit-button:hover,
        .delete-button:hover {
          transform: translateY(-2px);
        }

        .save-button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .success-message,
        .error-message {
          padding: 13px 15px;
          border-radius: 12px;
          font-weight: 600;
        }

        .success-message {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          color: #86efac;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }

        .existing-section {
          margin-top: 28px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .section-title > span {
          font-size: 26px;
        }

        .section-title h2 {
          margin: 0;
          color: white;
          font-size: 22px;
        }

        .section-title p {
          margin: 4px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
        }

        .updates-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .update-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px;
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.10);
          transition: 0.25s ease;
        }

        .update-item:hover {
          border-color: rgba(255, 255, 255, 0.22);
          transform: translateY(-2px);
        }

        .update-content {
          min-width: 0;
        }

        .update-badge {
          display: inline-block;
          margin-bottom: 8px;
          padding: 4px 8px;
          border-radius: 7px;
          background: rgba(37, 99, 235, 0.18);
          border: 1px solid rgba(96, 165, 250, 0.28);
          color: #93c5fd;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .update-content h3 {
          margin: 0;
          color: white;
          font-size: 17px;
          line-height: 1.4;
        }

        .organization,
        .date {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .update-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .edit-button,
        .delete-button {
          padding: 10px 13px;
          border-radius: 10px;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .edit-button {
          background: rgba(37, 99, 235, 0.22);
          border: 1px solid rgba(96, 165, 250, 0.30);
        }

        .delete-button {
          background: rgba(239, 68, 68, 0.16);
          border: 1px solid rgba(248, 113, 113, 0.28);
        }

        .loading-box,
        .empty-box {
          padding: 25px;
          text-align: center;
          color: rgba(255, 255, 255, 0.65);
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 650px) {

          .updates-page {
            padding: 95px 12px 30px;
          }

          .updates-header {
            align-items: flex-start;
          }

          .updates-header h1 {
            font-size: 25px;
          }

          .updates-header p {
            font-size: 13px;
          }

          .updates-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .updates-form,
          .existing-section {
            padding: 20px 16px;
            border-radius: 20px;
          }

          .form-buttons {
            flex-direction: column;
          }

          .update-item {
            align-items: flex-start;
            flex-direction: column;
          }

          .update-actions {
            width: 100%;
          }

          .edit-button,
          .delete-button {
            flex: 1;
          }
        }

      `}</style>
    </>
  );
}