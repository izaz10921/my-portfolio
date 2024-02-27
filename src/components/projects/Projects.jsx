import { useRef } from "react";
import "./projects.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { FaLink } from "react-icons/fa";

const items = [
    {
        id: 1,
        title:"Restaurant Management Website",
        img:"https://i.ibb.co/y09Jncx/Screenshot-1-removebg-preview.jpg",
        desc:"Top features",
        feature1:"MenuDisplay: Easily browse through a comprehensive list of food items for a seamless restaurant experience.",
        feature2:"Individual ItemDetails: Access specific information about each food item, enhancing decision-making.",
        feature3:"Add a Food Item: Keep the menu up-to-date by easily adding new offerings.",
        technology:" React JS,MongoDB,Tailwind CSS,Firebase,Node JS ",
        live:"https://assignment-11-client-f493d.web.app/",
        front:"https://github.com/izaz10921/Restaurant-Management-Website-Client",
        back:"https://github.com/izaz10921/Restaurant-Management-Website-Server",
    },
    {
        id: 2,
        title:"Car Brand Shop Website",
        img:"https://i.ibb.co/92L4BX9/a10-1-removebg-preview.jpg",
        desc:"Top features",
        feature1:"Users can easily specify product details and images for a personalized experience.",
        feature2:" Browsing products by brand name simplifies the user experience.",
        feature3:"Choose between Light and Dark modes for personalized visual preferences. ",
        technology:"React JS,MongoDB,Tailwind CSS,Firebase,Node JS",
        live:"https://assignment-10-6933f.web.app/",
        front:"https://github.com/izaz10921/Brand-Shop-Website-Client",
        back:"https://github.com/izaz10921/Brand-Shop-Website-Server",
    },
    {
        id: 3,
        title:"Social event management Website",
        img:"https://i.ibb.co/JnqVMNR/a9-1-removebg-preview.jpg",
        desc:"Top features",
        feature1:"SeamlessGoogle and email-based authentication for user convenience  ",
        feature2:" Restricted access to private routes, prompting login if not authenticated.",
        feature3:" Dynamic toggle between login and logout buttons based on user status.        ",
        technology:"React JS,Tailwind CSS,Firebase",
        live:"https://assignment-9-711aa.web.app/",
        front:"https://github.com/izaz10921/Social-Event-Management-Website-Frontend",
        back:"",
    },
   
];

const Single = ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,});

    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
              
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <ul>
                        <li>{item.feature1}</li>
                        <li>{item.feature2}</li>
                        <li>{item.feature3}</li>
                    </ul>
                    <p>Technology:{item.technology}</p>

                    <div className="buttonContainer">
                        <button><a href={item.live} target="_blank"><FaLink></FaLink> Live link</a></button>
                        <button> <a href={item.front} target="_blank"><FaLink></FaLink> Front-end</a></button>
                        <button> <a href={item.back} target="_blank"><FaLink></FaLink> Back-end</a></button>
                    </div>
                       
                      
                   
                </motion.div>
                </div>
                
            </div>
        </section>
    )
        

    
}

const Projects = () => {

    const ref= useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });


    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {
                items.map(item=>(
                    <Single item={item} key={item.id}/>
                ))
            }
        </div>
    );
};

export default Projects;