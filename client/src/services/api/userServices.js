import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users'; // Base URL for user-related endpoints

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials); // POST for login
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData); // POST for signup
        return response.data;
    } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
    }
};
