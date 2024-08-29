// src/pages/MenuPage.jsx
import React from 'react';
import CoffeeList from '../components/CoffeeList';

const MenuPage = () => {
  return (
    <div className="bg-yellow-600 text-gold-500 min-h-screen">
      <header className="text-center py-8 sm:py-12">
        <h1 className="font-Young20S text-5xl sm:text-4xl md:text-5xl flex justify-center items-center">Our Exquisite Coffee Menu</h1>
        <p className="text-lg italic mt-4 font-sans text-gold-200">
          Discover the rich flavors of the Roaring 20s
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <CoffeeList />
      </main>
    </div>
  );
};

export default MenuPage;
