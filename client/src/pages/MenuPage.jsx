// src/pages/MenuPage.jsx
import React from 'react';
import CoffeeList from '../components/CoffeeList';

const MenuPage = () => {
  return (
    <div className="bg-gray-900 text-gold-500 min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-4xl font-extrabold font-serif text-gold-500">Our Exquisite Coffee Menu</h1>
        <p className="text-lg italic mt-4 font-sans text-gold-200">
          Discover the rich flavors of the Roaring 20s
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <CoffeeList />
      </main>
    </div>
  );
};

export default MenuPage;
