import React from "react";
import { Anchor } from "../../components/Navs/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Cards.css";

export const Cards = ({ children, boxShadow }) => {
  const cardStyle = {
    boxShadow: { boxShadow } ? { boxShadow } : "0 2px 4px #cccccc",
  };
  return (
    <div className='card' style={cardStyle}>
      {children}
    </div>
  );
};

export const IndustryCard = ({ name, icon }) => {
  return (
    <div className='industry-card'>
      <div className='industry-icon'>{icon}</div>
      <span className='industry-name'>{name}</span>
    </div>
  );
};
export const PitchCard = ({ pitchData }) => {
  const { like_count, title, _id, avatar_url, fullname } = pitchData;
  return (
    <Anchor
      to={{ pathname: `/user/pitch/${_id}` }}
      className='pitch-card'
      id={_id}
    >
      <div className='img-container'>
        <img src={avatar_url} />
      </div>
      <div className='pitch-details'>
        <div className='thumbs'>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{like_count}</span>
        </div>
        <p className='pitch-title'>{title}</p>
        <span className='pitch-owner'>
          - <span className='name'>{fullname}</span>
        </span>
      </div>
    </Anchor>
  );
};
