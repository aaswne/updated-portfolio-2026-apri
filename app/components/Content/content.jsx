import "./content.css";

function Articles() {
  const articles = [
    {
      id: 1,
      title: "How I Built a JSON to XML & CSV Converting Tool Using Next.js",
      description:
        "Building a simple tool to convert JSON into XML and CSV.",
      date: "April 15",
      link: "https://medium.com/@ashhwin041/appphow-i-built-a-json-to-xml-csv-converter-using-next-js-4ceafbe02480",
    },
    {
      id: 2,
      title: "Building Samsara AI: My First AI Chat Web Application",
      description:
        "How I built an AI chat app using Next.js and Firebase while improving my frontend skills.",
      date: "Mar 14",
      link: "https://medium.com/@ashhwin041/building-samsara-ai-my-first-ai-chat-web-application-with-next-js-and-firebase-106b1a510fa2",
    },
  ];

  return (
    <section className="articles" id="articles">
      <div className="articles__container">
        <span className="articles__label">Articles</span>
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
                <h3 className="article__title">{article.title}</h3>
                <p className="article__description">{article.description}</p>
              </div>

              <span className="article__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;