import React, { useState } from 'react'
import { useAuth } from "../../Context/UseAuth";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {logout} =useAuth()

  const handleSignOut=()=>{logout()}
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="Netflix" />
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to='/'>Home</Link></li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li><Link to='/wishlist'>My List</Link></li>
          <li>Browse by Languages</li>
        </ul>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      <div className='navbar-right'>
        <img src={search_icon} alt="Search" className='icons' />
        <p className="children">Children</p>
        <img src={bell_icon} alt="Bell" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            <button className="signout-button" onClick={handleSignOut}>
              Sign Out
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
