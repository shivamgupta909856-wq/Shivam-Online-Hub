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

            <small>Jan Suvidha Kendra</small>
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

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
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