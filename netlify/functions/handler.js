const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('../../backend/routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-zlpldwr-shard-00-00.6h3lvf3.mongodb.net:27017,ac-zlpldwr-shard-00-01.6h3lvf3.mongodb.net:27017,ac-zlpldwr-shard-00-02.6h3lvf3.mongodb.net:27017/?replicaSet=atlas-luwyll-shard-0&ssl=true&authSource=admin`);

const connection = mongoose.connection;

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', apiRoutes);

module.exports = {
  handler: app,
};