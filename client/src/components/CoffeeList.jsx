import React, { useEffect, useState } from 'react';
import { getAllCoffees, deleteCoffee } from '../services/api/coffeeServices'; // Ensure these API services are correct
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null); // To manage delete loading state
  const navigate = useNavigate();
  const { isAdmin } = useAuth(); // Assuming your hook works correctly for admin authentication
  const token = localStorage.getItem('token'); // Ensure token is in localStorage

  // Fetch all coffees
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const data = await getAllCoffees(); // Fetch coffee data from API
        setCoffees(data); // Set fetched coffees to state
      } catch (err) {
        setError('Failed to fetch coffees'); // Catch and set any errors
      } finally {
        setLoading(false); // Ensure loading stops
      }
    };

    fetchCoffees();
  }, []);

  // Handle delete coffee with loading
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this coffee?');
    if (confirmed) {
      setIsDeleting(id);
      try {
        await deleteCoffee(id, token); // Call delete API
        setCoffees(coffees.filter((coffee) => coffee._id !== id)); // Filter out deleted coffee from state
      } catch (err) {
        setError('Failed to delete coffee');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  // Handle edit coffee
  const handleEdit = (id) => {
    navigate(`/edit-coffee/${id}`); // Navigate to the edit page
  };

  // Loading and error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.length > 0 ? (
          coffees.map((coffee) => (
            <div key={coffee._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={`http://localhost:5000${coffee.imageUrl}`}
                alt={coffee.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gold-500">{coffee.name}</h3>
                <p className="text-gold-300 mt-2">{coffee.description}</p>
                <p className="text-gold-400 mt-4">${coffee.price.toFixed(2)}</p>
                {/* Show buttons if admin */}
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
                      disabled={isDeleting === coffee._id}
                    >
                      {isDeleting === coffee._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No coffees available.</p>
        )}
      </div>
    </div>
  );
};

export default CoffeeList;


