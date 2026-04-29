import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <a href="#" className="nav-logo">AK — 2026</a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#writing">Writing</a></li>
      </ul>

      <a href="mailto:ashhwin041@gmail.com" className="nav-cta">
        Hire Me →
      </a>
    </nav>
  );
}