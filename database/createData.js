const faker = require('faker');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const fs = require('fs');
const Game = require('./Game.js');
const csv = require('csvtojson');

let createData = () => {
Game.deleteMany({})
.then(() => {
  console.log('data deleted')
})
.catch((err) => {
  console.log(err)
})


const dataArray = [];
for (var x = 0; x < 100; x++) {
  dataArray.push({'imgUrl': faker.image.imageUrl(), 'item': faker.commerce.productName(), 'price': faker.commerce.price(), 'system': faker.commerce.department()})
}
const csvFromArrayOfObjects = convertArrayToCSV(dataArray);
console.log(csvFromArrayOfObjects)


const formattedData = new Uint8Array(Buffer.from(csvFromArrayOfObjects));
fs.writeFile('data.csv', formattedData, (err) => {
  if (err) {
    throw err;
  }
  console.log('The file has been saved!');
});

csv()
  .fromFile('./data.csv')
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

createData()