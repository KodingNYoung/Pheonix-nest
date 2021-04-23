import React from "react";

// components
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// css
import "./Links.css";

export const Anchor = ({ to, className, children }) => {
  return (
    <Link className={`link ${className}`} to={to}>
      {children}
    </Link>
  );
};

export const NavLink = ({ children, to, className, onClick }) => {
  return (
    <Link to={to} className={`nav-link ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};
export const Hashlink = ({ children, to, className }) => {
  return (
    <HashLink to={to} className={`hash-link ${className}`}>
      {children}
    </HashLink>
  );
};
