import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        <p className="contact__label">Contact</p>

        <h2 className="contact__title">
          Get in touch.
        </h2>

        <p className="contact__text">
          Available for projects and opportunities.
        </p>

        <div className="contact__list">
          <a href="mailto:yourmail@example.com" className="contact__item">
            <span>Email</span>
            <span>yourmail@example.com</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span>LinkedIn</span>
            <span>Profile</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span>GitHub</span>
            <span>Projects</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;