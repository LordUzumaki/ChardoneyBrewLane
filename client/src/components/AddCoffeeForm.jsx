import React, { useState } from 'react';
import { addCoffee } from '../services/api/coffeeServices'; // Ensure this function handles file uploads

const AddCoffeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        available: true,
    });
    const [imageFile, setImageFile] = useState(null); // Store the selected image file

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);  // Capture the file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Get the auth token from localStorage

        // Prepare form data for submission, including file upload
        const coffeeFormData = new FormData();
        coffeeFormData.append('name', formData.name);
        coffeeFormData.append('price', formData.price);
        coffeeFormData.append('description', formData.description);
        coffeeFormData.append('category', formData.category);
        coffeeFormData.append('available', formData.available);
        coffeeFormData.append('image', imageFile);  // Append the file

        console.log(formData); // Log the form data for debugging

        try {
            const response = await addCoffee(coffeeFormData, token); // Send form data
            console.log('Coffee added:', response);
            // Optionally, clear the form or show a success message
        } catch (error) {
            console.error('Error adding coffee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
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
                name="image" 
                type="file"
                onChange={handleImageChange}  // Handle image file change
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
