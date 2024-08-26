import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='py-12 bg-yellow-600 text-gold-500'>
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-gold-500 hover:underline">
            ChardoneyBrewLaneLOGO
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl Young20S text-gold-500 text-center flex-grow">
          Chardoney Brew Lane
        </h1>

        {/* Navigation Section */}
        <nav className="flex space-x-4">
          <Link to="/" className="text-gold-500 hover:underline px-4">Home</Link>
          <Link to="/menu" className="text-gold-500 hover:underline px-4">Menu</Link>
          <Link to="/cart" className="text-gold-500 hover:underline px-4">Cart</Link>
          <div className="flex space-x-4 lg:ml-8 lg:border-l lg:border-slate-900/15 lg:pl-8">
            <Link to="/login" className="text-gold-500 hover:underline">Login</Link>
            <Link to="/signup" className="text-gold-500 hover:underline">Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
