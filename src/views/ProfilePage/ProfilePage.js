import React, { useState } from "react";
import { HomeNavbar } from "../../components/Navs/Navs";
import { Anchor } from "../../components/Navs/Links";
import banner_image from "../../assets/img/pitch-banner.png";

import "./ProfilePage.css";

import avatar from "../../assets/img/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/Footer/Footer";

const ProfilePage = () => {
  return (
    <section className='profile-page'>
      <HomeNavbar />
      <div className='profile-banner'>
        <div className='banner-image'>
          <img src={banner_image} alt='' />
          <h1>Agrocreate</h1>
          <span>www.agrocreatefarms.com</span>
        </div>
      </div>
      <div className='user-details'>
        <div className='user-avatar'>
          <img src={avatar} alt='' />
        </div>
        <div className='user-info'>
          <div className='details'>
            <div className='col1'>
              <h3 className='name'>Akingbade janet</h3>
              <span className='position'>
                Farm manager at Agrocreate Farms, Nigeria
              </span>
            </div>
            <Anchor to='/pitch' className='red-bg-link sm-screen-dspr'>
              View pitch
            </Anchor>
          </div>
          <div className='share'>
            <div className='left'>
              <Anchor to='/messages' className='primary-link'>
                messages
              </Anchor>
              <button className='transparent-btn'>more</button>
            </div>
          </div>
        </div>
      </div>
      <div className='profile'>
        <div className='description'>
          <h2 className='title'>Description</h2>
          <p className='body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi at
            placeat quibusdam nihil voluptatibus temporibus in pariatur debitis
            ducimus excepturi eaque saepe cupiditate expedita rerum ad sit quo
            sequi officiis, hic voluptates? Sapiente neque asperiores saepe
            alias perferendis? Aliquid, ipsum! Debitis voluptas dignissimos
            ducimus! Velit, impedit similique! Quidem beatae nobis iusto vitae
            voluptatum impedit vel suscipit, incidunt adipisci eveniet earum
            labore dignissimos assumenda dolorum id dolore? Alias accusamus
            molestiae quibusdam blanditiis laboriosam at? Necessitatibus omnis
            reprehenderit minima animi temporibus culpa quis itaque corporis
            eaque quidem soluta natus perspiciatis, mollitia molestiae,
            consequatur similique accusantium quibusdam numquam ipsum explicabo
            amet. Hic, rerum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className='contacts'>
          <h2 className='title'>User info</h2>
          <div className='body'>
            <div className='contact-item'>
              <div className='contact-icon'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className='contact-details'>
                <span className='contact-title'>Location</span>
                <span className='contact-value'>Lagos, Nigeria</span>
              </div>
            </div>
            <div className='contact-item'>
              <div className='contact-icon'>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className='contact-details'>
                <span className='contact-title'>Phone</span>
                <span className='contact-value'>08105234564</span>
              </div>
            </div>
            <div className='contact-item'>
              <div className='contact-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className='contact-details'>
                <span className='contact-title'>Email</span>
                <span className='contact-value'>
                  janetakingbade2012@gmail.com
                </span>
              </div>
            </div>
            <div className='contact-item'>
              <div className='contact-icon'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className='contact-details'>
                <span className='contact-title'>Linkedin Profile</span>

                <span className='contact-value'>linkedin.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProfilePage;
