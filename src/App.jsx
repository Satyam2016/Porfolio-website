import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <>
    <Navbar />
      <HeroSection />
      <About />
    <Skills />
    <Experience />
    <Project />
    <Contact />
    </>
  )
}

export default App
