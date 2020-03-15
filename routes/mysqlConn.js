//   MySQL 로드
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'localhost',
    user     : 'root',
    password : 'lee2391',
    database : 'my_db'    
});

module.exports = pool;
