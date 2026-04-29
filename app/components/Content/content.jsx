import "./content.css";

export default function Content() {
  return (
    <>
      <section id="about">
        <div className="section-label">01 — About</div>
        <h2 className="section-title">Turning ideas<br />into products.</h2>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m <strong>Aswin Krishna T</strong>, a frontend developer
              based in India, focused on building clean and scalable web
              applications using <strong>React</strong> and{" "}
              <strong>Next.js</strong>.
            </p>

            <p>
              I enjoy working at the intersection of{" "}
              <strong>design and engineering</strong> — writing code that is not
              only maintainable, but also delivers a smooth and intuitive user
              experience.
            </p>

            <p>
              I also share what I learn through writing, which helps me deepen my
              understanding and communicate ideas more clearly.
            </p>

            <div className="about-stats">
              <div className="stat-cell">
                <div className="stat-number">4+</div>
                <div className="stat-label">Personal Projects</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">2</div>
                <div className="stat-label">Technical Articles</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Learning React</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">∞</div>
                <div className="stat-label">Problems Explored</div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <ul className="about-values">
              <li>
                <span className="val-icon">01</span>
                <div>
                  <strong>Performance-focused</strong>
                  I focus on building fast and efficient applications using
                  techniques like lazy loading and code splitting.
                </div>
              </li>

              <li>
                <span className="val-icon">02</span>
                <div>
                  <strong>Design awareness</strong>
                  I aim for clean, consistent UI that aligns with user intent
                  and usability.
                </div>
              </li>

              <li>
                <span className="val-icon">03</span>
                <div>
                  <strong>Modern development approach</strong>
                  I work with APIs and modern tools to build practical,
                  real-world applications.
                </div>
              </li>

              <li>
                <span className="val-icon">04</span>
                <div>
                  <strong>Clear communication</strong>
                  I document my work and share knowledge to improve collaboration
                  and learning.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="writing">
        <div className="section-label">04 — Writing</div>
        <h2 className="section-title">Thinking<br />out loud.</h2>

        <div className="articles-grid">
          <a
            href="https://medium.com/@ashhwin041/appphow-i-built-a-json-to-xml-csv-converter-using-next-js-4ceafbe02480"
            target="_blank"
            rel="noreferrer"
            className="article-card"
          >
            <div className="article-date">April 15, 2025</div>
            <h3>How I Built a JSON to XML & CSV Converter Using Next.js</h3>
            <p>
              A walkthrough of building a developer utility tool and the
              decisions behind its design and implementation.
            </p>
            <div className="article-link">Read on Medium ↗</div>
          </a>

          <a
            href="https://medium.com/@ashhwin041/building-samsara-ai-my-first-ai-chat-web-application-with-next-js-and-firebase-106b1a510fa2"
            target="_blank"
            rel="noreferrer"
            className="article-card"
          >
            <div className="article-date">March 14, 2025</div>
            <h3>Building Samsara AI: My First AI Chat Application</h3>
            <p>
              A breakdown of how I built an AI chat application using Next.js,
              Firebase, and external APIs.
            </p>
            <div className="article-link">Read on Medium ↗</div>
          </a>
        </div>
      </section>
    </>
  );
}