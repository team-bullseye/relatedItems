const db = require('./index');
const mongoose = require('mongoose')
const Game = require('./Game');
const gameData = require('./seed.json');

// previous seed script

const seedData = (data) => {
  Game.deleteMany({})
    .then((res) => {
      console.log(`Deleted ${res.n} games!`)
      Game.insertMany(data)
        .then(() => {
          console.log('Game data seeded!');
          mongoose.connection.close();
        })
        .catch((err) => {
          console.error(err);
        });
    })
};

// seedData(gameData);