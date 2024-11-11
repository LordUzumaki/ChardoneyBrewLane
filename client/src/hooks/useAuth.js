import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';  // Correct default import

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const adminStatus = localStorage.getItem('isAdmin') === 'true';

        if (!!token) {
            try {
                const decodedToken = jwtDecode(token);  // Decode the JWT

                // Check if token has expired
                if (decodedToken.exp * 1000 < Date.now()) {
                    // Token expired, clear auth state
                    localStorage.removeItem('token');
                    localStorage.removeItem('isAdmin');
                    setIsLoggedIn(false);
                    setIsAdmin(false);
                } else {
                    setIsLoggedIn(true);
                    setIsAdmin(adminStatus);
                }
            } catch (error) {
                console.error('Invalid token:', error);
                setIsLoggedIn(false);
                setIsAdmin(false);
            }
        } else {
            setIsLoggedIn(false);
            setIsAdmin(false);
        }
    }, []);

    return { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin };
};

export default useAuth;
