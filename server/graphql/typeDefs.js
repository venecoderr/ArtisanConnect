// server/graphql/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
enum Role {
  SELLER
  BUYER
}

type User {
  id: ID!
  username: String!
  email: String!
  role: Role!
  products: [Product] # For artisans to see their products
}

type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  artisan: User
  imageURL: String! # Added field for the image URL
  createdAt: String
  updatedAt: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

# Query type for fetching data
type Query {
  users: [User]
  user(id: ID!): User
  products: [Product]
  product(id: ID!): Product
  login(email: String!, password: String!): AuthData
}

# Mutation type for data modification
type Mutation {
  addUser(username: String!, email: String!, password: String!, role: Role!): User
  addProduct(name: String!, description: String!, price: Float!, artisanId: ID!, imageURL: String!): Product # Updated mutation to include imageURL
  updateUser(id: ID!, username: String, email: String, role: Role): User
  updateProduct(id: ID!, name: String, description: String, price: Float, imageURL: String): Product # Updated mutation to optionally update imageURL
  deleteUser(id: ID!): User
  deleteProduct(id: ID!): Product
}
`;

module.exports = typeDefs;
