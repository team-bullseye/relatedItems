const { Pool, Client } = require('pg')

// const connectionString = 'postgresql://postgres:root@database.server.com:5432/sdc'
// const pool = new Pool({
//   connectionString,
// })

const client = new Client({
user: 'postgres',
host: 'localhost',
database: 'sdc',
password: 'root',
port: 5432
});

client.connect((err, session) => {
  if (err) {
    console.log(err)
  } else {
    console.log('client connected at port 5432')
  }
})


// session.query('CREATE TABLE IF NOT EXISTS test (id serial primary key);', (err, success) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(success)
//     session.end()q
//   }
// })

module.exports = client;