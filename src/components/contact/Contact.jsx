import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wcvfx3e', 'template_qo2cosm', formRef.current, {
                publicKey: 'FhhE-9JYil2RoDPzz',
            })
            .then(
                () => {
                    setSuccess(true);
                    toast.success("Message sent successfully!");
                    clearForm();
                },
                (error) => {
                    setError(true);
                    toast.error("Failed to send message. Please try again later.");
                }
            );
    };

    const clearForm = () => {
        formRef.current.reset();
    };

    return (
        <>
            <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
                <ToastContainer />
                <motion.div className="textContainer" variants={variants}>
                    <motion.h1 variants={variants}>Let's work together</motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>izaz10921@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Address</h2>
                        <span>Mirpur,Dhaka</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone No</h2>
                        <span>+8801575267348</span>
                    </motion.div>
                </motion.div>
                <div className="formContainer">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <input type="text" required placeholder="Name" name="name" />
                        <input type="email" required placeholder="Email" name="email" />
                        <textarea rows={8} placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>

            </motion.div>
            <hr />
            <div className="footer">
                <p>© Izaz Siddique 2024 - All rights reserved.</p>
            </div>
        </>
    );
};

export default Contact;
