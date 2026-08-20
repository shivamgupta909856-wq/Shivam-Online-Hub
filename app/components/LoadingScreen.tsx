"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3600);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${hide ? "loading-hide" : ""}`}>
      <div className="loading-content">

        <div className="loading-logo-wrapper">
          <div className="loading-ring"></div>

          <div className="loading-logo">
            <img
              src="/logo2.png"
              alt="Shivam Online Hub"
            />
          </div>
        </div>

        <h1>Shivam Online Hub</h1>

        <p>JAN SUVIDHA KENDRA</p>

        <div className="loading-line">
          <span></span>
        </div>

      </div>
    </div>
  );
}