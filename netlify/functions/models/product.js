const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  count: Number,
  favorite: Boolean,
});

module.exports = mongoose.model('Product', productSchema);
