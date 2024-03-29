// server/server.js
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const startServer = async () => {
  const app = express();
  
  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

  // Create an instance of ApolloServer
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
  });

  // Apply middleware to the ApolloServer instance
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  // Specify the port
  const PORT = process.env.PORT || 4000;
  
  // Start the Express server
  app.listen(PORT, () => 
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
  );
};

startServer();
