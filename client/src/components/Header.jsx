import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='py-12'>
        <div className="logo">
            <Link to="/">ChardoneyBrewLaneLOGO</Link>
        </div>
        <h1 className="text-4xl font-extrabold font-serif text-gold-500">Chardoney Brew Lane</h1>
        <nav className="flex justify-between items-center px-8">
            <Link to="/" className="text-gold-500 hover:underline px-4">Home</Link>
            <Link to="/menu" className="text-gold-500 hover:underline px-4">Menu</Link>
            <Link to="/cart" className="text-gold-500 hover:underline px-4"> Cart</Link>
            <div className="flex">
                <Link to="/login" className="text-gold-500 hover:underline px-4">Login</Link>
                <Link to="/signup" className="text-gold-500 hover:underline px-4">Signup</Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;
    