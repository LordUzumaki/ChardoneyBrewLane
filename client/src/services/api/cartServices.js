import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/orders/cart'; // Assuming this is the correct base URL

// Add item to cart
export const addItemToCart = async (itemData) => {
  try {
    const token = localStorage.getItem('token'); // Check if the user is logged in
    const headers = token
      ? { Authorization: `Bearer ${token}` }
      : {}; // Send token if available

    const response = await axios.post(API_BASE_URL, itemData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};




export const getCart = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    console.log('Cart data fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error.response ? error.response.data : error.message);
    throw error; // Ensure you re-throw it to propagate the error
  }
};

