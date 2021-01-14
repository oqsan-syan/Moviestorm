import React from 'react';
import IntroButton from './IntroButton';

const Content = () => {
  return (
    <div className="intro__content">
      <div className='intro__text'>
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
      </div>
        <IntroButton />
    </div>
  );
};

export default Content;