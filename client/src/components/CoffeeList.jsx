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
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/300" alt={coffee.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gold-500">{coffee.name}</h3>
                <p className="text-gold-300 mt-2">{coffee.description}</p>
                <p className="text-gold-400 mt-4">{coffee.price}</p>
              </div>
            </div>
          ))}
        </div>
      );
};


export default CoffeeList;
