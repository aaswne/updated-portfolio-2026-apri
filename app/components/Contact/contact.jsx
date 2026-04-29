import "./contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <div className="section-label">05 — Contact</div>
          <h2>Let&apos;s build something <em>great.</em></h2>

          <div className="contact-status">
            <span className="status-dot"></span>
            Open to opportunities — on-site &amp; remote
          </div>

          <p>
            I&apos;m actively looking for frontend roles where I can contribute
            to meaningful products and grow within a strong engineering team.
          </p>

          <a href="mailto:ashhwin041@gmail.com" className="btn-primary">
            Send me an email →
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:ashhwin041@gmail.com" className="contact-link">
            <div>
              <div className="contact-link-label">Email</div>
              <div className="contact-link-value">ashhwin041@gmail.com</div>
            </div>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aswin-krishna-07a848252/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div>
              <div className="contact-link-label">LinkedIn</div>
              <div className="contact-link-value">aswin-krishna-07a848252</div>
            </div>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://github.com/aaswne"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div>
              <div className="contact-link-label">GitHub</div>
              <div className="contact-link-value">github.com/aaswne</div>
            </div>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://x.com/ashhwin041"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div>
              <div className="contact-link-label">Twitter / X</div>
              <div className="contact-link-value">@ashhwin041</div>
            </div>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://aswinkrishna.in/AswinKrishnaSDE.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div>
              <div className="contact-link-label">Resume</div>
              <div className="contact-link-value">Download PDF</div>
            </div>
            <span className="contact-link-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}