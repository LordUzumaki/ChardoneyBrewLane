import React, { useEffect, useState } from 'react';
import { getAllCoffees, deleteCoffee } from '../services/api/coffeeServices'; // Import deleteCoffee
import { useNavigate } from 'react-router-dom'; // Assuming you'll navigate to an edit page
import useAuth from '../hooks/useAuth'; // Import your auth hook

const CoffeeList = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Use navigate for redirection to edit
    const { isAdmin } = useAuth(); // Use the auth hook to get isAdmin status
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                const data = await getAllCoffees();
                setCoffees(data);
            } catch (error) {
                setError('Failed to fetch coffees');
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this coffee?');
        if (confirmed) {
            try {
                await deleteCoffee(id, token); // Pass token for authorization
                setCoffees(coffees.filter(coffee => coffee._id !== id));
            } catch (error) {
                setError('Failed to delete coffee');
            }
        }
    };

    const handleEdit = (id) => {
        // Navigate to the edit page or open a modal for editing
        navigate(`/edit-coffee/${id}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffees.map((coffee) => (
                <div key={coffee.id || coffee._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={`http://localhost:5000${coffee.imageUrl}`}
                        alt={coffee.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold text-gold-500">{coffee.name}</h3>
                        <p className="text-gold-300 mt-2">{coffee.description}</p>
                        <p className="text-gold-400 mt-4">{coffee.price}</p>
                        {/* Show edit and delete buttons only if admin is logged in */}
                        {isAdmin && (
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                    onClick={() => handleEdit(coffee._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    onClick={() => handleDelete(coffee._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoffeeList;

