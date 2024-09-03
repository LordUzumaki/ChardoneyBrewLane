import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButton = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            {isLoggedIn ? (
                <button
                    onClick={handleLogOut}
                    className="text-white hover:underline px-4">
                    Log Out
                </button>
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
