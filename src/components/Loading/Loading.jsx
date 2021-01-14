import React from 'react';
import spinner from './spinner.gif';
import './Loading.scss';

const Loading = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt="spinner"/>
    </div>
  );
};

export default Loading;