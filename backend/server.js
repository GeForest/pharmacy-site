const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();
const apiRoutes = require('./routes/apiRoutes');
const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`);


const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', apiRoutes);

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});