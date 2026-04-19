export default function CaseStudyPage() {
  const projects = [
    {
      id: "samsara-ai",
      title: "Samsara AI",
      description: "AI-powered application for intelligent workflows.",
      image: "images/samsara.webp",
      overview:
        "Samsara AI is designed to automate workflows using AI-driven logic. It focuses on improving productivity by simplifying repetitive tasks and providing intelligent suggestions.",
      tech: [
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
        { name: "Gemini AI", url: "https://gemini.google.com/" },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
      ],
      features: [
        "AI-based workflow automation",
        "Clean and responsive UI",
        "Fast performance",
      ],
      challenges:
        "Handling dynamic data flow and integrating AI responses efficiently while maintaining performance and UI consistency.",
      github: "https://github.com/aaswne/samsara-ai-chatbot",
      live: "https://samsara-ai-chatbot.vercel.app",
      timeline: "2 Weeks",
      role: "Frontend Developer",
      solution:
        "A modern and clean interface was created to make AI workflows easier to understand and use. The layout focuses on usability, speed, and clarity.",
      takeaway:
        "This project improved my ability to work with AI-based interfaces, dynamic rendering, and responsive UI design.",
    },
    {
      id: "olx-clone",
      title: "Full Stack Marketplace",
      description: "Marketplace app for buying and selling products.",
      image: "/images/olx.webp",
      overview:
        "A full-stack marketplace platform modeled after OLX, allowing users to list, browse, and purchase products. Features include real-time updates, authentication, and a smooth user experience.",
      tech: [
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Firebase", url: "https://firebase.google.com" },
        {
          name: "Firestore",
          url: "https://firebase.google.com/docs/firestore",
        },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
      ],
      features: [
        "Product listing system",
        "User authentication",
        "Real-time updates",
      ],
      challenges:
        "Handling real-time data updates and ensuring a smooth user experience.",
      github: "https://github.com/aaswne/olx-clone-react-firebase",
      live: "https://olx-clone-react-firebase-eight.vercel.app",
      timeline: "3 Weeks",
      role: "Full Stack Developer",
      solution:
        "The platform was structured with a clean layout, fast product browsing, and real-time updates to create a familiar marketplace experience.",
      takeaway:
        "This project helped me understand authentication, database structure, and real-time app behavior.",
    },
    {
      id: "postly",
      title: "Postly",
      description: "Developer tool for API data conversion and formatting.",
      image: "/images/postly.webp",
      overview:
        "Postly is a developer-focused tool that allows users to convert, format, and manage API data such as JSON and XML quickly. It provides a clean UI and simplifies workflows for handling structured data.",
      tech: [
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "Vercel", url: "https://vercel.com" },
      ],
      features: [
        "JSON & XML data conversion",
        "Clean and minimal UI",
        "Fast and responsive design",
        "Developer-friendly workflow",
      ],
      challenges:
        "Handling large data formatting efficiently while maintaining performance and ensuring a smooth user experience across devices.",
      github: "#",
      live: "https://postly-web-coral.vercel.app",
      timeline: "1 Week",
      role: "Frontend Developer",
      solution:
        "A simple interface with focused sections was built so developers can quickly paste, format, and manage structured data.",
      takeaway:
        "This project strengthened my skills in building utility tools with a minimal and efficient user experience.",
    },
  ];

  return (
    <main className="case-study-page">
      <div className="case-study-page__container">
        <span className="case-study-page__label">Case Studies</span>

        <h1 className="case-study-page__title">
          Selected projects with process, tools, and outcomes.
        </h1>

        <p className="case-study-page__intro">
          Here are some of my featured projects with a short case study for each
          one, showing the goal, challenges, solution, and final result.
        </p>

        <div className="case-study-list">
          {projects.map((project) => (
            <article key={project.id} className="case-study-card">
              <div className="case-study-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="case-study-card__content">
                <span className="case-study-card__tag">Case Study</span>

                <h2 className="case-study-card__title">{project.title}</h2>
                <p className="case-study-card__description">
                  {project.description}
                </p>

                <section className="case-study-card__section">
                  <h3>Overview</h3>
                  <p>{project.overview}</p>
                </section>

                <div className="case-study-card__grid">
                  <div className="case-study-card__info">
                    <h4>Role</h4>
                    <p>{project.role}</p>
                  </div>

                  <div className="case-study-card__info">
                    <h4>Timeline</h4>
                    <p>{project.timeline}</p>
                  </div>

                  <div className="case-study-card__info">
                    <h4>Tools</h4>
                    <p>{project.tech.map((item) => item.name).join(", ")}</p>
                  </div>
                </div>

                <section className="case-study-card__section">
                  <h3>Challenges</h3>
                  <p>{project.challenges}</p>
                </section>

                <section className="case-study-card__section">
                  <h3>Solution</h3>
                  <p>{project.solution}</p>
                </section>

                <section className="case-study-card__section">
                  <h3>Key Features</h3>
                  <div className="case-study-card__tags">
                    {project.features.map((feature, index) => (
                      <span key={index}>{feature}</span>
                    ))}
                  </div>
                </section>

                <section className="case-study-card__section">
                  <h3>Tech Stack</h3>
                  <div className="case-study-card__tech">
                    {project.tech.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="case-study-card__section">
                  <h3>Takeaway</h3>
                  <p>{project.takeaway}</p>
                </section>

                <div className="case-study-card__actions">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}