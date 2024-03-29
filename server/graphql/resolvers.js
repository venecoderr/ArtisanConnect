const User = require('../models/User');
const Product = require('../models/Product');

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => await User.findById(id),
    products: async () => await Product.find({}).populate('artisan'),
    product: async (_, { id }) => await Product.findById(id).populate('artisan'),
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return await newUser.save();
    },
    addProduct: async (_, { name, description, price, artisanId }) => {
      const newProduct = new Product({ name, description, price, artisan: artisanId });
      return await newProduct.save();
    },
  },
};

module.exports = resolvers;
