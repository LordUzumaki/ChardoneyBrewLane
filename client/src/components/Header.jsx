import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/BrewLaneColorTransparent.png'; // Import the image

function Header() {
  return (
    <header className='py-12 bg-yellow-600 text-gold-500'>
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-6 lg:px-8">
        {/* Logo Section with Navigation (Home and Menu) */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Chardoney Brew Lane Logo" className="h-28 w-auto mr-4 mt-2 ml-2" /> {/* Adjusted margin-right (mr-4) */}
          </Link>
          
          {/* Navigation Section (Home and Menu) */}
          <nav className="flex space-x-6 text-sm md:text-base">
            <Link to="/" className="text-gold-500 hover:underline">Home</Link>
            <Link to="/menu" className="text-gold-500 hover:underline">Menu</Link>
          </nav>
        </div>
        

        {/* Right-side Links */}
        <div className="flex space-x-1 lg:ml-8 lg:border-l lg:border-slate-900/15 lg:pl-8">
          <Link to="/cart" className="text-gold-500 hover:underline px-4">Cart</Link>
          <Link to="/login" className="text-gold-500 hover:underline px-4">Login</Link>
          <Link to="/signup" className="text-gold-500 hover:underline px-4">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
