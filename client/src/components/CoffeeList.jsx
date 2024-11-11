import React, { useEffect, useState } from 'react';
import { getAllCoffees, deleteCoffee } from '../services/api/coffeeServices';
import { addItemToCart } from '../services/api/cartServices'; // Import addItemToCart
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useCart } from '../context/CartContext'; // Import the useCart hook

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { addToCart } = useCart(); // Get addToCart from CartContext

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const data = await getAllCoffees();
        setCoffees(data);
      } catch (err) {
        setError('Failed to fetch coffees');
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  const handleAddToCart = async (coffee) => {
    console.log(`Adding to cart: ${coffee.name}, Price: ${coffee.price}`);  // Verify details
    try {
      const numericPrice = parseFloat(coffee.price); // Ensure price is a number
      if (isNaN(numericPrice)) {
        console.error('Invalid price format');
        return;
      }
      // Pass the item with correct properties to `addToCart`
      addToCart({ ...coffee, price: numericPrice });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
  const handleDeleteCoffee = async (coffeeId) => {
    const token = localStorage.getItem('token'); // Ensure token retrieval
    if (!token) {
        console.error("Token missing, unable to delete coffee.");
        return;
    }
    console.log("Token:", token); // Check the token's value

    try {
        await deleteCoffee(coffeeId, token);
        setCoffees(coffees.filter(coffee => coffee._id !== coffeeId)); // Update UI on successful delete
    } catch (error) {
        console.error("Delete failed:", error);
    }
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
            <p className="text-gold-400 mt-4">${coffee.price}</p>
            <button
              onClick={() => handleAddToCart(coffee)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
            {isAdmin && (
              <div className="flex justify-between mt-4">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => navigate(`/edit-coffee/${coffee._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeleteCoffee(coffee._id)}
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
