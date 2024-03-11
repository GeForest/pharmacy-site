const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products: Array,
    totalCost: Number,
    name: String,
    email: String,
    phone: String,
    address: String,
})

module.exports = mongoose.model('Order', orderSchema, 'orders');