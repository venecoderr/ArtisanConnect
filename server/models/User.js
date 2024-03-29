const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Add more fields as necessary
});

module.exports = mongoose.model('User', userSchema);
