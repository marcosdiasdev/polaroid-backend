const router = require('express').Router();
const MarcaController = require('./app/controllers/MarcaController');

router.get('/marcas', MarcaController.index);
router.post('/marcas', MarcaController.store);
router.delete('/marcas/:id', MarcaController.destroy);

module.exports = router;