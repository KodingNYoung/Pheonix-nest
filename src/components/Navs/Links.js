import React from "react";

// components
import { Link } from "react-router-dom";

// css
import "./Navs.css";

export const Anchor = ({ to, className, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};
