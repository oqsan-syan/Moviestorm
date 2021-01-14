import React from 'react';
import Content from './Content';
import Video from './Video';

const Intro = () => {
  return (
    <div className="intro">
        <Video />
        <Content />
      </div>
  );
};

export default Intro;