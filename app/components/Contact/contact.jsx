import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        <span className="contact__label">Contact</span>

        <h2 className="contact__title">
          Let’s build something great together.
        </h2>

        <p className="contact__text">
          Available for On-site and Remote frontend roles.
        </p>

        <div className="contact__actions">
          <a href="mailto:ashhwin041@gmail.com" className="btn btn--primary">
            Hire Me
          </a>

          <a href="/AswinKrishnaSDE.pdff" className="btn btn--outline" download>
             Resume
          </a>
        </div>

        <div className="contact__meta">
          <span>Based in India</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;