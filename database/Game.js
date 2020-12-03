require('./index');
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  imgUrl: String,
  item: String,
  price: Number,
  system: String
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;



