import "./projects.css";

const projects = [
  {
    num: "01",
    title: "Samsara AI",
    tagline: "AI-Powered Productivity Platform",
    url: "https://samsara-ai-chatbot.vercel.app",
    problem: "Lack of simple and affordable AI tools with persistent chat history and a clean user experience.",
    solution: "Built a full-stack AI chat application with authentication, real-time data sync, and OpenAI integration.",
    impact: "Demonstrates end-to-end development, API integration, and real-time application architecture.",
    tags: ["React", "Next.js", "Firebase", "OpenAI API", "Tailwind CSS"],
    badge: "✦ Personal project — deployed demo",
  },
  {
    num: "02",
    title: "Marketplace Platform",
    tagline: "Full-Stack Marketplace Application",
    url: "https://olx-clone-react-firebase-eight.vercel.app",
    problem: "Needed to demonstrate full-stack capabilities including authentication, database handling, and file uploads.",
    solution: "Designed and built a marketplace with listing creation, authentication flows, and Firestore-based data management.",
    impact: "Demonstrates full user flow implementation, including CRUD operations and real-time database usage.",
    tags: ["React", "Firebase", "Firestore", , "Responsive"],
    badge: "✦ Personal project — full user flow",
  },
  {
    num: "03",
    title: "Postly",
    tagline: "Developer Tool",
    url: "https://postly-web-coral.vercel.app",
    problem: "Developers often spend time manually inspecting and formatting raw API responses.",
    solution: "Built a REST API testing and response formatting tool with structured and readable output.",
    impact: "Demonstrates understanding of developer workflows and ability to build useful tooling.",
    tags: ["React", "REST API", "JavaScript", "JSON"],
    badge: "✦ Personal project — dev tool",
  },
  {
    num: "04",
    title: "Netflix UI Clone",
    tagline: "UI Engineering Challenge",
    url: "https://aaswne.github.io/Netflix-Clone/",
    problem: "Recreating a modern streaming UI requires precise layout, authentication, and API integration.",
    solution: "Built a pixel-close UI clone with Firebase authentication, TMDB API integration, and responsive components.",
    impact: "Demonstrates ability to replicate complex UI systems and integrate third-party services.",
    tags: ["React", "Firebase Auth", "TMDB API", "CSS"],
    badge: "✦ Personal project — UI replication",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">02 — Selected Work</div>

      <p className="section-subtext">
        Personal projects built to solve real-world problems and demonstrate production-level development skills.
      </p>

      <h2 className="section-title">
        Projects built<br />for real-world scenarios.
      </h2>

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
                  <div className="psi-label">What This Demonstrates</div>
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