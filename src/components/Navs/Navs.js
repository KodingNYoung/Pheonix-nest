import React from "react";

import { Brand } from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLinks";
import { Burger } from "../Burger/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../Drawer/Drawer";

import "./Navs.css";

// images and svgs
import avatar from "../../assets/img/avatar.png";

export const Navbar = () => {
  return (
    <header>
      <Brand />
      <nav>
        <div className='links'>
          <NavLink to='/login'>sign in</NavLink>
          <NavLink to=''> about</NavLink>
          <NavLink to='/pitches'> explore pitches</NavLink>
          <NavLink to='/sign'>contact us</NavLink>
        </div>
        <Link to='/signup' className='primary-link'>
          Join
        </Link>
      </nav>
    </header>
  );
};
export const HomeNavbar = () => {
  return (
    <header className='home-navbar'>
      <div className='sm-screen'>
        <Burger />
        <Brand />
        <NavLink to='/messages'>
          <FontAwesomeIcon icon={faComments} />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to='/home' active={true}>
          home
        </NavLink>
        <NavLink to='/profile'>profile</NavLink>
        <NavLink to='/pitches'>Pitches</NavLink>
        <NavLink to=''>about</NavLink>
        <NavLink to=''>contact us</NavLink>
        <NavLink to=''>Terms and conditions</NavLink>
        <div className='avatar'>
          <img src={avatar} alt='' />
        </div>
        <button to='' className="logout-btn">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </nav>
      <Drawer className="side-drawer"/>
    </header>
  );
};
