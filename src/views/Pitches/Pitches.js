import React from 'react'
import { PitchCard } from '../../components/Cards/Cards';

const Pitches = () => {
  return (
    <div className='pitches'>
      <h2>Check out the Most Rated Pitches</h2>
      <div className='pitch-card-grid'>
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
        <PitchCard cardImage={image1} />
      </div>
    </div>
  );
}

export default Pitches
