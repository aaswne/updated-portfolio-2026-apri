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
              based in India with a sharp focus on crafting scalable,
              user-first web applications using <strong>React</strong> and{" "}
              <strong>Next.js</strong>.
            </p>

            <p>
              I care deeply about the intersection of{" "}
              <strong>design and engineering</strong> — writing clean,
              maintainable code that doesn&apos;t just work, but feels right to
              use.
            </p>

            <p>
              When I&apos;m not building, I write about the things I learn —
              because teaching something is the best way to understand it.
            </p>

            <div className="about-stats">
              <div className="stat-cell">
                <div className="stat-number">4+</div>
                <div className="stat-label">Shipped Projects</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">2</div>
                <div className="stat-label">Technical Articles</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years in React</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">∞</div>
                <div className="stat-label">Problems Enjoyed</div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <ul className="about-values">
              <li>
                <span className="val-icon">01</span>
                <div>
                  <strong>Performance-first mindset</strong>
                  I ship fast. Lazy loading, code splitting, and Lighthouse
                  scores are part of my process.
                </div>
              </li>

              <li>
                <span className="val-icon">02</span>
                <div>
                  <strong>Design sensibility</strong>
                  Pixel-perfect implementations that match intent, not just
                  specs.
                </div>
              </li>

              <li>
                <span className="val-icon">03</span>
                <div>
                  <strong>AI-native builder</strong>
                  I integrate LLMs and APIs pragmatically into real products.
                </div>
              </li>

              <li>
                <span className="val-icon">04</span>
                <div>
                  <strong>Clear communicator</strong>
                  I write, document, and explain so teams can work better.
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
              A behind-the-scenes look at designing and shipping a developer
              utility tool.
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
              How I designed and shipped an AI-powered chat platform with
              Next.js and Firebase.
            </p>
            <div className="article-link">Read on Medium ↗</div>
          </a>
        </div>
      </section>
    </>
  );
}