import "./skill.css";

const skillGroups = [
  {
    title: "Core Languages",
    skills: [
      ["JavaScript (ES2024)", "92%"],
      ["TypeScript", "58%"],
      ["HTML5 / CSS3", "95%"],
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      ["React", "90%"],
      ["Next.js", "78%"],
      ["Tailwind CSS", "88%"],
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      ["Firebase / Firestore", "82%"],
      ["REST APIs", "85%"],
      ["Node.js", "55%"],
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      ["OpenAI API", "80%"],
      ["AI App Architecture", "72%"],
      ["Prompt Engineering", "70%"],
    ],
  },
  {
    title: "Tooling & DevOps",
    skills: [
      ["Git / GitHub", "87%"],
      ["Vercel / Netlify", "90%"],
      ["Vite / Webpack", "65%"],
    ],
  },
  {
    title: "Currently Growing",
    skills: [
      ["TypeScript (advancing)", "58%"],
      ["Testing (Jest / RTL)", "40%"],
      ["System Design", "50%"],
    ],
  },
];

export default function Skill() {
  return (
    <section id="skills">
      <div className="section-label">03 — Skills</div>
      <h2 className="section-title">What I bring<br />to your team.</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>

            <div className="skill-items">
              {group.skills.map(([name, percent]) => (
                <div className="skill-row" key={name}>
                  <span className="skill-name">{name}</span>

                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: percent }}
                    ></div>
                  </div>

                  <span className="skill-pct">
                    {group.title === "Currently Growing" ? "↑" : percent}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}