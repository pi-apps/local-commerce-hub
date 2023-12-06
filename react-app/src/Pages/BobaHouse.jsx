import React, { useState } from 'react';
import './BobaHouse.css';
import backdrop from '../Components/Assets/shop_sign.png';
import all_product from '../Components/Assets/all_product';
import { useCart } from './CartContext.jsx';

const BobaHouse = () => {
  // State to keep track of the count of added items
  const [itemCounts, setItemCounts] = useState(all_product.map(() => 0));

  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding an item
  const handleAddItem = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index] += 1;
    setItemCounts(newCounts);

    setCart((cart) => {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex((item) => item.id === all_product[index].id);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update quantity
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist in the cart, add it
        updatedCart.push({
          id: all_product[index].id,
          name: all_product[index].name,
          price: all_product[index].price,
          quantity: 1,
        });
      }

      return updatedCart;
    });
    // Add additional logic here if needed
  };

  // Function to handle removing an item
  const handleRemoveItem = (index) => {
    if (itemCounts[index] > 0) {
      const newCounts = [...itemCounts];
      newCounts[index] -= 1;
      setItemCounts(newCounts);

      setCart((cart) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex((item) => item.id === all_product[index].id);

        if (existingItemIndex !== -1) {
          // Item exists in the cart, update quantity
          updatedCart[existingItemIndex].quantity -= 1;

          // Remove the item if the quantity becomes zero
          if (updatedCart[existingItemIndex].quantity === 0) {
            updatedCart.splice(existingItemIndex, 1);
          }
        }

        return updatedCart;
      });
      // Add additional logic here if needed
    }
  };

  return (
  <div>
    <div className="banner">
      <img src={backdrop} alt="" className="hero-image"/>
      <div className="hero-text">
        <h1>Boba House</h1>
      </div>
    </div>

    <div className="product-list">
    {all_product.map((product, index) => (
      <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.price.toFixed(2)} pi</p>
          <div className="action-buttons">
            <button className="add-button" onClick={() => handleAddItem(index)}>Add to Cart</button>
            <div className="item-count-box">
              <p>{itemCounts[index]}</p>
            </div>
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
};

export default BobaHouse;