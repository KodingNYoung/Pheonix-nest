import React from "react";
import "./Drawer.css";

// images and svgs
import avatar from "../../assets/img/avatar.png";
import {Logo} from '../Logo/Logo'
const Drawer = () => {
  return (
    <div className='drawer'>
      <header>
        <Logo />
        <div className='times'>
          <span></span>
          <span></span>
        </div>
        <div className='user'>
          <div className='avatar'>
            <img src={avatar} />
          </div>
          <div className='user-details'>
            <span>Akingbade Janet</span>
            <span>janetakingbade@gmail.com</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Drawer;
