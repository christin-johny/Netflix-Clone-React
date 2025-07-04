import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-wrapper'>
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
          className="logo"
        />

        <div className="navbar-right">
          <div className="dropdown">
            <select>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          <button className="signout-btn">Sign Out</button>
        </div>
      </div>      
    </div>
  );
};

export default Navbar;