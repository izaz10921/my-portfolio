import "./app.scss"
import AboutMe from "./components/aboutMe/AboutMe";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

const App = () => <div>

  <section id="Homepage">
    <Navbar></Navbar>
    <Hero></Hero>
  </section>

  <section id="About me"><AboutMe /></section>
  <section id="Skills"><Parallax type="Skills" /></section>
  <section>Skills</section>
  <section id="Projects"><Parallax type="portfolio" /></section>
  <Projects></Projects>

  <section id="Contact">Contact</section>






</div>;

export default App;
