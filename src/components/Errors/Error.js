import React from "react";
import "./Errors.css";

export const ErrorToast = ({ children }) => {
  return (
    <div className='toast error-toast'>
      <span>{children}</span>
    </div>
  );
};

