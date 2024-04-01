const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { id, email, role } = user;
  return jwt.sign({ id, email, role: role.toUpperCase() }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      user.id = user._id.toString();
      return user;
    },
    products: async () => {
      const products = await Product.find({}).populate('artisan');
      products.forEach(product => {
        if (product.artisan) product.artisan.id = product.artisan._id.toString();
      });
      return products;
    },
    product: async (_, { id }) => {
      const product = await Product.findById(id).populate('artisan');
      if (!product) throw new Error('Product not found');
      product.id = product._id.toString();
      if (product.artisan) product.artisan.id = product.artisan._id.toString();
      return product;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      return { userId: user._id.toString(), token: createToken(user, process.env.JWT_SECRET, '1h'), tokenExpiration: 1 };
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password, role }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, email, password: hashedPassword, role: role.toUpperCase() });
      const result = await newUser.save();
      result.id = result._id.toString();
      return result;
    },
    updateUser: async (_, { id, username, email, role }) => {
      const updates = { username, email, role: role ? role.toUpperCase() : undefined };
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    },
    addProduct: async (_, { name, description, price, artisanId, imageURL }) => {
      const newProduct = new Product({ 
        name, 
        description, 
        price, 
        artisan: artisanId, 
        imageURL // Directly use imageURL
      });
      await newProduct.save();
      return newProduct;
    },
    
    updateProduct: async (_, { id, name, description, price, imageURL }) => {
      const updates = { 
        name, 
        description, 
        price
      };
      
      if (imageURL !== undefined) {
        updates.image = { url: imageURL }; // Conditionally update the imageURL
      }

      const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedProduct) throw new Error('Product not found');
      return updatedProduct;
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error('User not found');
      return deletedUser;
    },
    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) throw new Error('Product not found');
      return deletedProduct;
    },
  },
  User: {
    products: async (user) => {
      return await Product.find({ artisan: user.id });
    },
  },
  Product: {
    artisan: async (product) => {
      return await User.findById(product.artisan);
    },
  },
};

module.exports = resolvers;
