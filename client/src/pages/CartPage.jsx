import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderList from '../components/OrderList';
import { getAllOrders } from '../services/api/orderServices'; // Import the API function to get orders

function CartPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data); // Populate the cart with fetched orders
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="cart-page">
      {loading ? (
        <p>Loading cart...</p>
      ) : orders.length > 0 ? (
        <>
          <OrderList orders={orders} />
          <Link to="/checkout" className="btn-primary">
            Proceed to Checkout
          </Link>
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
