import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + ((item.price || 0) * (item.quantity || 1)),
    0
  );

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id || item._id}>
              {item.name} - Quantity: {item.quantity || 1} - Price: $
              {(item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : '0.00')}
              <button onClick={() => removeFromCart(item.id || item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};



export default CartPage;


