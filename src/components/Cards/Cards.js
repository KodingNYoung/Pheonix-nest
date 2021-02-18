import React from 'react';

import './Cards.css'

export const Cards = ({children, boxShadow}) => {
  const cardStyle = {
    boxShadow: {boxShadow}? {boxShadow}: '0 2px 4px #cccccc' 
  }
  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  )
}
