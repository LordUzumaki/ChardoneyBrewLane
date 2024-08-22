// src/App.jsx
import React from 'react';
import './index.css'; // Make sure this line is in your index.js or App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gold-500 min-h-screen">
        <Header />
        <main className='max-w-4xl mx-auto px-8 py-12'>
          <Routes>
            <Route path="/" exact component={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />}/>
            {/* <Route path="/about" component={AboutPage} /> */}
            {/* <Route path="/contact" component={ContactPage} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}



export default App;




