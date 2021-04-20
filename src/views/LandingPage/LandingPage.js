import React from "react";

// components
import { Navbar } from "../../components/Navs/Navs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "../../components/Navs/Links";
import {TestimonialCard, StepCard } from "../../components/Cards/Cards";
// css
import "./LandingPage.css";

// images and svgs
import arrow_right from "../../assets/img/Welcome/arrow_right.png";
import explore from "../../assets/img/Welcome/explore.png";
import choose from "../../assets/img/Welcome/choose.png";
import contact from "../../assets/img/Welcome/contact.png";
import deal from "../../assets/img/Welcome/deal.png";
import avatar1 from "../../assets/img/Welcome/avatar1.png";
import avatar2 from "../../assets/img/Welcome/avatar2.png";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="landingPage-main">
        <section className="hero">
          <div className="hero-text-one">
            <h1>Pitch it Here. The World will be Glad You Did</h1>
            <Anchor to="/login" className="dspr-lg">
              <span>We Connect Investors to your Idea. Start now</span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Anchor>
          </div>
          <div className="hero-text-two">
            <h2 className="dspr-lg">You can Change the World with Your Idea</h2>
            <p>
              The world is constantly in search of great minds for the
              betterment of humanity. We provide a platform where investors meet
              future possibilities like your idea and work with you to make it
              come to life.
            </p>
            <Link to="/login">
              <span>Let's Get You Started</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
        <section className="about">
          <div className="counts">
            <div className="count-item">
              <span className="value">1400+</span>
              <span className="item">Unique Pitches</span>
            </div>
            <div className="count-item">
              <span className="value">600+</span>
              <span className="item">Investments on Pitches</span>
            </div>
            <div className="count-item">
              <span className="value">33+</span>
              <span className="item">Unique Industries</span>
            </div>
          </div>
          <div className="investors investment-steps">
            <h2>
              <span>Are You an</span> Investor?
            </h2>
            <small className="subheading">
              We have made it easy for you to find great ideas you can invest
              in.
            </small>
            <div className="card-grid step-card-grid">
              <StepCard
                image={explore}
                step="Explore Pitches in Various Industries"
                stepNo="1"
              />
              <StepCard
                image={choose}
                step="Choose your favourite idea"
                stepNo="2"
              />
              <StepCard
                image={contact}
                step="contact the pitcher"
                stepNo="3"
              />
              <StepCard
                image={deal}
                step="make the world grateful for your investment"
                stepNo="4"
              />
            </div>
            <Anchor className="get-started-link primary-link yellow-link" to="/login">
              get started now
            </Anchor>
          </div>
        </section>
        <section className="testimonials">
          <h2>
            Pitchers <span>Testimonial</span>
          </h2>
          <div className="card-grid">
            <TestimonialCard
              avatar={avatar1}
              author="John Mathew"
              position="CEO Coalite Group"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata"
            />
            <TestimonialCard
              avatar={avatar2}
              author="Mary Slesor"
              position="CEO Grade Goals"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
