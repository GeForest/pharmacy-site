const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Используйте асинхронный код для подключения к MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectToMongoDB();

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

module.exports = {
  handler: app,
};
