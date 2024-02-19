import "./navbar.scss"
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import{motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}>Izaz Siddique</motion.span>
                <div className="social">
                    <a href=""><FaTwitter></FaTwitter></a>
                    <a href="https://www.facebook.com/izaz.siddique.1/" target="_blank"><FaFacebook></FaFacebook></a>
                    <a href="https://github.com/izaz10921" target="_blank"><FaGithub></FaGithub></a>
                    <a href="https://www.linkedin.com/in/izaz-siddique/" target="_blank" ><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;