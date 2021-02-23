import React from "react";

// components
import { Burger } from "../../components/Burger/Burger";
import { Brand } from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faComments,
  faSearch,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "../../components/Buttons_Links/Links";

// css
import "./HomePage.css";

// images and svgs
import hero from "../../assets/img/home-hero.png";
import image1 from "../../assets/img/image1.png";
import { ReactComponent as Agriculture } from "../../assets/svg/agriculture.svg";
import { ReactComponent as Fashion } from "../../assets/svg/fashion.svg";
import { ReactComponent as Retail } from "../../assets/svg/retail.svg";
import { ReactComponent as Technology } from "../../assets/svg/technology.svg";
import { HomeNavbar } from "../../components/Navs/Navs";
import { SearchField } from "../../components/FormView/Inputs";
import { NavLink } from "../../components/Navs/NavLinks";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className='home'>
      <HomeNavbar />
      <div className='hero'>
        <div className='lg-screen-disp'>
          <div className='container'>
            <h1 className='heading'>
              <span>Don't give up on your dreams.</span>
              <span>Chase it till it happens.</span>
            </h1>
            <SearchField />
            <div className='industry-slide'>
              <div className='slide-show'>
                <button className='left-control-btn control-btn'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className='slide-container'>
                  <IndustryCard name='agriculture' icon={<Agriculture />} />
                  <IndustryCard name='technology' icon={<Technology />} />
                  <IndustryCard name='fashion' icon={<Fashion />} />
                  <IndustryCard name='retail' icon={<Retail />} />
                </div>
                <button className='right-control-btn control-btn'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <NavLink>Explore more industries</NavLink>
            </div>
          </div>
          <NavLink to='/messages' className='message-icon'>
            <FontAwesomeIcon icon={faComments} />
            <span>messages</span>
          </NavLink>
        </div>
        <div className='sm-screen-disp'>
          <SearchField />
          <div className='hero-carousel'>
            <div className='carousel-slide'>
              <div className='slide-item'>
                <div className='img-container'>
                  <img src={hero} />
                </div>
                <div className='carousel-text'>
                  <h2>What's Holding You Back?</h2>
                  <NavLink to='/' className='primary-link'>
                    Pitch your idea today
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='carousel-indicators'>
              <span className='indicator'></span>
              <span className='indicator'></span>
              <span className='indicator'></span>
              <span className='indicator active'></span>
              <span className='indicator'></span>
            </div>
          </div>
          <div className='industry-pitches'>
            <h2>Explore Pitches in Various Industries</h2>
            <div className='pitches-grid'>
              <IndustryCard icon={<Agriculture />} name='agriculture' />
              <IndustryCard icon={<Technology />} name='technology' />
              <IndustryCard icon={<Fashion />} name='fashion' />
              <IndustryCard icon={<Retail />} name='retail' />
            </div>
            <NavLink to='' className='transparent-link'>
              see all
            </NavLink>
          </div>
        </div>
      </div>
      <div className='rated-pitches'>
        <h2>Check out the Most Rated Pitches</h2>
        <div className='pitch-card-grid'>
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};
const IndustryCard = ({ name, icon }) => {
  return (
    <div className='industry-card'>
      <div className='industry-icon'>{icon}</div>
      <span className='industry-name'>{name}</span>
    </div>
  );
};
const PitchCard = ({}) => {
  return (
    <div className='pitch-card'>
      <div className='img-container'>
        <img src={image1} />
      </div>
      <div className='pitch-details'>
        <div className='thumbs'>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>245</span>
        </div>
        <p className='pitch-title'>
          Vertical farming landscape to minimise land space use
        </p>
        <span className='pitch-owner'>
          - <span className='name'>janet</span>
        </span>
      </div>
    </div>
  );
};
export default HomePage;
