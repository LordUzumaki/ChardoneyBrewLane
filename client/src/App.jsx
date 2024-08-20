// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CoffeeList from './components/CoffeeList'; // Correct import
import OrderList from './components/OrderList';  // Correctly import OrderList
import UserProfile from './components/UserProfile';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/coffee">Coffees</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeList />} /> {/* Use the component here */}
          <Route path="/orders" element={<OrderList />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Chardoney Brew Lane!</h1>
    </div>
  );
}

export default App;
