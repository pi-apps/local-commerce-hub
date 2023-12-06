import { createContext, useContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState(all_product.map(() => 0));

  const value = {
    cart,
    setCart,
    itemCounts,
    setItemCounts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};