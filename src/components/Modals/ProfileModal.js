import React, { useEffect, useState } from "react";
import { Anchor } from "../Navs/Links";
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
      <div className='modal-scrim' onClick={closeModal}></div>
      <div className='modal-content'>
        <h2>Select an action</h2>
        <div className='nav-links'>
          <Anchor to=''>Change profile image</Anchor>
          <Anchor to='/user/profile/edit-user-details'>
            Edit user details
          </Anchor>
          <Anchor to=''>Edit pitch</Anchor>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
