// src/components/CoffeeItem.jsx
import React from 'react';
import { addItemToCart } from '../services/api/orderServices';  // Implement this API call

const CoffeeItem = ({ coffee }) => {
  const handleAddToCart = async () => {
    try {
      await addItemToCart({ coffeeId: coffee._id, name: coffee.name, price: coffee.price });
      alert('Item added to cart');
    } catch (error) {
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="coffee-item">
      <h3>{coffee.name}</h3>
      <p>${coffee.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CoffeeItem;
