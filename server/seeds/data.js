const User = require('../models/User.js');
const Product = require('../models/Product.js')
const bcrypt = require('bcrypt')

const keyword = process.env.SEED_PASS
const hash = bcrypt.hashSync(keyword, 12)

const users = [
    { username: "user1", email: "user1@example.com", password: hash },
    { username: "user2", email: "user2@example.com", password: hash },
    { username: "user3", email: "user3@example.com", password: hash },
    { username: "user4", email: "user4@example.com", password: hash },
    { username: "user5", email: "user5@example.com", password: hash },
    { username: "user6", email: "user6@example.com", password: hash },
    { username: "user7", email: "user7@example.com", password: hash },
];

const products = [
    { name: "Product 1", description: "Description for Product 1", price: 10, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 2", description: "Description for Product 2", price: 20, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 3", description: "Description for Product 3", price: 30, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 4", description: "Description for Product 4", price: 40, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 5", description: "Description for Product 5", price: 50, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 6", description: "Description for Product 6", price: 60, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 7", description: "Description for Product 7", price: 70, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 8", description: "Description for Product 8", price: 80, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 9", description: "Description for Product 9", price: 90, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 10", description: "Description for Product 10", price: 100, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 11", description: "Description for Product 11", price: 110, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 12", description: "Description for Product 12", price: 120, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 13", description: "Description for Product 13", price: 130, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 14", description: "Description for Product 14", price: 140, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 15", description: "Description for Product 15", price: 150, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 16", description: "Description for Product 16", price: 160, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 17", description: "Description for Product 17", price: 170, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 18", description: "Description for Product 18", price: 180, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 19", description: "Description for Product 19", price: 190, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 20", description: "Description for Product 20", price: 200, artisan: null, imageURL: "https://placehold.co/400" },
    { name: "Product 21", description: "Description for Product 21", price: 210, artisan: null, imageURL: "https://placehold.co/400" },
];

async function seedDatabase() {
    try {
      // Create users
      const createdUsers = await User.insertMany(users);

      // Assign artisans to products
      for (let i = 0; i < products.length; i++) {
      products[i].artisan = createdUsers[i % 7]._id;
      }

        // Create products
      await Product.insertMany(products);

      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
}

module.exports = seedDatabase