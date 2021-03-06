import React, { useEffect, useState } from "react";
import "./Drawer.css";

import { Times } from "../Burger/Burger";
import { NavLink } from "../Navs/NavLinks";

// images and svgs
import avatar from "../../assets/img/avatar.png";
import { Logo } from "../Logo/Logo";
import { LogoutBtn } from "../Buttons_Links/Buttons";

const Drawer = ({ className, open, closeDrawer, payload }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  const {avatar_url,fullname,email} =payload;
  return (
    <div className='drawer' style={drawerStyle}>
      <header>
        <Logo />
        <Times onClick={closeDrawer} />
        <div className='user'>
          <div className='avatar'>
            <img src={avatar_url}/>
          </div>
          <div className='user-details'>
            <span className='name'>{fullname}</span>
            <span>{email}</span>
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
