import React from "react";

const SingleProject = ({ data, selectProject }) => {
  return (
    <div
      className={data.on ? " project main light-purple" : "project light-blue "}
      onClick={() => selectProject(data.id)}
    >
      <h3>{data.name} </h3>
      <p>{data.description}</p>
    </div>
  );
};

export default SingleProject;
