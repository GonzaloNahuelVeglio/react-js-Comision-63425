import React from "react";
import "./ToTop.css";
import { IoIosArrowUp } from "react-icons/io";
const ToTop = () => {
  return (
    <a href="#" className="ToTop">
      <span className="IconToTop">
        <IoIosArrowUp /> 
      </span>
    </a>
  );
};

export default ToTop;
