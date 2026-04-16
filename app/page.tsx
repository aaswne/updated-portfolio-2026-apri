import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/projects"
import Content from "./components/Content/content"
import Footer from "./components/Footer/footer"
import Contact from "./components/Contact/contact"


export default function HomePage() {
  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "28px",
          overflow: "hidden",
        }}
      >
        <NavBar />
        <Hero/>
        <Projects/>
        <Content/>
        <Contact/>
        <Footer/>
   
      </div>
    </main>
  )
}