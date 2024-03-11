const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('../../backend/routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`);

const connection = mongoose.connection;

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/.netlify/functions/handler', apiRoutes);
// app.use('/api', apiRoutes);

module.exports = {
  handler: app,
};