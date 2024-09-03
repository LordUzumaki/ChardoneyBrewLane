import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import logo from '../assets/img/NewCoffeeLogo.png'; // Import the image

function Header({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header className="relative h-40 bg-yellow-600 text-gold-500">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/src/assets/Videos/AdobeStock_299366070.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay bg-black opacity-50 absolute inset-0"></div>

      <div className="relative z-10 container mx-auto flex items-center justify-between px-2 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Chardoney Brew Lane Logo" className="h-28 w-auto mr-4 mt-2 ml-2" />
          </Link>
          
          <nav className="flex space-x-6 text-sm md:text-base">
            <Link to="/menu" className="text-white hover:underline">Menu</Link>
          </nav>
        </div>
        
        {/* Use the AuthButton component */}
        <div className="flex space-x-1 lg:ml-8 lg:border-l lg:border-slate-900/15 lg:pl-8">
          <Link to="/cart" className="text-white hover:underline px-4">Cart</Link>
          <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* This replaces the static "Login" and "Sign up" buttons */}
        </div>
      </div>
    </header>
  );
}

export default Header;
