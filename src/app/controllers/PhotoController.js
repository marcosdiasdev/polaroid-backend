const PhotoDAO = require('../dao/PhotoDAO');
const formidable = require('formidable');
const { photoUploadOptions } = require('../config/config');

module.exports = {
  
  async index(req, res) {
    try {
      const [results] = await PhotoDAO.getAll();
      res.json(results);  
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  },

  async store(req, res) {
    try {

      const form = formidable(photoUploadOptions);
      const fileTypes = ['image/jpeg', 'image/png', 'image/gif'];

      form.onPart = (part) => {
        if(part.mime && fileTypes.indexOf(part.mime) === -1) {
          form._error(new Error('Invalid file type'));
        } else {
          form.handlePart(part);
        }
      };

      form.parse(req, async (err, fields, files) => {
        if (err) return res.status(400).json(err);

        const photo = {
          description: fields.description,
          user_id: req.user_id,
          url: files.file.path.split('/').slice(-1),
        }        

        const [result] = await PhotoDAO.store(photo);
        res.json(result);
      });
       
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async show(req, res) {
    try {
      const [result] = await PhotoDAO.get(req.params.id);
      res.json(result[0]);  
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  },

  async update(req, res) {
    try {
      const [result] = await PhotoDAO.update(req.params.id, { nome: req.body.nome });
      res.json({ changedRows: result.changedRows } );
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async destroy(req, res) {
    try {
      const result = await PhotoDAO.delete(req.params.id);
      res.json({ affectedRows: result.affectedRows });  
    } catch (error) {
      res.status(500).json(error);
    }
  }
};