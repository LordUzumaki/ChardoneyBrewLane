import React, { useState } from 'react';
import { addCoffee } from '../services/api/coffeeServices';

const AddCoffeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        category: '',
        available: true,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

        try {
            const response = await addCoffee(formData, token); // Use the addCoffee function from the service
            console.log('Coffee added:', response);
            // Optionally, clear the form or show a success message
        } catch (error) {
            console.error('Error adding coffee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                required 
                className="w-full p-2 border rounded"
            />
            <input 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                placeholder="Price" 
                required 
                type="number"
                className="w-full p-2 border rounded"
            />
            <input 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Description" 
                required 
                className="w-full p-2 border rounded"
            />
            <input 
                name="imageUrl" 
                value={formData.imageUrl} 
                onChange={handleChange} 
                placeholder="Image URL" 
                className="w-full p-2 border rounded"
            />
            <input 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                placeholder="Category" 
                className="w-full p-2 border rounded"
            />
            <label className="flex items-center">
                <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                    className="mr-2"
                />
                Available
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Add Coffee
            </button>
        </form>
    );
};

export default AddCoffeeForm;
