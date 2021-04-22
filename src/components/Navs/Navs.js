import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

// components
import { Brand } from "../../components/Logo/Logo";
import { NavLink, Hashlink, Anchor } from "../Links/Links";
import { Burger } from "../Burger/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../Drawer/Drawer";
import { LogoutBtn } from "../Buttons_Links/Buttons";

// css and images
import "./Navs.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <Brand />
      <nav>
        <div className="link-group">
          <NavLink to="/login">sign in</NavLink>
          <NavLink to=""> about</NavLink>
          <Hashlink to="./#contact-us">contact us</Hashlink>
        </div>
        <Anchor to="/signup" className="primary-link">
          Join
        </Anchor>
      </nav>
    </header>
  );
};

export const HomeNavbar = ({ payload }) => {
  // states
  const [drawerOpen, setDrawerOpen] = useState(false);

  // other hooks
  const history = useHistory();
  const { signout } = useAuthContext();

  // spliting the payload
  const { avatar_url } = payload;
  const handleLogout = (e) => {
    e.preventDefault();

    signout()
      .then(() => {
        console.log("logged out");
        history.push("/");
      })
      .catch(() => {
        console.log("can't log out, user not logged in");
      });
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <header className="home-navbar navbar">
      <div className="sm-screen">
        <Burger onClick={openDrawer} />
        <Brand />
        <NavLink to="/user/messages">
          <FontAwesomeIcon icon={faComments} />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/user" active={true}>
          home
        </NavLink>
        <NavLink to={`/user/profile/${localStorage.getItem("currentUserId")}`}>
          profile
        </NavLink>
        <NavLink to="/user/pitches">Pitches</NavLink>
        <Hashlink to="./#contact-us">contact us</Hashlink>
        <div className="avatar">
          <img src={avatar_url} />
        </div>
        <LogoutBtn onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </LogoutBtn>
      </nav>
      <Drawer
        className="side-drawer"
        open={drawerOpen}
        closeDrawer={closeDrawer}
        payload={payload}
        handleLogout={handleLogout}
      />
    </header>
  );
};
