import Skill from "./components/Skill";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero"/>
      <Expertise id="expertise"/>
      <Skill  id="skills"/>
      <Project id="projects"/>
      <Contact />
    </>
  );
};

export default App;
