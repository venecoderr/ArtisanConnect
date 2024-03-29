const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['SELLER', 'BUYER'],
    default: 'BUYER'
  },
  // more fields as needed, profile information
});

module.exports = mongoose.model('User', userSchema);
