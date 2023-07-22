import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Assets/md2.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
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
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Mohammed Afjal
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:afjal742000@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>afjal742000@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="afjal" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
