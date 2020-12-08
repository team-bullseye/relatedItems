const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://localhost/related';

const db = mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;