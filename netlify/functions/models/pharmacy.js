const mongoose = require('mongoose')

const pharmacySchema = new mongoose.Schema({
  name: String,
  location: String,
  products_collection: String,
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);