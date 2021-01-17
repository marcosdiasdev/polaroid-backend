const pool = require('../database/Pool');

module.exports = {

  getUserById(id) {
    return pool.query('SELECT name, surname, email, created_at FROM usuario WHERE id = ?', id);
  },

  getUserByEmail(email) {
    return pool.query('SELECT id, name, surname, password, created_at FROM user WHERE email = ?', email);
  },

  createUser(user) {
    return pool.query('INSERT INTO user SET ?', user);
  }
};