// src/App.jsx
import React, {useState} from 'react';
import './index.css'; // Make sure this line is in your index.js or App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AddCoffeePage from './pages/AddCoffeePage';
import DashboardPage from './pages/DashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx'; // Import the AdminDashboardPage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  return (
    <Router>
      <div className="bg-yellow-600 text-gold-500 min-h-screen">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className='max-w-4xl mx-auto px-8 py-12'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/add-coffee" element={<AddCoffeePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} /> {/* Add the dashboard route */}
            
            
            {/* <Route path="/contact" component={ContactPage} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}



export default App;




