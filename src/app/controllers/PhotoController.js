const PhotoDAO = require('../dao/PhotoDAO');

module.exports = {
  
  async userIndex(req, res) {
    try {
      const [results] = await PhotoDAO.getUserPhotos(req.user_id);
      res.json(results);  
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async get(req, res) {
    try {
      const [result] = await PhotoDAO.getUserPhoto(req.params.id, req.user_id);
      res.json(result);  
    } catch (error) {
      res.status(500).json(error);
    }
  },  

  async store(req, res) { 
    try {
      const [result] = await PhotoDAO.createPhoto(req.photo);
      res.json(result);    
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async update(req, res) {
    try {
      const [result] = await PhotoDAO.updatePhotoDescription(req.body.description, req.params.id, req.user_id);
      res.json({ affectedRows: result.affectedRows });  
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async destroy(req, res) {
    try {
      const [result] = await PhotoDAO.deletePhoto(req.params.id, req.user_id);
      res.json({ affectedRows: result.affectedRows });  
    } catch (error) {
      res.status(500).json(error);
    }
  }
};