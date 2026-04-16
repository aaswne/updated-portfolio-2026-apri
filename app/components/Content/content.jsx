import "./content.css";

function Articles() {
  const articles = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description:
        "A simple guide to useState, useEffect, and how hooks improve your React code.",
      date: "Aug 2025",
      link: "#",
    },
    {
      id: 2,
      title: "CSS Layouts Made Easy",
      description:
        "Learn Flexbox and Grid with real examples to build responsive layouts.",
      date: "Jul 2025",
      link: "#",
    },
    {
      id: 3,
      title: "Building Clean UI Components",
      description:
        "How to structure reusable components for scalable frontend projects.",
      date: "Jun 2025",
      link: "#",
    },
  ];

  return (
    <section className="articles" id="articles">
      <div className="articles__container">
        <p className="articles__label">Articles</p>
        <h2 className="articles__title">Writing & notes.</h2>

        <div className="articles__list">
          {articles.map((article) => (
            <a
              href={article.link}
              key={article.id}
              className="article__row"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="article__meta">
                <span className="article__date">{article.date}</span>
              </div>

              <div className="article__content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>

              <span className="article__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;