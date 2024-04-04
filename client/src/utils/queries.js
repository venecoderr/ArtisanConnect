import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
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

export const GET_USER_PRODUCTS = gql`
query GetUserProducts($id: ID!) {
  userProducts(id: $id) {
    id
    name
    description
    price
    imageURL
    artisan {
      id
      username
    }
  }
}
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
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
