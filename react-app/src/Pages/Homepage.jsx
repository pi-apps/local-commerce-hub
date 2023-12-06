import React from 'react';
import { Link } from 'react-router-dom'
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="homepage-buttons">
        <Link to="/c"> <button>Log In As Customer</button> </Link>
        <Link to="/b"> <button>Log In As Business</button> </Link>
      </div>
    </div>
  );
};

export default HomePage;