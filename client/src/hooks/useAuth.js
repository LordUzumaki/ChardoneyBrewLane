import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const adminStatus = localStorage.getItem('isAdmin') === 'true';
        if (!!token) {
            setIsLoggedIn(true);
            setIsAdmin(adminStatus);
        } else {
            setIsLoggedIn(false);
            setIsAdmin(false);
        }
    }, []);

    return { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin};
};
