import React from "react";

// components
import { Anchor } from "./../Links/Links";

// css and images
import "./Logo.css";
import logo from "../../assets/img/Welcome/logo.png";

export const Logo = ({ className }) => {
  return (
    <span className={`logo ${className}`}>
      <img src={logo} />
    </span>
  );
};
export const Brand = ({ className }) => {
  return (
    <Anchor to="/" className={`brand ${className}`}>
      <Logo className="brand-logo" />
      <span className="brand-text">Phoenix Nest</span>
    </Anchor>
  );
};
