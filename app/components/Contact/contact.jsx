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
      </div>
    </section>
  );
}