// src/service/api/coffeeService.js
import axios from 'axios';

// Base URL setup (could be environment-specific)
const API_BASE_URL = '/api/coffees';

export const getAllCoffees = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching coffee data:', error);
        throw error;
    }
};

export const getCoffeeById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching coffee data for ID ${id}:`, error);
        throw error;
    }
};

// Add more functions as needed for other API interactions
