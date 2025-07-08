import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';

function App() {
  return (
    < div className="bg-black">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>

          <section id="skills">
        <Skills />
      </section>


       <section id="education">
        <Education />
      </section>

  
    

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
