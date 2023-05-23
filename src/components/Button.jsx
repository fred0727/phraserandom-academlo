import React from "react";
import "./styles/Button.css";
import { MdOutlineRefresh } from "react-icons/md";

const Button = ({ handleRamdon }) => {
  return (
    <button className="button">
      <MdOutlineRefresh className="icon-reload" onClick={handleRamdon} />
    </button>
  );
};

export default Button;
