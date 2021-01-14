const MarcaDAO = require('../database/MarcaDAO');

module.exports = {
  
  async index(request, response) {
    try {
      const results = await MarcaDAO.getAll();
      response.json(results);  
    } catch (error) {
      response.status(500);
      response.json(error);
    }
  },

  async store(request, response) {
    try {
      const result = await MarcaDAO.save({ nome: request.body.nome });
      response.json({ id: result.insertId } );  
    } catch (error) {
      response.status(500);
      response.json(error);
    }
  },

  async destroy(request, response) {
    try {
      const result = await MarcaDAO.delete(request.params.id);
      response.json({ affectedRows: result.affectedRows });  
    } catch (error) {
      response.status(500);
      response.json(error);
    }
  }
};