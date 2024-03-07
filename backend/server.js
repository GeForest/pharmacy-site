const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@127.0.0.1:27017/pharmacyDB`);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});