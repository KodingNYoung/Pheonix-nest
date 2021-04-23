import React from "react";

// components
import { Anchor } from "./../Navs/Links";

// css and images
import "./Logo.css";
import logo from "../../assets/img/Welcome/logo.png";

export const Logo = ({ className }) => {
  return (
    <Anchor to="/" className={`logo ${className}`}>
      <img src={logo} />
    </Anchor>
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
