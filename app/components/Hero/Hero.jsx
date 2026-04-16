import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">

        <p className="hero__label">FrontEnd Developer</p>

        <h1 className="hero__title">
          Building modern web
          <br />
          experiences.
        </h1>

        <p className="hero__description">
          I design and build clean, scalable web applications with a focus on
          simplicity, performance, and user experience.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn primary">
            View Work
          </a>
          <a href="#contact" className="hero__btn">
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;