import React from "react";
import "../style/footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Navigation</h1>
            <ul>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                <li>Home</li>
              </Link>
              <Link activeClass="active" to="whoami" spy={true} smooth={true}>
                <li>Who Am I</li>
              </Link>

              <Link activeClass="active" to="about-me" spy={true} smooth={true}>
                <li>About</li>
              </Link>

              <Link activeClass="active" to="skills" spy={true} smooth={true}>
                <li>Skills</li>
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true}>
                <li>Projects</li>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>
                <a href="https://undraw.co/search">Images</a>
              </li>
              <li>
                <a href="https://scontent.fsjj2-1.fna.fbcdn.net/v/t1.15752-9/327906033_909686210472038_7044922834430565683_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MJDXZDM3o5sAX8LTqs7&_nc_ht=scontent.fsjj2-1.fna&oh=03_AdSCLjizFHrqHtxO6GiYfWlef0DI3qVvUcLZ-L2UQwoWHw&oe=63FD0413">
                  Design
                </a>
              </li>
              <li>
                <a href="https://fonts.google.com/">Font</a>
              </li>
              <li>
                <a href="https://onaircode.com/html-css-footer-design-examples/">
                  Footer
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>Contact</h1>
            <ul>
              <li>
                <a href="https://github.com/ishak-dev">Github</a>
              </li>
              <li>
                <a href="https://ba.linkedin.com/in/ishak-kazi%C4%87-a760451a8">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto: ishak.kazic@gmail.com">Email</a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
