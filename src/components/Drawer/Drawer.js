import React from "react";

// components
import { Times } from "../Burger/Burger";
import { Hashlink, NavLink } from "../Links/Links";

// images and svgs
import { Logo } from "../Logo/Logo";
import { LogoutBtn } from "../Buttons/Buttons";

// css
import "./Drawer.css";

export const LandingNavDrawer = ({ currentUserId, open, closeDrawer }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  return (
    <div
      className={`drawer landing-nav-drawer ${open ? "open" : ""}`}
      style={drawerStyle}
    >
      <div className="overlay" onClick={closeDrawer}></div>
      <div className="drawer-content" style={drawerStyle}>
        <Times onClick={closeDrawer} />

        <nav className="navlink-group">
          {currentUserId ? (
            <>
              <NavLink to="/user" className="transparent-link">
                Home
              </NavLink>
              <NavLink
                to={`/user/profile/${currentUserId}`}
                className="transparent-link"
              >
                profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup" className="primary-link">
                join phoenix nest
              </NavLink>
              <NavLink to="/login" className="transparent-link">
                sign in
              </NavLink>
            </>
          )}

          <Hashlink
            to="#contact-us"
            className="transparent-link"
            onClick={closeDrawer}
          >
            about phoenix nest
          </Hashlink>

          <Hashlink
            to="#contact-us"
            className="transparent-link"
            onClick={closeDrawer}
          >
            contact us
          </Hashlink>
        </nav>
      </div>
    </div>
  );
};
export const HomeNavDrawer = ({ open, closeDrawer, payload, handleLogout }) => {
  const drawerStyle = {
    left: open ? "0" : "-100vw",
  };
  const { avatar_url, fullname, email } = payload;

  return (
    <div className="drawer home-nav-drawer" style={drawerStyle}>
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
        <NavLink to="" onClick={closeDrawer}>
          about phoenix nest
        </NavLink>
        <NavLink to="" onClick={closeDrawer}>
          check your investment
        </NavLink>
        <NavLink to="" onClick={closeDrawer}>
          contact us
        </NavLink>
        <NavLink to="" onClick={closeDrawer}>
          Terms and conditions
        </NavLink>

        <LogoutBtn onClick={handleLogout} />
      </nav>
    </div>
  );
};
