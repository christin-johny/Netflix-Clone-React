import React from "react";
import Navbar from "../Navbar/navbar";
import "./Banner.css"; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>

      <div className="banner-content-wrapper">
        <Navbar />

        <div className="banner-content">
          <h1>Unlimited movies,<br/> TV shows and more</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
