import React from 'react';
import IntroButton from '../IntroButton';

const Tab1 = () => {
  return (
    <div className="tab-1">
        <div>
          <p>
              If you decide MovieStorm isn't for you - no problem. No commitment.
              Cancel online anytime.
          </p>
          <IntroButton />
        </div>
        <img className='tab-1__img' src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
      </div> 
  );
};

export default Tab1;