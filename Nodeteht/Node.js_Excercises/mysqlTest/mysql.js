var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Arttu Poso",
    password: "1234",
    database: "test"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM location", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});