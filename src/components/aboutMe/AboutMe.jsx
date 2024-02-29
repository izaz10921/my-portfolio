// import { useRef } from "react";
import "./aboutMe.scss"
import { color, motion } from "framer-motion";
// import { motion,useInView } from "framer-motion";


const variants = {
    initial: {
        y: 300,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}
const AboutMe = () => {
    // const ref =useRef()
    return (
        <div className="aboutMe">
            <div className="progress">
                <h1>About Me</h1>
                <h3>My Introduction</h3>
            </div>
            <motion.div className="container" variants={variants} initial="initial" whileInView="animate">
                <div className="box">
                    <motion.div className="card" variants={variants}>
                        <img src="https://i.ibb.co/CPLnRp3/customer-satisfaction-4936426.png" alt="" />
                        <h1>Experience</h1>
                        <p>1 + Years</p>
                    </motion.div>
                    <motion.div className="card" variants={variants}>
                        <img src="https://i.ibb.co/58fhQ5X/mark-14791443.png" alt="" />
                        <h1>Completed</h1>
                        <p>6 Projects</p>
                    </motion.div>
                    <motion.div className="card" variants={variants}>
                        <img src="https://i.ibb.co/MPQKMQk/live-chat-2991793.png" alt="" />
                        <h1>Support</h1>
                        <p>Online 24/7</p>
                    </motion.div>
                </div>
                <div className="text">
                    <p>Hi, I'm Izaz Siddique, a junior full-stack web developer studying Computer Science. Skilled in <span className="spanTag">HTML, CSS, React JS, Next JS Node.js, Express.js, .NET core MVC, and MongoDB</span>, I create dynamic web applications and build robust server-side solutions. Passionate about software engineering principles. Explore my portfolio to see my work and let's connect!</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;