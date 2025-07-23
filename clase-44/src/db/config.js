const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    port: 3306,
    password: "1234",
    user: "root",
    database: "tienda",
  })
  .promise();

module.exports = connection;
