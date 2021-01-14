const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.error(`Erro ao conectar: ${error.stack}`)
  }
});

module.exports = connection;