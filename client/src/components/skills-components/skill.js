import React from "react";

const Skill = ({ color, name, desc, icon }) => {
  return (
    <div className={"skill-block " + color}>
      {icon}
      <p>{desc}</p>
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default Skill;
