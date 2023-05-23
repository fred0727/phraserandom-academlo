import React from "react";
import "./styles/Space.css";

const Space = ({ bgImg }) => {
  const images = {
    back1: "./images/planeta1.svg",
    back2: "./images/planeta2.svg",
    back3: "./images/planeta3.svg",
    back4: "./images/planeta4.svg",
  };
  return (
    <div className="space--world">
      <img src={images[bgImg]} alt="" />
    </div>
  );
};

export default Space;
