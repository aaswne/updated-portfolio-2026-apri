"use client";
import { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#" className="nav__logo">AK — 2026</a>

      <ul className="nav__links">
        {["about", "projects", "skills", "contact"].map((s) => (
          <li key={s}>
            <a href={`#${s}`} className="nav__link">{s}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:ashhwin041@gmail.com" className="nav__cta">
        Hire Me →
      </a>
    </nav>
  );
}