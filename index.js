const express = require('express')
var mysql      = require('mysql2');

const app = express()
const port = 3000

var connection = mysql.createConnection({
  host    :'patrick-mysql',
  user    : 'root',
  password:'segredo',
  database:'patrick_db',
  port: 3306
});

connection.connect();

app.get('/', (req, res) => {
  connection.query('SELECT * FROM produtos', function (error, results, fields) {
    if (error) throw error;
    res.send(`${results[0].name} - ${results[1].name}`)
  
  connection.end();

  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})