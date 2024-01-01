import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>

    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="About me">Parallax</section>
    <section>About me</section>
    <section id="Skills">Parallax</section>
    <section >Skills</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    
    <section id="Contact">Contact</section>
    





  </div>;
};

export default App;
