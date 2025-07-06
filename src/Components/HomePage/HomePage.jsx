import React from 'react';
import Banner from '../Banner/Banner';
import './HomePage.css'
import FilmRows from '../FilimRows/FilmRows';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/navbar';
const HomePage = () => {
  return (
    <div className='homePage'>
    <Navbar/>
    <Banner/>
    <FilmRows/>
    <Footer/>
    </div>
  );
};

export default HomePage;
