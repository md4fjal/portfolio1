import React from "react";
import me from '../Assets/md2.png'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="me"
        />

        <h2>MOHD AFJAL</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/md-afjal-70698a239" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/4fjal" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/md4fjal" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;