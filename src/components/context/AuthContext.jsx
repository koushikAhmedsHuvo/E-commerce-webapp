import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  // Load the session from localStorage when the app starts
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.token) {
      setAuth(storedAuth);
    }
  }, []);

  // Save session in localStorage when authentication state changes
  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem('auth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('auth');
    }
  }, [auth]);

  // Login function
  const login = (user, token) => {
    setAuth({
      isAuthenticated: true,
      user,
      token,
    });
  };

  // Logout function
  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
