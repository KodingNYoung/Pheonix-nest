import React from "react";

// components
import { Link } from "react-router-dom";

// css
import './Buttons-Links.css';

export const Anchor = ({ to, className, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};
