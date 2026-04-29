import "./projects.css";

const projects = [
  {
    num: "01",
    title: "Samsara AI",
    tagline: "AI-Powered Productivity Platform",
    url: "https://samsara-ai-chatbot.vercel.app",
    problem: "No affordable AI chat tool with persistent history and clean UX for everyday users.",
    solution: "Built a full-stack AI chat platform with Firebase auth, real-time sync, and OpenAI integration.",
    impact: "Live on Vercel, publicly accessible — demonstrates production AI integration skills.",
    tags: ["React", "Next.js", "Firebase", "OpenAI API", "Tailwind CSS"],
    badge: "✦ Shipped & live in production",
  },
  {
    num: "02",
    title: "Marketplace Platform",
    tagline: "Full-Stack Marketplace Application",
    url: "https://olx-clone-react-firebase-eight.vercel.app",
    problem: "Needed to demonstrate full-stack ownership: auth, database, file uploads, and real-time data.",
    solution: "Designed and built a marketplace with listing creation, auth flows, and Firestore-backed data.",
    impact: "Covers the complete user journey — from signup to buying/selling — in a production-grade UI.",
    tags: ["React", "Firebase", "Firestore", "Node.js", "Responsive"],
    badge: "✦ Full user journey implemented",
  },
  {
    num: "03",
    title: "Postly",
    tagline: "Developer Tool",
    url: "https://postly-web-coral.vercel.app",
    problem: "Developers waste time manually inspecting and reshaping raw API responses.",
    solution: "Built a REST API testing and response formatting tool with readable, structured output.",
    impact: "Demonstrates understanding of developer workflows and ability to build tooling.",
    tags: ["React", "REST API", "JavaScript", "JSON"],
    badge: "✦ Built for real developer needs",
  },
  {
    num: "04",
    title: "Netflix UI Clone",
    tagline: "UI Engineering Challenge",
    url: "https://aaswne.github.io/Netflix-Clone/",
    problem: "Recreating a streaming interface requires precision layout, auth, and live data skills.",
    solution: "Built a pixel-close clone with Firebase auth, TMDB API integration, and responsive carousels.",
    impact: "Proves ability to replicate complex UI systems with third-party auth and data APIs.",
    tags: ["React", "Firebase Auth", "TMDB API", "CSS"],
    badge: "✦ Auth + live API data",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">02 — Selected Work</div>
      <h2 className="section-title">Projects built<br />for real users.</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <a
            key={project.num}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-item"
          >
            <div className="project-num">{project.num}</div>

            <div className="project-body">
              <div className="project-tagline">{project.tagline}</div>
              <h3>{project.title}</h3>

              <div className="project-psi">
                <div className="psi-block">
                  <div className="psi-label">Problem</div>
                  <div className="psi-text">{project.problem}</div>
                </div>

                <div className="psi-block">
                  <div className="psi-label">Solution</div>
                  <div className="psi-text">{project.solution}</div>
                </div>

                <div className="psi-block">
                  <div className="psi-label">Impact</div>
                  <div className="psi-text">{project.impact}</div>
                </div>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-impact">{project.badge}</div>
            </div>

            <div className="project-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}