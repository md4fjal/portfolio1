import React, { useState } from "react";
import vg from "../Assets/logo.png";
import { motion } from "framer-motion";
const Contact = () => {
  const [user,setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user, [name] : value});
    
  }

  const {name, email, message} = user;
  const postData = async (e) => {
    e.preventDefault();
    const res = await fetch('https://react-portfolio-b9c12-default-rtdb.firebaseio.com/userDatail.json', {
      method: "POST",
      Headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    if(res) {
      setUser({
        name: "",
        email: "",
        message: ""
      })
      alert("Data Sent Successfully")
    }
  }

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
        <motion.form {...animations.form} method="POST">
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={getData}
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={user.email}
            onChange={getData}
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            required
            value={user.message}
            onChange={getData}
            autoComplete="off"
          />

          <motion.button
            {...animations.button}
            type="submit"
            onClick={postData}
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