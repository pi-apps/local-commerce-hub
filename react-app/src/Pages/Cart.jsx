import React from 'react';
import './Cart.css';
import { useCart } from './CartContext.jsx';

const Cart = ({ cart }) => {
  // Check if cart is defined
  if (!cart || !cart.length) {
    return (
      <div className="cart-container">
        <h1 className="cart-header">Cart</h1>
        <p className="empty-cart-message">Your cart is empty.</p>
      </div>
    );
  }

  // Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="cart-header">Cart</h1>
      <ul className="cart-item-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} - Quantity: {item.quantity} - Price: {item.price.toFixed(2)} pi
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: {total} pi</p>
    </div>
  );
};

export default Cart;