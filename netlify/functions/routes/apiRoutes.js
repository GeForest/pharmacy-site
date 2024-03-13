const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Pharmacy = require('../models/pharmacy');
const Order = require('../models/order');

router.get('/pharmacies', async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json({ pharmacies });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:pharmacyCollection', async (req, res) => {
  try {
    const pharmacyCollection = req.params.pharmacyCollection;

    const products = await mongoose.connection.db.collection(pharmacyCollection).find({}).toArray();

    res.json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/orders', async(req, res)=>{
  try {
    const orderDate = req.body
    const newOrder = new Order(orderDate)
    await newOrder.save()
    res.json({ success: true, message: 'Order has been successfully placed.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})



module.exports = router;
