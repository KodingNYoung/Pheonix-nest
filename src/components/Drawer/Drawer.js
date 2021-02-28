import React, { useEffect, useState } from "react";
import "./Drawer.css";

import { Times } from "../Burger/Burger";
import { NavLink } from "../Navs/NavLinks";

// images and svgs
import avatar from "../../assets/img/avatar.png";
import { Logo } from "../Logo/Logo";
import { LogoutBtn } from "../Buttons_Links/Buttons";

const Drawer = ({ className, open, closeDrawer }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  return (
    <div className='drawer' style={drawerStyle}>
      <header>
        <Logo />
        <Times onClick={closeDrawer} />
        <div className='user'>
          <div className='avatar'>
            <img src={avatar} />
          </div>
          <div className='user-details'>
            <span className='name'>Akingbade Janet</span>
            <span>janetakingbade@gmail.com</span>
          </div>
        </div>
      </header>
      <nav>
        <NavLink to='/profile'>my profile</NavLink>
        <NavLink to='/pitches'>explore Pitches</NavLink>
        <NavLink to=''>about pheonix nest</NavLink>
        <NavLink to=''>check your investment</NavLink>
        <NavLink to=''>contact us</NavLink>
        <NavLink to=''>Terms and conditions</NavLink>

        <LogoutBtn />
      </nav>
    </div>
  );
};

export default Drawer;
