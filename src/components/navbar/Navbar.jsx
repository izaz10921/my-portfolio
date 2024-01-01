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
                    <a href=""><FaFacebook></FaFacebook></a>
                    <a href=""><FaGithub></FaGithub></a>
                    <a href=""><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;