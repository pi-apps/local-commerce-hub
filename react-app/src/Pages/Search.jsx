import React, { useState } from 'react';
import restaurantData from '../Components/Assets/all_restaurants.js'
import './Search.css'; // Import the CSS file
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <div className="search-container"> {/* Add class name to the container */}
      <h1>Search for Restaurants</h1>
      <input
        type="text"
        placeholder="Search for a restaurant..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {searchText && (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div
                className="restaurant-image"
              ></div>
              <h2>{restaurant.name}</h2>
              <Link to="/c/bobahouse">
              <button>Order</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;