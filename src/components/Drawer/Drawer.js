import React from "react";

// components
import { Times } from "../Burger/Burger";
import { Hashlink, NavLink } from "../Links/Links";

// images and svgs
import { Logo } from "../Logo/Logo";
import { LogoutBtn } from "../Buttons_Links/Buttons";

// css
import "./Drawer.css";

const Drawer = ({ open, closeDrawer, payload, handleLogout }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  const { avatar_url, fullname, email } = payload;

  return (
    <div className="drawer" style={drawerStyle}>
      <header>
        <Logo />
        <Times onClick={closeDrawer} />
        <div className="user">
          <div className="avatar">
            <img src={avatar_url} />
          </div>
          <div className="user-details">
            <span className="name">{fullname}</span>
            <span>{email}</span>
          </div>
        </div>
      </header>
      <nav>
        <NavLink
          to={`/user/profile/${localStorage.getItem("currentUserId")}`}
          onClick={closeDrawer}
        >
          my profile
        </NavLink>
        <NavLink to="/user/pitches" onClick={closeDrawer}>
          explore Pitches
        </NavLink>
        <Hashlink to="#contact-us" onClick={closeDrawer}>
          about phoenix nest
        </Hashlink>
        <Hashlink to="#contact-us" onClick={closeDrawer}>
          contact us
        </Hashlink>

        <LogoutBtn onClick={handleLogout} />
      </nav>
    </div>
  );
};

export default Drawer;
