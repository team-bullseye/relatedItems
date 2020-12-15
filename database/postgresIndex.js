const { Pool, Client } = require('pg')

const client = new Client({
user: 'postgres',
host: '13.52.248.49',
database: 'relateditems',
password: 'root',
port: 5432
});

client.connect((err, session) => {
  if (err) {
    console.log(err)
  } else {
    // console.log('postgres connected at port 5432')
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




// command to get into ec2 postgres shell linux
// psql -h 3.17.203.166 -d relateditems -U postgres