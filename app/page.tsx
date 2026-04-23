"use client"
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/projects"
import Content from "./components/Content/content"
import Footer from "./components/Footer/footer"
import Contact from "./components/Contact/contact"
import Skill from "./components/Skill/skill"
import { useState } from "react"


export default function HomePage() {

  const [darkmode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkmode)
  }

  return (
    <main>
      <div>
        <NavBar handleClick={handleClick} darkmode={darkmode}/>
        <Hero />
        <Projects />
        <Content />
        <Skill />
        <Contact />
        <Footer />

      </div>
    </main>
  )
}