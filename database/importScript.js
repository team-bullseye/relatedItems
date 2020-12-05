const csv = require('csvtojson');
const Game = require('./Game.js');


const importData = () => {
Game.deleteMany({})
  .then(() => {
    console.log('data deleted')
  })
  .catch((err) => {
    console.log(err)
  })

csv()
.fromFile('data.csv')
.then((jsonData)=> {
  Game.insertMany(jsonData)
    .then(() => {
      console.log('Data seeded');
    })
    .catch((err) => {
      console.log('error seeding', err);
    })
})
.catch((err) => {
  console.log('did not convert to json', err);
})
}


// importData()