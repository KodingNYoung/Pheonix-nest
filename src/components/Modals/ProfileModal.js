import React, { useEffect, useState } from "react";

import {
  faInfo,
  faLightbulb,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor } from "../Links/Links";

import "./Modals.css";

const ProfileModal = ({ modalOpen, closeModal }) => {
  const [modalClass, setModalClass] = useState("close");
  useEffect(() => {
    if (modalOpen) {
      setModalClass("open");
    } else {
      setModalClass("close");
    }
  }, [modalOpen]);
  return (
    <div className={`modal profile-modal ${modalClass}`}>
      <div className="modal-scrim" onClick={closeModal}></div>
      <div className="modal-content">
        <h2>Select an action</h2>
        <div className="nav-links">
          <Anchor className="modal-link" to="/user/profile/upload-avatar">
            <span className="modal-link-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </span>
            <span>Change profile image</span>
          </Anchor>
          <Anchor className="modal-link" to="/user/profile/edit-user-details">
            <span className="modal-link-icon">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            <span>update user details</span>
          </Anchor>
          <Anchor className="modal-link" to="/user/profile/create-pitch">
            <span className="modal-link-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </span>
            <span>create pitch</span>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
