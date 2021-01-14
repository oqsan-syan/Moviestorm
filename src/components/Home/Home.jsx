import React from 'react';
import Logo from '../Logo/Logo';
import TabPanel from './Tabs/TabPanel'
import './Home.scss';
import Intro from './Intro';

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Intro />
      <TabPanel />
    </div>
  );
};

export default Home;
