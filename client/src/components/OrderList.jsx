// src/components/OrderList.jsx
import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../services/api/orderServices';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>{order.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
