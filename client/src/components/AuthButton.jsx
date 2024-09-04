import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButton = ({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        setIsLoggedIn(false);
        setIsAdmin(false);  // Reset the isAdmin state
        navigate('/');
    };

    return (
        <div>
            {isLoggedIn ? (
                <>
                     {/* Conditionally show Admin button if user is an admin */}
                    {isAdmin && (
                        <button
                            onClick={() => navigate('/admin-dashboard')}
                            className="text-white hover:underline px-4">
                            Admin
                        </button>
                    )}
                    <button
                        onClick={handleLogOut}
                        className="text-white hover:underline px-4">
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => navigate('/login')}
                        className="text-white hover:underline px-4">
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-white hover:underline px-4">
                        Sign up
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthButton;
