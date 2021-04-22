import {
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Brand } from "../Logo/Logo";
import { NavLink } from "../Links/Links";

import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer' id='contact-us'>
      <div className='main'>
        <div className='left'>
          <Brand />
          <p>
            The world is constantly in search of great minds for the betterment
            of humanity. We provide a platform where investors meet future
            possibilities like your idea and work with you to make it come to
            life.
          </p>
        </div>
        <div className='right'>
          <div className='lg-screen-disp social-media'>
            <p>Follow us</p>
            <div className='icons'>
              <a target='_blank' href='https://twitter.com/PhoenixNestNg'>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/company/phoenix-nest-ng'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target='_blank'
                href='https://www.instagram.com/challenge/45979700623/dUOukD8Rt4/'
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
            <span>phoenixnestng@gmail.com</span>
          </div>
          <div className='nav-links'>
            <NavLink to='/about' className='transparent-link'>
              About
            </NavLink>
            <NavLink to='/pitches' className='transparent-link'>
              Explore Pitches
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
