import React from 'react';
import Banner from '../Banner/Banner';
import './HomePage.css'
import FilmRows from '../FilimRows/FilmRows';
const HomePage = () => {
  return (
    <div className='homePage'>
    <Banner/>
    <FilmRows/>
    </div>
  );
};

export default HomePage;
