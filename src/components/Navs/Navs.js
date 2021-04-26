import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

// components
import { Brand } from "../../components/Logo/Logo";
import { NavLink, Hashlink, Anchor } from "../Links/Links";
import { Burger } from "../Burger/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { HomeNavDrawer, LandingNavDrawer } from "../Drawer/Drawer";
import { LogoutBtn } from "../Buttons/Buttons";

// css and images
import "./Navs.css";

export const Navbar = ({ currentUserId }) => {
  // states
  const [drawerOpen, setDrawerOpen] = useState(false);

  // to slide drawer in and out
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="navbar">
      <Burger classsName="navbar-burger" onClick={openDrawer} />
      <Brand />
      <nav>
        <div className="link-group">
          {!currentUserId ? (
            <NavLink to="/login" className="transparent-link">
              sign in
            </NavLink>
          ) : (
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
          )}

          <Hashlink to="#contact-us" className="transparent-link">
            {" "}
            about
          </Hashlink>
          <Hashlink to="#contact-us" className="transparent-link">
            contact us
          </Hashlink>
        </div>
        {!currentUserId ? (
          <Anchor to="/signup" className="primary-link">
            Join
          </Anchor>
        ) : null}
      </nav>
      <LandingNavDrawer
        currentUserId={currentUserId}
        open={drawerOpen}
        closeDrawer={closeDrawer}
      />
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
        <NavLink className="message-icon" to="/user/messages">
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
        <Hashlink to="#contact-us">About us</Hashlink>
        <Hashlink to="#contact-us">contact us</Hashlink>
        <div className="avatar">
          <img src={avatar_url} />
        </div>
        <LogoutBtn onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </LogoutBtn>
      </nav>
      <HomeNavDrawer
        className="side-drawer"
        open={drawerOpen}
        closeDrawer={closeDrawer}
        payload={payload}
        handleLogout={handleLogout}
      />
    </header>
  );
};
