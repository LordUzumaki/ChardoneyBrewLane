import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/orders';

// Add item to cart
export const addItemToCart = async (coffeeId, name, price) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    // Explicitly convert price to a number before sending
    const response = await axios.post(
      `http://localhost:5000/api/orders/cart`,
      { coffeeId, name, price: Number(price) },
      { headers }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};



// Get cart items
export const getCart = async () => {
  try {
    const token = localStorage.getItem('token'); // Check if the user is logged in
    const headers = token
      ? { Authorization: `Bearer ${token}` }
      : {}; // Send token if available

    const response = await axios.get(`${API_BASE_URL}/cart`, { headers });
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching cart items:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};


