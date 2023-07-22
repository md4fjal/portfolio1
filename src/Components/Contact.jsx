import React, { useState } from "react";
import vg from "../Assets/logo.png";
import { motion } from "framer-motion";
const Contact = () => {
  const [name] = useState("");
  const [email] = useState("");
  const [message] = useState("");
  

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            
          />

          <motion.button
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <h2>Hello .. </h2>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;