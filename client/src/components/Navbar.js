import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdTransitEnterexit } from "react-icons/md";
const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const setMenu = () => {
    if (window.innerWidth <= 660) setIsMenuActive((prevState) => !prevState);
  };
  return (
    <>
      {!isMenuActive && (
        <HiOutlineMenuAlt3 className="nav-ham" onClick={() => setMenu()} />
      )}

      <div className={isMenuActive ? "sidebar" : "navbar "}>
        {isMenuActive && (
          <MdTransitEnterexit className="exit-icon" onClick={() => setMenu()} />
        )}

        <ul>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>Home</li>
          </Link>
          <Link
            activeClass="active"
            to="whoami"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>Who Am I</li>
          </Link>

          <Link
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>About</li>
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>Skills</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>Projects</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            onClick={() => setMenu()}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
