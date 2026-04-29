import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-text">React</div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        Scroll
      </div>

      <div className="hero-tag">
        Available for Frontend Roles · India & Remote
      </div>

      <h1>
        Building interfaces <em>users</em> remember.
      </h1>

      <div className="hero-meta">
        <p className="hero-desc">
          Frontend engineer specialising in React and Next.js. I translate
          complex requirements into fast, accessible, and visually precise web
          products.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a
            href="https://aswinkrishna.in/AswinKrishnaSDE.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}