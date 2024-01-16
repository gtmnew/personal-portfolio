import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCards from "./components/HeroCards/HeroCards";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Servicess/Services";
import Projects from "./components/Projectss/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroCards />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
