import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/coffee'; // Assuming this is the correct base URL

export const getAllCoffees = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching coffee data:', error);
        throw error;
    }
};

export const addCoffee = async (coffeeData, token) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/add`, // Ensure the endpoint is correct
            coffeeData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the authorization header with the token
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding coffee:', error);
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
