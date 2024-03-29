import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!, $role: String!) {
    addUser(username: $username, email: $email, password: $password, role: $role) {
      id
      username
      email
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String!, $email: String!, $role: String!) {
    updateUser(id: $id, username: $username, email: $email, role: $role) {
      id
      username
      email
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
      role
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Float!, $artisanId: ID!) {
    addProduct(name: $name, description: $description, price: $price, artisanId: $artisanId) {
      id
      name
      description
      price
      artisan {
        id
        username
        email
        role
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $name: String!, $description: String!, $price: Float!) {
    updateProduct(id: $id, name: $name, description: $description, price: $price) {
      id
      name
      description
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
      description
      price
    }
  }
`;
