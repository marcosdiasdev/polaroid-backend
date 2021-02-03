const pool = require('../database/Pool');

module.exports = {

  getAllPhotos() {
    return pool.query('SELECT * FROM photo');
  },

  getUserPhotos(user_id) {
    return pool.query('SELECT * FROM photo WHERE user_id = ?', user_id);
  },

  getUserPhoto(id, user_id) {
    return pool.query('SELECT * FROM photo WHERE id = ? AND user_id = ?', [id, user_id]);
  },

  createPhoto(photo) {
    return pool.query('INSERT INTO photo SET ?', photo);
  },

  updatePhotoDescription(description, id, user_id) {
    return pool.query('UPDATE photo SET description = ? WHERE id = ? AND user_id', [description, id, user_id]);
  },

  deletePhoto(id, user_id) {
    return pool.query('DELETE FROM photo WHERE id = ? AND user_id = ?', [id, user_id]);
  }
};