import "./Skill.scss"
import { motion } from "framer-motion";
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
};


const Skill = () => {
    return (
        <div className="skill">
            <div className="progress">
                <h1>Skill,Education & Experience</h1>
                <h3>My technical level</h3>
            </div>
            <div className="container">

                <div className="skills"   >
                    <h1 className="tag">Frontend</h1>
                    <div className="frontend">
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/ZN5F0Hv/html.png" alt="" />
                            <p>HTML</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/Ss697wt/css.png" alt="" />
                            <p>CSS</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/s9mm0Yq/js.png" alt="" />
                            <p>JS</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/LQML325/tailwind.png" alt="" />
                            <p>Tailwind</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/BPNFp45/scss.png" alt="" />
                            <p>SCSS</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/crVtt0j/react.png" alt="" />
                            <p>React</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/XxgJ285/redux-svgrepo-com.png" alt="" />
                            <p>Redux</p>
                        </motion.div>
                        <motion.div className="front" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/tmWvG09/next-js-svgrepo-com.png" alt="" />
                            <p>Next JS</p>
                        </motion.div>

                    </div>
                    <h1 className="tag">Backend</h1>
                    <div className="backend">
                        <motion.div className="back" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/WyRBJRB/firebase-svgrepo-com.png" alt="" />
                            <p>Firebase</p>
                        </motion.div>
                        <motion.div className="back" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/xh6bCYP/mongo-svgrepo-com.png" alt="" />
                            <p>Mongo DB</p>
                        </motion.div>
                        <motion.div className="back" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/4Mfdkhp/node-js-svgrepo-com.png" alt="" />
                            <p>Node JS</p>
                        </motion.div>
                        <motion.div className="back" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/hDhjBxt/sql-database-sql-azure-svgrepo-com.png" alt="" />
                            <p>SQL</p>
                        </motion.div>

                    </div>
                    <h1 className="tag" >Framework</h1>
                    <div className="framework">
                        <motion.div className="frame" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                            <img src="https://i.ibb.co/cQq642R/dotnet-svgrepo-com.png" alt="" />
                            <p>.NET</p>
                        </motion.div>

                    </div>


                </div>
                <motion.div className="education" variants={variants} initial="initial" whileInView="animate">
                    <h1 className="tag">Experience:</h1>
                    <div className="edu">


                        <div>
                            <h1>2023</h1>
                        </div>
                        <div>
                            <h1>Internship Frontend Developer</h1>
                            <p className="head">Unicorn Software Solution Ltd.</p>
                            <p className="des">Collaborated with a web development team to create a responsive website <br /> utilizing HTML, CSS, JavaScript and React.
                            </p>

                        </div>

                    </div>
                    <div className="experience">
                        <h1 className="title">Education:</h1>
                        <div className="edu1">

                            <div>
                                <h1>2023</h1>
                            </div>
                            <div>
                                <h1>Bachelor of Science in Computer Science & Engineering</h1>
                                <p className="head">American International University Bangladesh</p>
                                <p className="des">BScCSE, Software Engineering, [1st Major]
                                </p>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skill;