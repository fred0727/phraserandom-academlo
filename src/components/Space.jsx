import React from "react";
import "./styles/Space.css";

const Space = ({ bgImg }) => {
  const images = {
    back1: "./public/images/planeta1.svg",
    back2: "./public/images/planeta2.svg",
    back3: "./public/images/planeta3.svg",
    back4: "./public/images/planeta4.svg",
  };
  return (
    <div className="space--world">
      <img src={images[bgImg]} alt="" />
    </div>
  );
};

export default Space;
