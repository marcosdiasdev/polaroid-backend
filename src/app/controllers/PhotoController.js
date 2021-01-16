const PhotoDAO = require('../dao/PhotoDAO');

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
      console.log(req.user_id);
      
      
      //const [result] = await PhotoDAO.store({ nome: req.body.nome });
      //res.json({ id: result.insertId } );  
    } catch (error) {
      res.status(500);
      res.json(error);
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
      res.status(500);
      res.json(error);
    }
  },

  async destroy(req, res) {
    try {
      const result = await PhotoDAO.delete(req.params.id);
      res.json({ affectedRows: result.affectedRows });  
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  }
};