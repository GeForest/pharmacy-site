const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const apiRoutes = require('./routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(`mongodb://pharmacyReadWrite:147369852qWq@127.0.0.1:27017/pharmacyDB`);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});