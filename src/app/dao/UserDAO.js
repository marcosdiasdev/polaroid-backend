const pool = require('../database/Pool');

module.exports = {

  getUserById(id) {
    return pool.query('SELECT name, lastname, email, created_at FROM usuario WHERE id = ?', id);
  },

  getUserByEmail(email) {
    return pool.query('SELECT id, name, lastname, password, created_at FROM user WHERE email = ?', email);
  },

  createUser(user) {
    return pool.query('INSERT INTO user SET ?', user);
  }
};