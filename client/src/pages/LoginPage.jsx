// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api/userServices';  // Import the login function

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error

        try {
            const data = await login({ email, password });
            console.log('Login successful:', data);
            // Assuming successful login redirects to a dashboard or homepage
            navigate('/dashboard');  // Adjust the path as needed
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >Login</button>
            </form>
            <p className="text-center mt-4">
                Don't have an account? <a href="/signup">Sign up here</a>
            </p>
        </div>
    );
};

export default LoginPage;
