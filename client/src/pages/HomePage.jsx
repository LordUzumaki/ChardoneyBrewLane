

// src/pages/HomePage.jsx
import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-yellow-600 min-h-screen flex flex-col justify-start items-center">
      <header className="text-center py-4">
        <h1 className="text-5xl font-extrabold font-Young20S text-gold-500">The Gatsby Coffee House</h1>
        <p className="text-lg italic mt-4 font-sans text-gold-200">
          Experience the elegance and excitement of the Roaring 20s
        </p>
      </header>

      <main className="w-full">
        <section className="relative h-96 w-full">
            <div
              className="bg-cover bg-center sm:bg-top md:bg-center lg:bg-bottom bg-fixed h-full w-full"
              style={{ backgroundImage: "url('/src/assets/img/CoffeeShop.png')" }}
            >
            {/* Add any content here if needed */}
            </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold font-Young20S text-gold-500 mb-4">About Us</h2>
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              Welcome to The Gatsby Coffee House, where history meets modern-day elegance. Founded in 1925, our coffee shop has been a cornerstone of the community, offering a unique blend of tradition and contemporary flair.
            </p>
            <Link to="/about" className="text-gold-500 hover:underline">
              Learn More About Our Story
            </Link>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold font-Young20S text-gold-500 mb-4">Our Signature Coffees</h2>
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
          <h2 className="text-3xl font-bold font-Young20S text-gold-500 mb-4">Visit Us</h2>
          <p className="text-gold-300 mb-6">
            Step back in time and immerse yourself in the ambiance of the 1920s at The Gatsby Coffee House.
          </p>
          <div className="bg-black rounded-lg p-6 shadow-lg">
            <p className="text-white">
              123 Jazz Avenue, New York, NY 10001
            </p>
            <p className="text-white mt-4">
              Open daily from 8 AM to 10 PM
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;


