import React from 'react';
import IntroButton from '../IntroButton'

const Tab2 = () => {
  return (
    <div className="tab-2">
        <div className="tab-2__top">
          <p>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </p>
          <IntroButton />
        </div>
        <div className="tab-2__bottom">
          <div>
            <img className='tab-2__img' src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
            <p>Watch on your TV</p>
            <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>

          <div>
            <img className='tab-2__img' src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
            <p>Watch instantly or download for later</p>
            <p>Available on phone and tablet, wherever you go.</p>
          </div>

          <div>
            <img className='tab-2__img' src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
            <p>Use any computer</p>
            <p>Watch right on Netflix.com.</p>
          </div>
        </div>
      </div>
  );
};

export default Tab2;