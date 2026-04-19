import "./skill.css";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript (Basic)", "C"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "React", "Next.js", "Responsive Design"],
    },
    {
      title: "Styling",
      items: ["Tailwind CSS", "CSS Modules", "UI/UX ","Bootstrap"],
    },
    {
      title: "AI & APIs",
      items: ["OpenAI API", "AI Integration", "REST API"],
    },
    {
      title: "Backend Services",
      items: ["Firebase", "Firestore"],
    },
    {
      title: "Deployment & Tools",
      items: ["Git", "GitHub", "Vercel", "Netlify"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills__container">

        <span className="skills__label">Skills</span>

        <h2 className="skills__title">Tools I use to build products.</h2>

        <p className="skills__text">
          A focused set of programming languages, frontend technologies, and tools I use to build modern web applications.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <div className="skills__card" key={index}>
              <h3 className="skills__card-title">{group.title}</h3>

              <div className="skills__tags">
                {group.items.map((item, i) => (
                  <span className="skills__tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;