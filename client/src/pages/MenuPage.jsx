import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import CoffeeList from '../components/CoffeeList';
import { useAuth } from '../hooks/useAuth';

const MenuPage = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();  // Hook to handle navigation

  const handleAddCoffee = () => {
    navigate('/add-coffee');  // Redirect to /add-coffee page
  };

  return (
    <div className="bg-yellow-600 text-gold-500 min-h-screen">
      <header className="text-center py-8 sm:py-12">
        <h1 className="font-Young20S text-5xl sm:text-4xl md:text-5xl flex justify-center items-center">
          Our Exquisite Coffee Menu
        </h1>
        <p className="text-lg italic mt-4 font-sans text-gold-200">
          Discover the rich flavors of the Roaring 20s
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        {/* Display the coffee list */}
        <CoffeeList />

        {/* Only show Add Coffee button if the user is an admin */}
        {isAdmin && (
          <div className="mt-8 text-center">
            <button
              onClick={handleAddCoffee}  // Call the function to navigate to /add-coffee
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add New Coffee
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuPage;
