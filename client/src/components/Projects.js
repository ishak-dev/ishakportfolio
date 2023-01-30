import React from "react";
import "../style/projects.css";
import projectImg from "../img/projects.svg";
const Project = () => {
  return (
    <div className="projects">
      <div className="projects-img-section">
        <img
          src={projectImg}
          alt="project-background"
          className="project-background-img"
        />
      </div>
      <div className="projects-list">
        <ul>
          <li>dasd as das das as</li>
          <li>dasd as das das as</li>
          <li>dasd as das das as</li>
          <li>dasd as das das as</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
