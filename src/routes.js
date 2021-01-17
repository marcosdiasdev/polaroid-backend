const router = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const PhotoController = require('./app/controllers/PhotoController');
const authorize = require('./app/middlewares/authorize');
const photoUpload = require('./app/middlewares/photoUpload');

router.get('/photos', authorize, PhotoController.userIndex);
router.get('/photos/:id', authorize, PhotoController.get);
router.post('/photos', [authorize, photoUpload, PhotoController.store]);
router.put('/photos/:id', [authorize, PhotoController.update]);
router.delete('/photos/:id', [authorize, PhotoController.destroy]);

router.post('/authenticate', AuthController.authenticate);
router.post('/register', AuthController.register);

module.exports = router;