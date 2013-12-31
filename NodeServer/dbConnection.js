/*
 * Database connection properties and connection object
 *
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'asusocial',
  database : 'tweet_analyzer'
});

connection.connect();


// Exports
module.exports = connection;
