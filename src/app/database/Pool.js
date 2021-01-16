const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
});

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) console.log(err);
        process.exit(0);
    })
); 

module.exports = pool;