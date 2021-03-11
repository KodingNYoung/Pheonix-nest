import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

// css
import "./HomePage.css";

// images and svgs
import hero from "../../assets/img/home-hero.webp";
import { ReactComponent as Agriculture } from "../../assets/svg/agriculture.svg";
import { ReactComponent as Fashion } from "../../assets/svg/fashion.svg";
import { ReactComponent as Retail } from "../../assets/svg/retail.svg";
import { ReactComponent as Technology } from "../../assets/svg/technology.svg";
import { SearchField } from "../../components/FormView/Inputs";
import { NavLink } from "../../components/Navs/NavLinks";
import Footer from "../../components/Footer/Footer";
import { IndustryCard, PitchCard } from "../../components/Cards/Cards";
import Error from "../../components/Toasts/Error";

const HomePage = () => {
  const [pitches, setPitches] = useState([]);
  const [error, setError] = useState(null);
  const { getTopPitches, getUserProfile } = useAuthContext();

  useEffect(() => {
    const unsub = getTopPitches()
      .then((res) => res.payload)
      .then((data) => {
        // getthe data for the pitches
        const pitchItems = data.map((pitch) => {
          // spread the important data
          const { author, like_count, title, _id } = pitch;
          // get the users profile, (use the return word to return a value of the request to the maplist)
          return getUserProfile(author).then((response) => {
            // if successful
            if (response.success) {
              // spread out the important data
              const { avatar_url, fullname } = response.payload;
              // return the card useful data
              return { like_count, title, _id, fullname, avatar_url };
            } else {
              // else return false
              return false;
            }
          });
        });
        // get the result of the promises
        Promise.all(pitchItems).then((pitchData) => {
          // filter out the responses with false
          const pitchList = pitchData.filter((pitch) => pitch !== false);
          // set the new list as the pitches to be displayed
          setPitches(pitchList);
        });
      });
    return unsub;
  }, [getTopPitches, getUserProfile]);

  return (
    <div className='home'>
      {error && <Error>{error}</Error>}
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
              <NavLink to=''>Explore more industries</NavLink>
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
      {pitches && (
        <div className='rated-pitches'>
          <h2>Check out the Most Rated Pitches</h2>
          <div className='pitch-card-grid'>
            {pitches.map((pitch) => {
              return <PitchCard pitchData={pitch} key={pitch._id} />;
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default HomePage;
