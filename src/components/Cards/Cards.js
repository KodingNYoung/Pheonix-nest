import React from "react";
import { Anchor } from "../../components/Navs/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Cards.css";

const Card = ({ children, boxShadow, className, ...rest }) => {
  const cardStyle = {
    boxShadow: { boxShadow } ? { boxShadow } : "0",
  };
  return (
    <div className={`card ${className}`} style={cardStyle} {...rest} >
      {children}
    </div>
  );
};
export const StepCard = ({ image, step, stepNo }) => {
  return (
    <Card className="step-card" data-step-no={stepNo}>
      <div className="card-illustration">
        <img src={image} alt="" />
      </div>
      <p className="card-text">{step}</p>
    </Card>
  );
};
export const TestimonialCard = ({ avatar, author, position, text }) => {
  return (
    <Card className="testimonial-card" boxShadow="0px 2px 4px #0000000a">
      <div className="card-img">
        <img src={avatar} />
      </div>
      <div className="card-title">
        <span className="name">{author}</span>
        <span> / </span>
        <span>{position}</span>
      </div>
      <p className="card-text">{text}</p>
    </Card>
  );
};
export const IndustryCard = ({ name, icon }) => {
  return (
    <div className="industry-card">
      <div className="industry-icon">{icon}</div>
      <span className="industry-name">{name}</span>
    </div>
  );
};
export const PitchCard = ({ pitchData }) => {
  const { like_count, title, _id, avatar_url, fullname } = pitchData;
  return (
    <Anchor
      to={{ pathname: `/user/pitch/${_id}` }}
      className="pitch-card"
      id={_id}
    >
      <div className="img-container">
        <img src={avatar_url} />
      </div>
      <div className="pitch-details">
        <div className="thumbs">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{like_count}</span>
        </div>
        <p className="pitch-title">{title}</p>
        <span className="pitch-owner">
          - <span className="name">{fullname}</span>
        </span>
      </div>
    </Anchor>
  );
};
