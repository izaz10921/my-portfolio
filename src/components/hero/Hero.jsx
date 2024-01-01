import "./hero.scss"
import {motion} from 'framer-motion';
const textVariants ={
    initial:{
        x: -500,
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};
const sliderVariants ={
    initial:{
        x: 0,
      

    },
    animate:{
        x:"-300%",
      
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
           
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>IZAZ SIDDIQUE</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Download CV</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>

            <div className="imageContainer"><img src="https://i.ibb.co/bBr36r0/avatar-Profile-Picture-Maker-com-2.png" alt="" />
            </div>

        </div>
    );
};

export default Hero;