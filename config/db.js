let mysql = require('mysql'); //import library mysql
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_express_s3'
});

connection.connect(function(error){
    if(!!error){
        console.log(error)
    } else{
        console.log('koneksi berhasil');
    }
})

module.exports = connection;