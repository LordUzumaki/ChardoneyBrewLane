// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
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
import EditCoffeePage from './pages/EditCoffeePage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import UserProfile from './components/UserProfile';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useAuth();

  return (
    <CartProvider>
      <Router>
        <div className="bg-yellow-600 text-gold-500 min-h-screen">
          <Header
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
          />
          <main className="max-w-4xl mx-auto px-8 py-12">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/edit-coffee/:id" element={<EditCoffeePage />} />
              <Route path="/add-coffee" element={<AddCoffeePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route
                path="/login"
                element={
                  <LoginPage
                    setIsLoggedIn={setIsLoggedIn}
                    setIsAdmin={setIsAdmin}
                  />
                }
              />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




