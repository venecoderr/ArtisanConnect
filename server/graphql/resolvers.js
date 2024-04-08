const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to create a JWT token
// Helper function to create a JWT token
const createToken = (user, expiresIn) => {
  const { id, email, username } = user;
  const secret = process.env.JWT_SECRET || 'fallbackSecret'; // Use the same fallback method
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    // Fetches all users
    users: async () => await User.find({}),
    // Fetches a single user by ID
    user: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    },
    // Fetches all products
    products: async () => await Product.find({}).populate('artisan'),
    // Fetches a single product by ID
    product: async (_, { id }) => {
      const product = await Product.findById(id).populate('artisan');
      if (!product) throw new Error('Product not found');
      return product;
    },
    userProducts: async (_, { id}) => {
      if (!id) {
        throw new Error('Missing userId');
      }
      return await Product.find({ artisan: id });
    }
  },
  Mutation: {
    // Handles user login
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Invalid password');
      return {
        userId: user.id,
        token: createToken(user, '1h'), // No need to pass secret here, handle it within createToken
        tokenExpiration: 1
      };
    },
    // Adds a new user
    addUser: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');
      // const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
        username,
        email,
        password
      });
      const result = await newUser.save();
      return result;
    },
    // Updates an existing user
    updateUser: async (_, { id, username, email }) => {
      const updates = {};
      if (username !== undefined) updates.username = username;
      if (email !== undefined) updates.email = email;
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    },
    // Adds a new product
    addProduct: async (_, { name, description, price, artisanId, imageURL }) => {
      const newProduct = new Product({
        name,
        description,
        price,
        artisan: artisanId,
        imageURL
      });
      const savedProduct = await newProduct.save();
      return savedProduct;
    },
    // Updates an existing product
    updateProduct: async (_, { id, name, description, price, imageURL }) => {
      const updates = {};
      if (name !== undefined) updates.name = name;
      if (description !== undefined) updates.description = description;
      if (price !== undefined) updates.price = price;
      if (imageURL !== undefined) updates.imageURL = imageURL;
      const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedProduct) throw new Error('Product not found');
      return updatedProduct;
    },
    // Deletes an existing user
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error('User not found');
      return deletedUser;
    },
    // Deletes an existing product
    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) throw new Error('Product not found');
      return deletedProduct;
    },
  },
  User: {
    // Resolves the products created by a user
    products: async (user) => {
      return await Product.find({ artisan: user.id });
    },
  },
  Product: {
    // Resolves the user who created a product
    artisan: async (product) => {
      return await User.findById(product.artisan);
    },
  },
};

module.exports = resolvers;
