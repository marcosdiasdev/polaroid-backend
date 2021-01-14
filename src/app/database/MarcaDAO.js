const connection = require('./Connection');

module.exports = {
  
  getAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM marca', (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },

  save(marca) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO marca SET ?', { nome: marca.nome } , (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });    
    });
  },

  delete(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM marca WHERE ?', { id: id } , (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });    
    });
  }
};