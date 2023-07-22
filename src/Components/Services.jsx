import React from "react";
import { motion } from "framer-motion";
import {BiLogoReact,BiLogoNodejs,BiLogoMongodb}from 'react-icons/bi'
import {BsBrowserFirefox} from 'react-icons/bs'

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <BsBrowserFirefox />
          <h3>Full</h3>
          <p>Stack Development</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <BiLogoReact />
          <span>React</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <BiLogoNodejs />
          <span>Node JS</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <BiLogoMongodb />
          <span>Mongo DB</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;