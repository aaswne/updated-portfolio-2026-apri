import "./Hero.css";
import Link from "next/link";
function Hero() {
 
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <span className="hero__label">Frontend Developer</span>

        <h1 className="hero__title">
          Building modern <br />
          web experiences.
        </h1>

        <p className="hero__description">
          I design and build clean, scalable web applications focused on
          simplicity, performance, and user experience.
        </p>

        <div className="hero__actions">
          <Link href="/caseStudy" className="btn btn--primary">
            View Case Study
          </Link>
          <a href="#contact" className="btn btn--outline">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
