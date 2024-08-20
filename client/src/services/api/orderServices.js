// src/service/api/orderService.js
import axios from 'axios';

const API_BASE_URL = '/api/orders';

export const getAllOrders = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
