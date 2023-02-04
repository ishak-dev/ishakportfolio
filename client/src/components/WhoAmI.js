import React from "react";
import "../style/whoami.css";
import projectImg from "../img/projects.svg";
import { GiLaptop, GiBrain, GiOpenBook, GiGamepad } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
const WhoAmI = () => {
  return (
    <div className="projects" id="whoami">
      <div className="projects-img-section">
        <img
          src={projectImg}
          alt="project-background"
          className="project-background-img img"
        />
      </div>
      <div className="projects-list">
        <ul>
          <li>
            <GiLaptop className="spec-icon" />{" "}
            <p>Favourite field is Web Development</p>
          </li>
          <li>
            <FaUserFriends className="spec-icon" />{" "}
            <p>Love to play with Team, and to solve problems together</p>
          </li>
          <li>
            <GiBrain className="spec-icon" />{" "}
            <p>For myself I like to say that I'm Open Minded</p>
          </li>
          <li>
            <GiOpenBook className="spec-icon" />{" "}
            <p>Learning new things is my passion</p>
          </li>
          <li>
            <GiGamepad className="spec-icon" />{" "}
            <p>Enjoying playing games in free time</p>
          </li>
          <li>
            <BiTask className="spec-icon" />{" "}
            <p>Always open to help, no matter what it is</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhoAmI;
