import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Preloader from "../PreLoader/Preloader";

import "./Buttons.css";

export const LogoutBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="logout-btn">
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span>Logout</span>
    </button>
  );
};

export const Button = ({ type, children, loading }) => {
  return (
    <button type={type} className="submit-btn" disabled={loading}>
      {loading ? <Preloader size={10} border={3} color="#333" /> : children}
    </button>
  );
};
