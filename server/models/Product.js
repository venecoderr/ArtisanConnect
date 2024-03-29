const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  artisan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // Add more fields as necessary
});

module.exports = mongoose.model('Product', productSchema);
