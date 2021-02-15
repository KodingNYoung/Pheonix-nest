import React from "react";

import "./Burger.css";

export const Burger = ({ className }) => {
  return (
    <button className={`burger ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export const Times = () => {
  return (
    <div className="times">
      <span></span>
      <span></span>
    </div>
  );
};
