"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AdminLogout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    const supabase = createClient();

    await supabase.auth.signOut();

    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="logout-button"
    >
      {loading ? "⏳ Logging out..." : "🚪 Logout"}
      
      <style jsx>{`
        .logout-button {
          border: 1px solid rgba(248, 113, 113, 0.3);
          background: rgba(239, 68, 68, 0.12);
          color: #fca5a5;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .logout-button:hover {
          transform: translateY(-2px);
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(248, 113, 113, 0.5);
        }

        .logout-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </button>
  );
}