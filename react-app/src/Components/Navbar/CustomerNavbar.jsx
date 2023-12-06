import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/redcart.png'

const CustomerNavbar = () => {
  const location = useLocation();

  const shouldRenderNavbar = location.pathname.startsWith('/c');

  return shouldRenderNavbar ? (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" className="logo-image"/>
      </div>
      <div className="buttons">
        <Link to="/c"> <button>Search</button> </Link>
        <Link to="/c/profile"> <button>My Profile</button> </Link>
        <Link to="/c/cart">
        <button>
          <img src={cart_icon} alt="Cart" className="cart-image"/>
        </button>
        </Link>
        <Link to="/"> <button>Home</button> </Link>
      </div>
    </div>
  ) : null
}

export default CustomerNavbar