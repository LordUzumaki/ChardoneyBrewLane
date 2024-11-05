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
      const formData = new FormData();
      formData.append('name', coffeeData.name);
      formData.append('price', coffeeData.price);
      formData.append('description', coffeeData.description);
      formData.append('category', coffeeData.category);
      formData.append('available', coffeeData.available);
      formData.append('image', coffeeData.image); // Ensure 'image' is a File object
  
      const response = await axios.post('http://localhost:5000/api/coffee/add', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error adding coffee:', error.response?.data || error.message);
      throw error;
    }
  
};

// Fix: Use API_BASE_URL and include Authorization header
export const deleteCoffee = async (id, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting coffee:', error);
        throw error;
    }
};

// Fix: Use API_BASE_URL and include Authorization header
export const updateCoffee = async (id, coffeeData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, coffeeData, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating coffee:', error);
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
