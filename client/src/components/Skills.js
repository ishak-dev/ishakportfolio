import React from "react";
import { FaJava } from "react-icons/fa";
import "../style/skills.css";
import Skill from "./skills-components/skill";

import datas from "./skills-components/skill-data";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>My programming skills</h1>
      <div className="skills-container">
        {datas.map((data, i) => (
          <Skill
            key={i}
            color={data.color}
            name={data.name}
            desc={data.description}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
