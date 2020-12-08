const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = 3004;
const globalLength = require('../database/createData.js')

require('../database');
const Game = require('../database/Game');

const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));


// create a game
server.post('/api/games', (req, res) => {
  Game.create(req.body)
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((err) => {
    res.status(404).send(err)
  })
})

// get all games
// server.get('/api/games', (req, res) => {
//   Game.find({})
//   .then((games) => {
//     res.status(200).send(games)
//   })
//   .catch((err) => {
//     res.status(400).send(err)
//   })
// })

server.delete('/api/games/:id', (req, res) => {
  Game.findOneAndDelete({_id: req.params.id})
  .then(() => {
    res.status(200).send('succesful delete')
  })
  .catch((err) => {
    res.status(404).send(err)
  })
})

// finds a random game in the list
server.use('/api/games/one', (req, res) => {
  let randomIndex = Math.floor(Math.random() * globalLength);
  Game.findOne({index: randomIndex})
   // add random index in here
    .then((game) => {
      res.send(game);
    })
    .catch((err) => {
      console.error(err);
    });
});


// finds 20 similar games
server.use('/api/games/:system/similar', (req, res) => {
  Game.find({system: req.params.system}).limit(20)
    .then((games) => {
      console.log(games)
      res.send(games);
    })
    .catch((err) => {
      console.error(err);
    });
});



//produces the 3 games freq bought together
server.use('/api/games/:system/together', (req, res) => {
  Game.find({system: req.params.system}).limit(3)
    .then((games) => {
      // console.log(games)
      // return Game.find({ system: game[0].system })
      res.send(games);
    })
    .catch((err) => {
      res.send(err);
    });
});

server.put('/api/games/:id', (req, res) => {
  Game.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
  .then((game) => {
    res.status(200).send(game)
  })
  .catch((err) => {
    res.status(404).send(err)
  })
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

module.exports = server;