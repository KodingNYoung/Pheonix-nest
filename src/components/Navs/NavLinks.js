import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ children, to, className, onClick }) => {
  return (
    <Link to={to} className={`nav-link ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};
