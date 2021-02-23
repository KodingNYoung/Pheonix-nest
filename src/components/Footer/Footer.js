import {
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Brand } from "../Logo/Logo";
import { NavLink } from "../Navs/NavLinks";

import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='main'>
        <div className='left'>
          <Brand />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            libero unde possimus placeat quidem porro, dolor aliquam quia! Sequi
            atque sapiente dolores! Eos harum error voluptates reiciendis.
          </p>
        </div>
        <div className='right'>
          <div className='lg-screen-disp social-media'>
            <p>Follow us</p>
            <div className='icons'>
              <a href=''>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a href=''>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href=''>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
          </div>
          <div className='nav-links'>
            <NavLink to='/about' className='transparent-link'>
              About
            </NavLink>
            <NavLink to='/pitches' className='transparent-link'>
              Explore Pitches
            </NavLink>
            <NavLink to='/contact' className='transparent-link'>
              Contact
            </NavLink>
            <NavLink to='/terms' className='transparent-link'>
              Terms and Conditions
            </NavLink>
          </div>
        </div>
      </div>
      <div className='bottom'>&copy; 2021 Copyright. All right reserved</div>
    </div>
  );
};

export default Footer;
