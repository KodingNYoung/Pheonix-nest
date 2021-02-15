import React from "react";

// components
import { Burger } from "../../components/Burger/Burger";
import { Brand } from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

const HomePage = () => {
  return (
    <div className="home">
      <nav>
        <div className="nav-top">
          <Burger className="burger-icon" />
          <Brand className="nav-brand" />
        </div>
        <form className="search-field">
          <input
            type="text"
            name="search"
            placeholder="Search for a Pitch"
            id="search"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </nav>
      <section className="hero">
        <img src={hero} />
        <h1>What's Holding You Back?</h1>
        <Anchor to="/" className="primary-link">
          Pitch Your idea today
        </Anchor>
      </section>
      <section className="industry-picthes">
        <h2>Explore Pitches in Various Inustries</h2>
        <div className="industries-grid">
          <div className="industry">
            <div className="industry-img">
              <Agriculture />
            </div>
            <span>Agriculture</span>
          </div>
          <div className="industry">
            <div className="industry-img">
              <Technology />
            </div>
            <span>Technology</span>
          </div>
          <div className="industry">
            <div className="industry-img">
              <Fashion />
            </div>
            <span>Fashion</span>
          </div>
          <div className="industry">
            <div className="industry-img">
              <Retail />
            </div>
            <span>Retail</span>
          </div>
        </div>
        <Anchor to="/" className="transparent-link">
          See all
        </Anchor>
      </section>
      <section className="rated-pitches">
        <h2>Checkout the most rated pitches</h2>
        <div className="pitches">
          <div className="pitch-card">
            <div className="card-img">
              <img src={image1} />
            </div>
            <div className="card-text">
              <span className="clap-count">253</span>
              <span className="pitch-topic">
                Vertical farming landscape to minimise land space use
              </span>
              <span className="pitch-owner">-janet</span>
            </div>
          </div>
          <div className="pitch-card">
            <div className="card-img">
              <img src={image1} />
            </div>
            <div className="card-text">
              <span className="clap-count">253</span>
              <span className="pitch-topic">
                Vertical farming landscape to minimise land space use
              </span>
              <span className="pitch-owner">-janet</span>
            </div>
          </div>
          <div className="pitch-card">
            <div className="card-img">
              <img src={image1} />
            </div>
            <div className="card-text">
              <span className="clap-count">253</span>
              <span className="pitch-topic">
                Vertical farming landscape to minimise land space use
              </span>
              <span className="pitch-owner">-janet</span>
            </div>
          </div>
          <div className="pitch-card">
            <div className="card-img">
              <img src={image1} />
            </div>
            <div className="card-text">
              <span className="clap-count">253</span>
              <span className="pitch-topic">
                Vertical farming landscape to minimise land space use
              </span>
              <span className="pitch-owner">-janet</span>
            </div>
          </div>
          <div className="pitch-card">
            <div className="card-img">
              <img src={image1} />
            </div>
            <div className="card-text">
              <span className="clap-count">253</span>
              <span className="pitch-topic">
                Vertical farming landscape to minimise land space use
              </span>
              <span className="pitch-owner">-janet</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
