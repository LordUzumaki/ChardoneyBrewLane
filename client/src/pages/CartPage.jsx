// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import OrderList from '../components/OrderList';

function CartPage() {
  const hasOrder = true;  // This should ideally be derived from the actual state of the orders

  return (
    <div className="cart-page">
      {hasOrder ? (
        <>
          <OrderList />
          
          <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
        </>
      ) : (
        <>
          <h1>Your Cart is Empty</h1>
          <Link to="/menu">Back to Menu</Link>
        </>
      )}
    </div>
  );
}

export default CartPage;
