const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  artisan: {
    type: mongoose.Schema.Types.ObjectId, // References the User who added the product
    ref: 'User',
    required: true
  },
  imageURL: {
    type: String,
    required: [true, 'Product image URL is required']
  },
  // Optionally, add timestamps or other fields as needed
});

module.exports = mongoose.model('Product', productSchema);
