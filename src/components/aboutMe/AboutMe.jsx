import "./aboutMe.scss"
import { motion, useScroll } from "framer-motion";
const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="progress">
                <h1>About me</h1>
                <div className="progressBar"></div>
            </div>
            <div className="container">
                <motion.div className="aboutMeText">
                    <p>I'm Izaz Siddique, a junior full-stack web developer studying Computer Science. Skilled in frontend technologies like HTML, CSS, Bootstrap, and React JS, I create dynamic and visually appealing web applications. With backend expertise in Node.js, Express.js, and MongoDB, I build robust server-side solutions. Passionate about software engineering principles and always eager to learn, I thrive in collaborative environments where creativity and innovation flourish. Explore my portfolio to see my work and let's connect!
                    </p>
                </motion.div>
                <motion.div className="aboutMeImage">
                    <img src="https://i.ibb.co/M9bwFMH/about-me-1.png" alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;