import React from "react";
import "./projects.css";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Samsara AI",
      description: "AI-powered platform for intelligent workflows.",
      tech: ["React", "CSS", "API"],
      image: "/images/samsara.webp",
      link: "https://samsara-ai-chatbot.vercel.app",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Streaming UI with auth and movie data.",
      tech: ["React", "Firebase", "TMDB"],
      image: "/images/netflix.webp",
      link: "https://aaswne.github.io/Netflix-Clone/",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Full-stack buying & selling platform.",
      tech: ["React", "Node", "MongoDB"],
      image: "/images/olx.webp",
      link: "https://olx-clone-react-firebase-eight.vercel.app",
    },
    {
      id: 4,
      title: "Postly",
      description: "Tool for API data formatting.",
      tech: ["React", "JS", "REST"],
      image: "/images/postly.webp",
      link: "https://postly-web-coral.vercel.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        <p className="projects__label">Projects</p>
        <h2 className="projects__title">Selected work.</h2>

        <div className="projects__grid">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project__card"
            >
              <div className="project__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project__tech">
                  {project.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;