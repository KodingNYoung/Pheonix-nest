import React, { useState } from "react";
import { HomeNavbar } from "../../components/Navs/Navs";
import { Anchor } from "../../components/Navs/Links";
import banner_image from "../../assets/img/pitch-banner.png";

import "./ProfilePage.css";

import avatar from "../../assets/img/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faShareAlt } from "@fortawesome/free-solid-svg-icons";

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
              <a
                href='https://www.linkedin.com'
                className='linkedin transparent-link'
              >
                linkedin.com
              </a>
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
        <div className='contact'>
          <h2 className='title'>User info</h2>
          <div className='body'>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
