// client/src/utils/queries.js
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
      role
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
      role
      products {
        id
        name
        description
        price
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      price
      artisan {
        id
        username
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      artisan {
        id
        username
      }
    }
  }
`;
