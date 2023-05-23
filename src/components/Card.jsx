import React, { useEffect } from "react";
import "./styles/Card.css";

const Card = ({ phrase }) => {
  useEffect(() => {
    document.querySelector("#phrase").classList.add("animation");
    setTimeout(() => {
      document.querySelector("#phrase").classList.remove("animation");
    }, 1000);
  }, [phrase]);

  return (
    <div className="card">
      <p id="phrase">{phrase}</p>
    </div>
  );
};

export default Card;
