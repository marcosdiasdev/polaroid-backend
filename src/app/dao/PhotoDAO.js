const pool = require('../database/Pool');

module.exports = {
  
  getAll() {
    return pool.query('SELECT * FROM photo');
  },

  get(id) {
    return pool.query('SELECT * FROM photo WHERE id = ?', id);
  },

  store(photo) {
    return pool.query('INSERT INTO photo SET ?', photo);
  },

  update(id, photo) {
    return pool.query('UPDATE photo SET ? WHERE id = ?', [photo, id]);
  },

  delete(id) {
    return pool.query('DELETE FROM photo WHERE id = ?', id);
  }
};