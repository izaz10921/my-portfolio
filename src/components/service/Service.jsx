import "./Service.scss"
import { motion } from "framer-motion";
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

};
const Service = () => {
    return (
        <motion.div className="service" >
            <div className="progress">
                <h1>Services</h1>
                <h3>What I offer</h3>
            </div>
            <motion.div className="listContainer" variants={variants} initial="initial" whileInView="animate" >
                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}><h2>Frontend Development</h2>


                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Develop responsive web interfaces using HTML, CSS, and Bootstrap.</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div> <p>Utilize Tailwind CSS for efficient and customizable styling solutions.</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Incorporate various component libraries to accelerate frontend development.</p></div>
                    </div>

                    <button>View more</button></motion.div>

                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                    <h2>JavaScript and Frameworks</h2>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Develop dynamic web applications using JavaScript, React JS and Next JS.</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Implement component-based architecture for easier maintenance and scalability</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Optimize rendering performance through lazy loading and code splitting techniques.</p></div>
                    </div>

                    <button>View more</button></motion.div>

                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}><h2> Backend Development</h2>



                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Build robust backend systems using Node.js, Express.js, and .NET MVC Core.</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Design and implement RESTful APIs for seamless communication between frontend and backend.</p></div>
                    </div>
                    <div className="details">
                        <div><img className="imgTag" src="https://i.ibb.co/CHzVdR7/yes-9426997.png" alt="" /></div>
                        <div><p>Utilize MongoDB as a NoSQL database solution for efficient and secure data storage.</p></div>
                    </div>
                    <button>View more</button></motion.div>


            </motion.div>

        </motion.div>
    );
};

export default Service;