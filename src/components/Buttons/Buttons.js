import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./Buttons.css";

export const LogoutBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="logout-btn">
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span>Logout</span>
    </button>
  );
};

export const Button = ({ type, children, disabled }) => {
  return (
    <button type={type} className="submit-btn" disabled={disabled}>
      {children}
    </button>
  );
};
