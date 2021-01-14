import React from 'react';
import bgVideo from './assets/videos/StrangerThings.mp4';

const Video = () => {
  return (
    <div className="intro__video">
      <video controls autoPlay muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;