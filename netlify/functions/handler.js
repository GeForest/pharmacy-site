const express = require('express');
const serverless = require('serverless-http')
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();

app.use(express.json());

mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to Database');
});

app.use('/.netlify/functions/handler', apiRoutes);

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({ error: 'Something broke!' });
});

module.exports.handler = serverless(app);