import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__label">Get in Touch</p>

        <p className="footer__quote">
          Building clean, user-friendly digital experiences.{" "}
        </p>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Aswin Krishna T</p>

          <div className="footer__socials">
            <a
              href="https://x.com/ashhwin041"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/aaswne"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aswin-krishna-07a848252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
