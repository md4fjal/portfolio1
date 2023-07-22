import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import cv from "../Assets/afjalcv.pdf";
const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Afjal<span>.</span></h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href={cv} alt="cv" target="blank">
      <button>Download CV</button>
    </a>
    <a href="mailto:afjal742000@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
