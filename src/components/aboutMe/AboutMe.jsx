import "./aboutMe.scss"
import {motion,useScroll} from "framer-motion";
const AboutMe = () => {
    return (
        <div className="aboutMe">
           <div className="progress">
            <h1>About me</h1>
            <div className="progressBar"></div>
           </div>
        </div>
    );
};

export default AboutMe;