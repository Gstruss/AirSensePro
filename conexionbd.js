let mysql = require('mysql');

let conexionbd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asp'
});

conexionbd.connect(function(err) {
    if (err) {
      console.error('Error connecting to database: ' + conexionbd.stack);
      return;
    }
    console.log('Connected to database with id ' + conexionbd.threadId);
  });
  
  module.exports = conexionbd;
