import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users'; // Correct the URL by adding 'http://'

// Function to handle user login
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials); // Use POST for login with credentials
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Function to handle user signup
export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData); // Use POST for signup with userData
        return response.data;
    } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
    }
};
