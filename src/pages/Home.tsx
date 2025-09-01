import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import UpcomingEvents from '../components/UpcomingEvents';
import Mission from '../components/Mission';

const Home: React.FC = () => {
  return (
    <>
      <HeroSlideshow />
      <UpcomingEvents />
      <Mission />
    </>
  );
};

export default Home;