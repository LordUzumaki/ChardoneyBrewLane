// src/pages/CartPage.jsx
import React, { useState, useEffect } from 'react';
import { getCart } from '../services/api/orderServices';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        setError('Failed to load cart');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cart) return <p>Your cart is empty</p>;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cart.items.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
      <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;

