const faker = require('faker');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const fs = require('fs');
const globalLength = 10000000

let createData = () => {

const dataArray = [];
for (var x = 0; x < globalLength; x++) {
  dataArray.push({'imgUrl': faker.image.imageUrl(), 'item': faker.commerce.productName(), 'price': faker.commerce.price(), 'system': faker.commerce.department(), 'index': x})
}
const csvFromArrayOfObjects = convertArrayToCSV(dataArray);


const formattedData = new Uint8Array(Buffer.from(csvFromArrayOfObjects));
fs.writeFile('data.csv', formattedData, (err) => {
  if (err) {
    throw err;
  }
  console.log('The file has been saved!');
});
}

// createData()

module.exports = globalLength;


