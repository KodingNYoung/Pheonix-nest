import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Burger.css";

export const Burger = ({ className, onClick }) => {
  return (
    <button className={`burger icon-btn ${className}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export const Times = ({ onClick, className }) => {
  return (
    <button className={`times icon-btn ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes}/>
    </button>
  );
};
