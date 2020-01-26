// require dotenv to access environment variables
require("dotenv").config();
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        // the username and password are environment variables
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;