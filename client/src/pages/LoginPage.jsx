import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { login } from '../services/api/userServices';

const LoginPage = ({ setIsLoggedIn, setIsAdmin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await login({ email, password });
    
            // Store the token and admin status in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('isAdmin', data.user.isAdmin);
    
            // Set state to reflect the login status
            setIsLoggedIn(true);
            setIsAdmin(data.user.isAdmin);  // Ensure this function is passed as a prop from the parent
    
            // Navigate to the respective dashboard based on admin status
            if (data.user.isAdmin) {
                navigate('/admin-dashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
        
        

    };

    return (
        <div className="flex items-center justify-center min-h-half-screen mt-8">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Log In</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
