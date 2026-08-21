"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}
        <Link
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/logo2.png"
            alt="Shivam Online Hub"
          />

          <div className="navbar-brand">
            <strong>
              Shivam <span>Online Hub</span>
            </strong>

            <small>
              Jan Suvidha Kendra
            </small>
          </div>
        </Link>


        {/* DESKTOP MENU */}
        <div className="navbar-menu">

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </div>


        {/* MOBILE BUTTON */}
        <button
          className={`navbar-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <Link href="/" onClick={closeMenu}>
          🏠 Home
        </Link>

        <Link href="/services" onClick={closeMenu}>
          ⚡ Services
        </Link>

        <Link href="/about" onClick={closeMenu}>
          ℹ️ About
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          📞 Contact
        </Link>

      </div>

    </nav>
  );
}
/* FINAL MOBILE NAVBAR FIX */

@media (max-width: 768px) {

  .navbar-inner {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }

  .navbar-toggle {
    display: flex !important;

    width: 44px !important;
    height: 44px !important;

    min-width: 44px !important;
    min-height: 44px !important;

    padding: 8px !important;

    margin-left: auto !important;

    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 5px !important;

    background: rgba(10, 30, 60, 0.95) !important;

    border: 1px solid
      rgba(90, 220, 255, 0.45) !important;

    border-radius: 12px !important;

    opacity: 1 !important;
    visibility: visible !important;

    position: relative !important;
    z-index: 99999 !important;

    cursor: pointer !important;
  }

  .navbar-toggle span {
    display: block !important;

    width: 23px !important;
    height: 3px !important;

    min-width: 23px !important;
    min-height: 3px !important;

    background: #ffffff !important;

    border-radius: 5px !important;

    opacity: 1 !important;
    visibility: visible !important;
  }

  .navbar-menu {
    display: none !important;
  }

  .navbar-logo {
    max-width: calc(100% - 60px) !important;
  }

  .mobile-menu {
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;

    z-index: 99998 !important;
  }

  .mobile-menu.open {
    display: flex !important;
  }
}