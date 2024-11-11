// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i._id === item._id);
      if (itemExists) {
        return prevItems.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Updated removeFromCart function
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item._id === itemId) {
            // Decrease quantity if greater than 1
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            // Return null if quantity is 1 (to remove it)
            return null;
          }
          return item;
        })
        .filter((item) => item !== null) // Filter out null entries (items with quantity 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
