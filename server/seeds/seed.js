const connection = require('../config/connection.js');
const seedDatabase = require('./data.js')

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    // Drop collections if they exist
    const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
      console.log('Users collection dropped');
    }
    const productsCheck = await connection.db.listCollections({ name: 'products' }).toArray();
    if (productsCheck.length) {
      await connection.dropCollection('products');
      console.log('Products collection dropped');
    }

    // Seed users and thoughts
    await seedDatabase()

    console.info('Seeding complete! 🌱');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
});

