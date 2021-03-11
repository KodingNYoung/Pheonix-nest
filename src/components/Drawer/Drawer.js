import React, { useEffect, useState } from "react";
import "./Drawer.css";

import { Times } from "../Burger/Burger";
import { NavLink } from "../Navs/NavLinks";

// images and svgs
import { Logo } from "../Logo/Logo";
import { LogoutBtn } from "../Buttons_Links/Buttons";

const Drawer = ({ open, closeDrawer, payload, handleLogout }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  const { avatar_url, fullname, email } = payload;

  return (
    <div className='drawer' style={drawerStyle}>
      <header>
        <Logo />
        <Times onClick={closeDrawer} />
        <div className='user'>
          <div className='avatar'>
            <img src={avatar_url} />
          </div>
          <div className='user-details'>
            <span className='name'>{fullname}</span>
            <span>{email}</span>
          </div>
        </div>
      </header>
      <nav>
        <NavLink to='/user/profile' onClick={closeDrawer}>
          my profile
        </NavLink>
        <NavLink to='/user/pitches' onClick={closeDrawer}>
          explore Pitches
        </NavLink>
        <NavLink to='' onClick={closeDrawer}>
          about pheonix nest
        </NavLink>
        <NavLink to='' onClick={closeDrawer}>
          check your investment
        </NavLink>
        <NavLink to='' onClick={closeDrawer}>
          contact us
        </NavLink>
        <NavLink to='' onClick={closeDrawer}>
          Terms and conditions
        </NavLink>

        <LogoutBtn onClick={handleLogout} />
      </nav>
    </div>
  );
};

export default Drawer;
