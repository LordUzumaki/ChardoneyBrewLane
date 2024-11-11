import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCoffeeById, updateCoffee } from '../services/api/coffeeServices';

const EditCoffeePage = () => {
    const { id } = useParams(); // Ensure you are getting the correct ID from URL params
    const navigate = useNavigate();
    const [coffee, setCoffee] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        available: true,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoffee = async () => {
            try {
                const data = await getCoffeeById(id); // Ensure you pass the correct ID
                setCoffee(data);
            } catch (error) {
                setError('Failed to fetch coffee details');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCoffee();
        }
    }, [id]);

    const handleChange = (e) => {
        setCoffee({ ...coffee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        try {
            await updateCoffee(id, coffee, token); // Make sure `id` is being passed correctly
            navigate('/');
        } catch (error) {
            setError('Failed to update coffee');
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Coffee</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    name="name"
                    value={coffee.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    name="price"
                    value={coffee.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                    type="number"
                    className="w-full p-2 border rounded"
                />
                <input
                    name="description"
                    value={coffee.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    name="category"
                    value={coffee.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full p-2 border rounded"
                />
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="available"
                        checked={coffee.available}
                        onChange={(e) => setCoffee({ ...coffee, available: e.target.checked })}
                        className="mr-2"
                    />
                    Available
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Update Coffee
                </button>
            </form>
        </div>
    );
};

export default EditCoffeePage;
