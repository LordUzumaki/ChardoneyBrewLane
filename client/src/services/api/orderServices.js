// src/service/api/orderService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/orders';

export const getAllOrders = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export const getOrderById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching order data for ID ${id}:`, error);
        throw error;
    }
};

export const getCart = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/cart`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
};

export const addItemToCart = async (coffeeId, name, price) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `${API_BASE_URL}/cart`,
        { coffeeId, name, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Item added to cart:', response.data);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
