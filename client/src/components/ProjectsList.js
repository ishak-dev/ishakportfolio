import React, { useState } from "react";
import "../style/project-list.css";
import SliderButton from "./project-list-components/slider-buttons";
import datas from "./project-list-components/project-data";
import SingleProject from "./project-list-components/single-project";

let prevBtn = false;
const ProjectsList = () => {
  const [translateSize, setTranslateSize] = useState(640);
  const [project, setProject] = useState(
    datas.map((data) => ({ ...data, on: false }))
  );

  const selectProject = (id) => {
    setProject((prevState) => {
      return prevState.map((project) => {
        return project.id === id
          ? { ...project, on: !project.on }
          : { ...project, on: false };
      });
    });
    console.log(project);
  };

  const changeTranslate = (e, space) => {
    console.log(prevBtn);
    if (prevBtn == false) {
      console.log(prevBtn);
      e.target.classList.add("slide-buttons-active");
      prevBtn = e.target;
      console.log(prevBtn);
    } else if (prevBtn != e.target) {
      prevBtn.classList.remove("slide-buttons-active");
      console.log(prevBtn);
      e.target.classList.add("slide-buttons-active");
      prevBtn = e.target;
      console.log(prevBtn);
    }

    switch (space) {
      case 1:
        setTranslateSize(640);
        break;
      case 2:
        setTranslateSize(320);
        break;
      case 3:
        setTranslateSize(0);
        break;
      case 4:
        setTranslateSize(-320);
        break;
      case 5:
        setTranslateSize(-640);
        break;
      default:
        break;
    }
  };
  return (
    <div className="project-list" id="projects">
      <h1>This is some of my projects</h1>
      <p className="project-list-description">
        These are projects I worked on. You can explore more on github!
      </p>
      <div
        className="project-list-container"
        style={{
          transform: `translate(${translateSize}px)`,
        }}
      >
        {project.map((data, i) => (
          <SingleProject key={i} data={data} selectProject={selectProject} />
        ))}
      </div>

      <SliderButton changeTranslate={changeTranslate} page={1} />
      <SliderButton changeTranslate={changeTranslate} page={2} />
      <SliderButton changeTranslate={changeTranslate} page={3} />
      <SliderButton changeTranslate={changeTranslate} page={4} />
      <SliderButton changeTranslate={changeTranslate} page={5} />
    </div>
  );
};

export default ProjectsList;
