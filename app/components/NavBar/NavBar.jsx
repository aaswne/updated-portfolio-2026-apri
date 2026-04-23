"use client";
import { useState } from "react";
import Link from "next/link";
import "./NavBar.css";
import { CiSun } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";



export default function Navbar({handleClick,darkmode}) {
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
        <button  onClick={handleClick} className="button" >{darkmode?<CiSun className="icons" />:<IoIosMoon className="icons" />}</button>
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