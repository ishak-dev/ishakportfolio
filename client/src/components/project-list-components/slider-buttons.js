import React from "react";

const SliderButton = ({ changeTranslate, page }) => {
  return (
    <button
      className="slide-buttons"
      onClick={(e) => changeTranslate(e, page)}
    ></button>
  );
};

export default SliderButton;
