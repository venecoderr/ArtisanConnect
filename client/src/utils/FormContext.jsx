import { createContext, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, UPDATE_USER, DELETE_USER, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './mutations';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  // Destructure the mutation functions and error variables
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);
  const [updateUser, { error: updateUserError }] = useMutation(UPDATE_USER);
  const [deleteUser, { error: deleteUserError }] = useMutation(DELETE_USER);
  const [addProduct, { error: addProductError }] = useMutation(ADD_PRODUCT);
  const [updateProduct, { error: updateProductError }] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct, { error: deleteProductError }] = useMutation(DELETE_PRODUCT);

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
    addUser,
    updateUser,
    deleteUser,
    addProduct,
    updateProduct,
    deleteProduct,
    addUserError,
    updateUserError,
    deleteUserError,
    addProductError,
    updateProductError,
    deleteProductError,
    validateEmail,
    classNames,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};
