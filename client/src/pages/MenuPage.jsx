import React from 'react';
import CoffeeList from '../components/CoffeeList';
import AddCoffeeForm from '../components/AddCoffeeForm';
import { useAuth } from '../hooks/useAuth';

const MenuPage = () => {
  const { isAdmin } = useAuth();

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

        {/* Only show AddCoffeeForm if the user is an admin */}
        {isAdmin && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Add a New Coffee</h2>
            <AddCoffeeForm />
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuPage;

