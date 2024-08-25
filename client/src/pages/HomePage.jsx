

// src/pages/HomePage.jsx
import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-gold-500 min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold font-serif text-gold-500">The Gatsby Coffee House</h1>
        <p className="text-lg italic mt-4 font-sans text-gold-200">
          Experience the elegance and excitement of the Roaring 20s
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <section className="my-12">
          <h2 className="text-3xl font-bold text-gold-500 mb-4">Our Signature Coffees</h2>
          <p className="text-gold-300 mb-6">
            Delight in the rich flavors of our hand-selected coffee beans, expertly roasted to perfection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Item Example */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/300" alt="Espresso" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gold-500">Espresso</h3>
                <p className="text-gold-300 mt-2">A bold, rich shot of coffee with a velvety finish.</p>
                <p className="text-gold-400 mt-4">$3.50</p>
              </div>
            </div>
            {/* Repeat similar blocks for other coffees */}
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-gold-500 mb-4">Visit Us</h2>
          <p className="text-gold-300 mb-6">
            Step back in time and immerse yourself in the ambiance of the 1920s at The Gatsby Coffee House.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-gold-300">
              123 Jazz Avenue, New York, NY 10001
            </p>
            <p className="text-gold-300 mt-4">
              Open daily from 8 AM to 10 PM
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 bg-gray-800 text-gold-300">
        <p>&copy; 2024 ChardoneyBrewLane. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


