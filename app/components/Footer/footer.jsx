import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">


        <p className="footer__quote">
          Building simple things that feel meaningful.
        </p>

        <div className="footer__bottom">
         

          <div className="footer__socials">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;