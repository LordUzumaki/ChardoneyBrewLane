// src/pages/CartPage.jsx
import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Log cart items to see changes
  useEffect(() => {
    console.log("Updated Cart Items:", cartItems);
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">{item.name}</span>
                  <span className="text-gray-500">Price per item: ${item.price.toFixed(2)}</span>
                  <span className="text-gray-500">Quantity: {item.quantity}</span>
                  <span className="text-gray-700 font-semibold">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4">
            <p className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;


