import { createContext, useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER, UPDATE_USER, DELETE_USER, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LOGIN_USER } from './mutations';

const QueriesContext = createContext();

export const useQueriesContext = () => useContext(QueriesContext);

export const QueriesProvider = ({ children }) => {
  // Destructure the mutation functions and error variables

  const [logIn, { error: logInError}] = useMutation(LOGIN_USER)
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);
  const [updateUser, { error: updateUserError }] = useMutation(UPDATE_USER);
  const [deleteUser, { error: deleteUserError }] = useMutation(DELETE_USER);
  const [addProduct, { error: addProductError }] = useMutation(ADD_PRODUCT);
  const [updateProduct, { error: updateProductError }] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct, { error: deleteProductError }] = useMutation(DELETE_PRODUCT);

  const mutations = {
    logIn,
    addUser,
    updateUser,
    deleteUser,
    addProduct,
    updateProduct,
    deleteProduct,
    logInError,
    addUserError,
    updateUserError,
    deleteUserError,
    addProductError,
    updateProductError,
    deleteProductError,
  };

  // Utility function to validate email
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Utility function for conditional class names
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  // Pass mutation functions, error variables, and utility functions through the context
  const contextValue = {
    mutations,
    validateEmail,
    classNames,
  };

  return (
    <QueriesContext.Provider value={contextValue}>
      {children}
    </QueriesContext.Provider>
  );
};
