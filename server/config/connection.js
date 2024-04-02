const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/artisanConnectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



module.exports = mongoose.connection;
