const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


mongoose.connect(`mongodb+srv://userReadWrite:wEHaFlrblGDB0ptv@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
});

const connection = mongoose.connection;

const publicPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(publicPath));
app.get('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});
connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/.netlify/functions/handler/api', apiRoutes);

module.exports = {
  handler: app,
};
