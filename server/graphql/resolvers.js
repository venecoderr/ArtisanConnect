const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { id, email, role } = user;
  return jwt.sign({ id, email, role }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => await User.findById(id),
    products: async () => await Product.find({}).populate('artisan'),
    product: async (_, { id }) => await Product.findById(id).populate('artisan'),
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      return { userId: user.id, token: createToken(user, process.env.JWT_SECRET, '1h'), tokenExpiration: 1 };
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password, role }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, email, password: hashedPassword, role });
      return await newUser.save();
    },
    addProduct: async (_, { name, description, price, artisanId }) => {
      const newProduct = new Product({ name, description, price, artisan: artisanId });
      return await newProduct.save();
    },
    updateUser: async (_, { id, username, email, role }) => {
      const updatedUser = {};
      if (username) updatedUser.username = username;
      if (email) updatedUser.email = email;
      if (role) updatedUser.role = role;
      return await User.findByIdAndUpdate(id, updatedUser, { new: true });
    },
    updateProduct: async (_, { id, name, description, price }) => {
      const updatedProduct = {};
      if (name) updatedProduct.name = name;
      if (description) updatedProduct.description = description;
      if (price) updatedProduct.price = price;
      return await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndRemove(id);
      return "User deleted";
    },
    deleteProduct: async (_, { id }) => {
      await Product.findByIdAndRemove(id);
      return "Product deleted";
    },
  },
};

module.exports = resolvers;
