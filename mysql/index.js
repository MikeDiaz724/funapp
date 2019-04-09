
const mysql = require('mysql')

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  passwork : 'your_password',
  database: 'test'
});

const getInfoFromDB = function(callback){
  connection.query('SELECT * FROM students', function(err, results){
    if(err){
      callback(err, null);
    } else{
      callback(null, results);
    }
  });
}

module.exports.getInfoFromDB = getInfoFromDB;
