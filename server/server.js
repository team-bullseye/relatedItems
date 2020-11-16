const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const db = require('../database');
const Game = require('../database/Game');

const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/api/games/:id/similar', (req, res) => {
  Game.find({}).limit(20)
    .then((games) => {
      res.send(games);
    })
    .catch((err) => {
      console.error(err);
    });
});

server.use('/api/games/:id/together', (req, res) => {
  Game.find({ _id: req.params.id })
    .then((game) => {
      Game.find({ system: game[0].system }).limit(3)
        .then((games) => {
          res.send(games);
        })
        .catch((err) => {
          res.send('error inside');
        });
    })
    .catch((err) => {
      res.send('error outside');
    });
})

module.exports = server;