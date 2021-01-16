const router = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const PhotoController = require('./app/controllers/PhotoController');
const { authorize } = require('./app/middlewares/authorize');

router.get('/photos', PhotoController.index);
router.get('/photos/:id', PhotoController.show);
router.post('/photos', authorize, PhotoController.store);
router.put('/photos/:id', PhotoController.update);
router.delete('/photos/:id', PhotoController.destroy);

router.post('/authenticate', AuthController.authenticate);
router.post('/register', AuthController.register);

module.exports = router;