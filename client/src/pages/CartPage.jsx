import React, { useState, useEffect } from 'react';
import { getCart } from '../services/api/cartServices';  // Ensure this is correctly implemented

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();  // Fetch cart from backend
        console.log('Cart data:', data);
        setCart(data);
      } catch (error) {
        setError('Failed to load cart');
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart && cart.items.length > 0 ? (
        <ul>
          {cart.items.map(item => (
            <li key={item._id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p>Total Price: ${cart.totalPrice}</p>
    </div>
  );
};

export default CartPage;
