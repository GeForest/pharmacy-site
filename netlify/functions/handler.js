const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

async function initialize() {
  try {
    await mongoose.connect(`mongodb+srv://newUserReadWrite:HKQ6ez5l4zKBPLSM@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    const publicPath = path.join(__dirname, '..', 'frontend', 'build');
    app.use(express.static(publicPath));

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    app.use('/api', apiRoutes);

    app.use((req, res, next) => {
      mongoose.connection.close(() => {
        console.log('MongoDB connection closed after request');
        next();
      });
    });

    app.get('/*', (req, res) => {
      res.sendFile(path.join(publicPath, 'index.html'));
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('MongoDB disconnected through app termination');
        process.exit(0);
      });
    });

    app.use((req, res, next) => {
      mongoose.connection.close(() => {
        console.log('MongoDB connection closed before app termination');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Handle error as needed
  }
}

initialize();

// mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.6h3lvf3.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0`);

// const connection = mongoose.connection;

// const publicPath = path.join(__dirname, '..', 'frontend', 'build');
// app.use(express.static(publicPath));

// connection.once('open', () => {
//   console.log('Connected to MongoDB');
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

// app.use('/api', apiRoutes);

// app.use((req, res, next) => {
//   mongoose.connection.close(() => {
//     console.log('MongoDB connection closed after request');
//     next();
//   });
// });

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('MongoDB disconnected through app termination');
//     process.exit(0);
//   });
// });

// app.use((req, res, next) => {
//   // Закрываем соединение с MongoDB перед завершением приложения
//   mongoose.connection.close(() => {
//     console.log('MongoDB connection closed before app termination');
//     // Вызываем admin.app().delete() или другие действия по завершению
//     // приложения перед выходом
//     // admin.app().delete();
//     process.exit(0);
//   });
// });

module.exports = {
  handler: app,
};
