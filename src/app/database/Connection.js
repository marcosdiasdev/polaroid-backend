const mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'podeporqualquercoisa',
  database : 'lojadeinformatica'
});

conn.connect((error) => {
  if (error) {
    console.error(`Erro ao conectar: ${error.stack}`)
  }
});

module.exports = conn;