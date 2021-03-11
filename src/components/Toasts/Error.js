import React from "react";
import "./Toasts.css";

const Error = ({ children }) => {
  return (
    <div className='toast error-toast'>
      <span>{children}</span>
    </div>
  );
};

export default Error;
