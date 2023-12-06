import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png'

const BusinessNavbar = () => {
  const location = useLocation();

  const shouldRenderNavbar = location.pathname.startsWith('/b');

  return shouldRenderNavbar ? (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" className="logo-image"/>
      </div>
      <div className="buttons">
        <Link to="/b"> <button>My Profile</button> </Link>
        <button>View Orders</button>
        <Link to="/"> <button>Home</button> </Link>
      </div>
    </div>
  ) : null
}

export default BusinessNavbar