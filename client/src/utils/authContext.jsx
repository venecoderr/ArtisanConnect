import React, { createContext, useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './mutations';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [loginUserMutation, { error: loginError }] = useMutation(LOGIN_USER);
  const [currentUser, setCurrentUser] = useState('');
  

  useEffect(() => {
    const token = localStorage.getItem('id_token') || sessionStorage.getItem('id_token');
    if (token) {
      // You might want to verify the token's validity here,
      // but for simplicity, let's assume it's valid.
      setCurrentUser(token);
    }
  }, []);

  const loginUser = async (email, password) => {
    try {
      const { data } = await loginUserMutation({
        variables: { email, password }
      });

      const token = data.login;
      setCurrentUser(token);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error here
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
