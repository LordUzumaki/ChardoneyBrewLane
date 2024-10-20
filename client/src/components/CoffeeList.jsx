import React, { useEffect, useState } from 'react';
import { getAllCoffees } from '../services/api/coffeeServices'; 
import { addItemToCart } from '../services/api/cartServices'; // Import cart service

const CoffeeList = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const handleAddToCart = async (coffee) => {
        const coffeeData = {
            coffeeId: coffee._id, // or coffee.id depending on your schema
            name: coffee.name,
            price: coffee.price,
        };

        try {
            await addItemToCart(coffeeData); // Send coffee data to the cart service
            console.log('Coffee added to cart');
        } catch (error) {
            console.error('Error adding coffee to cart:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffees.map((coffee) => (
                <div key={coffee._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={`http://localhost:5000${coffee.imageUrl}`}
                        alt={coffee.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold text-gold-500">{coffee.name}</h3>
                        <p className="text-gold-300 mt-2">{coffee.description}</p>
                        <p className="text-gold-400 mt-4">${coffee.price}</p>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            onClick={() => handleAddToCart(coffee)} // Trigger add to cart
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoffeeList;

