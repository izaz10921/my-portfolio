import { useEffect, useState } from "react";
import "./app.scss"
import AboutMe from "./components/aboutMe/AboutMe";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Loading from "./Loading/Loading";
import Contact from "./components/contact/Contact";
import Skill from "./components/skill/Skill";

const App = () => {
const [isLoading,setIsLoading] = useState(true);

useEffect( () =>{
  setTimeout( () =>{
setIsLoading(false);
  },2500)
})

 return(
  <div>
{
  isLoading ? (<Loading></Loading> ): (
    <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
  
    <section id="About me"><AboutMe /></section>
    <section id="Skills"><Skill></Skill></section>
    <section id="Projects">service</section>
  
    
  
    <Projects ></Projects>
    <section id="Contact"><Contact></Contact></section></div>
  )
}






</div>
 );
}

export default App;