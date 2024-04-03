const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!
  username: String!
  email: String!
  products: [Product] # For users to see their products
}

type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  artisan: User
  imageURL: String!
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
}

# Mutation type for data modification
type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  addProduct(name: String!, description: String!, price: Float!, artisanId: ID!, imageURL: String!): Product
  updateUser(id: ID!, username: String, email: String): User
  updateProduct(id: ID!, name: String, description: String, price: Float, imageURL: String): Product
  deleteUser(id: ID!): User
  deleteProduct(id: ID!): Product
  login(email: String!, password: String!): AuthData
}
`;

module.exports = typeDefs;
