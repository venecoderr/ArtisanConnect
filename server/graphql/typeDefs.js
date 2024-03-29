// server/graphql/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    artisan: User
  }

  # Query type for fetching data
  type Query {
    users: [User]
    user(id: ID!): User
    products: [Product]
    product(id: ID!): Product
  }

  # Mutation type for data modification
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addProduct(name: String!, description: String!, price: Float!, artisanId: ID!): Product
  }
`;

module.exports = typeDefs;
