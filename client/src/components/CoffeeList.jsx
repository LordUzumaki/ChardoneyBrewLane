// src/components/CoffeeList.jsx
import React, { useEffect, useState } from 'react';
import { getAllCoffees } from '../services/api/coffeeServices';
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
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Coffee Menu</h1>
            <ul>
                {coffees.map(coffee => (
                    <li key={coffee._id}>{coffee.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CoffeeList; // Ensure this is the default export
