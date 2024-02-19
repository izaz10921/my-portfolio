import "./hero.scss"
import { motion } from 'framer-motion';
import {  FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,

    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,


    },
    animate: {
        x: "-300%",

        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,

        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>IZAZ SIDDIQUE</motion.h2>
                    <motion.h1 variants={textVariants}>I'm a <br />

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Web developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                               
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '70px', display: 'inline-block' }}
                            repeat={Infinity}
                        />


                        </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Download CV  <FaDownload></FaDownload></motion.button>
                        <motion.button variants={textVariants}>Contact Me </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>

            <div className="imageContainer">

                <img src="https://i.ibb.co/bBr36r0/avatar-Profile-Picture-Maker-com-2.png" />
            </div>

        </div>
    );
};

export default Hero;