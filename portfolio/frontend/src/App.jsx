
import Hero from "./components/Hero";
import Contact from "./components/Contact"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Projects"
import Navbar from "./components/Navbar"


export default function App() {
  return (
    <div className="font-sans">
      
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />

    </div>
  );
}
