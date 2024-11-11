import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addCoffee, getCoffeeById } from '../services/api/coffeeServices';

const AddCoffeeForm = () => {
    const { id } = useParams();  // Use ID if editing
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        available: true,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageFile, setImageFile] = useState(null);  // Image file state

    useEffect(() => {
        const fetchCoffee = async () => {
            if (id) {
                setLoading(true);
                try {
                    const data = await getCoffeeById(id);
                    setFormData(data);
                } catch (error) {
                    setError('Failed to fetch coffee details');
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchCoffee();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');  // Get auth token
    
        const coffeeFormData = new FormData();
        coffeeFormData.append('name', formData.name);
        coffeeFormData.append('price', Number(formData.price)); // Ensure price is a number
        coffeeFormData.append('description', formData.description);
        coffeeFormData.append('category', formData.category);
        coffeeFormData.append('available', formData.available);
        if (imageFile) coffeeFormData.append('image', imageFile);  // Append image if available
    
        try {
            await addCoffee(coffeeFormData, token);  // Use the API to add or update
            navigate('/menu');  // Redirect to menu after submission
        } catch (error) {
            setError('Error submitting coffee');
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
                {id ? 'Update Coffee' : 'Add Coffee'}  {/* Change button text based on action */}
            </button>
        </form>
    );
};

export default AddCoffeeForm;
