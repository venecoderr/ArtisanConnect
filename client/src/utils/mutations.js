import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String, $email: String) {
    updateUser(id: $id, username: $username, email: $email) {
      id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Float!, $artisanId: ID!, $imageURL: String!) {
    addProduct(name: $name, description: $description, price: $price, artisanId: $artisanId, imageURL: $imageURL) {
      id
      name
      description
      price
      artisan {
        id
        username
        email
      }
      imageURL
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $name: String, $description: String, $price: Float, $imageURL: String) {
    updateProduct(id: $id, name: $name, description: $description, price: $price, imageURL: $imageURL) {
      id
      name
      description
      price
      imageURL
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
      imageURL
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      quantity
      product {
        id
        name
        price
      }
    }
  }
`
