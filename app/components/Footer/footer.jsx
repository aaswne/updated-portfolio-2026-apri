import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        © 2026 Aswin Krishna T — Frontend Engineer, India
      </div>

      <div className="footer-links">
        <a href="https://github.com/aaswne" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aswin-krishna-07a848252/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://x.com/ashhwin041" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a
          href="https://medium.com/@ashhwin041"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
      </div>
    </footer>
  );
}