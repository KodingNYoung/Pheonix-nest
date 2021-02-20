import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./Buttons-Links.css";

export const LogoutBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className='logout-btn'>
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span>Logout</span>
    </button>
  );
};
