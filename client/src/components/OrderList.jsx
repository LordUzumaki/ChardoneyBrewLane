// src/components/OrderList.jsx
import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../services/api/orderServices';

const OrderList = ({ readOnly = false }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (error) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  const handleIncrease = (id) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order._id === id ? { ...order, quantity: order.quantity + 1 } : order
      )
    );
  };
  

const handleDecrease = (id) => {
    setOrders(prevOrders =>
    prevOrders
        .map(order =>
        order._id === id && order.quantity > 1
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
        .filter(order => order.quantity > 0) // Remove items with 0 quantity
    );
};

const handleRemove = (id) => {
    setOrders(prevOrders =>
      prevOrders.filter(order => order._id !== id)
    );
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <span>{order.name}</span> - <span>${order.price.toFixed(2)}</span>
            {!readOnly && (
              <>
                <button onClick={() => handleIncrease(order._id)}>+</button>
                <button onClick={() => handleDecrease(order._id)}>-</button>
                <button onClick={() => handleRemove(order._id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default OrderList;

