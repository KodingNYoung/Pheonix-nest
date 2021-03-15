import React from "react";
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
    <div className={`brand ${className}`}>
      <Logo className='brand-logo' />
      <span className='brand-text'>Phoenix Nest</span>
    </div>
  );
};
