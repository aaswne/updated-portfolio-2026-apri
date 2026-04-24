"use client";
import { useState } from "react";
import Link from "next/link";
import "./NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span>Aswin Krishna T</span>
      </div>

      <nav className={`navbar__menu ${menuOpen ? "active" : ""}`}>
        <Link href="#about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link href="#articles" onClick={() => setMenuOpen(false)}>
          Articles
        </Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link href="./caseStudy">
Case Study 
        </Link>
      </nav>

      <button
        className={`navbar__toggle ${menuOpen ? "active" : ""}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}