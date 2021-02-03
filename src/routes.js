const path = require('path');
const express = require('express');
const router = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const PhotoController = require('./app/controllers/PhotoController');
const authorize = require('./app/middlewares/authorize');
const photoUpload = require('./app/middlewares/photoUpload');

// router.get('/photos', PhotoController.index);
router.get('/photos', authorize, PhotoController.userIndex);
router.get('/photos/:id', authorize, PhotoController.get);
router.post('/photos', [authorize, photoUpload, PhotoController.store]);
router.put('/photos/:id', [authorize, PhotoController.update]);
router.delete('/photos/:id', [authorize, PhotoController.destroy]);

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/register', AuthController.register);

// router.use('/static', authorize, express.static(path.join(__dirname, '../static')));
router.use('/static', express.static(path.join(__dirname, '../static')));
router.use('/storage', express.static(path.join(__dirname, '../storage')));

module.exports = router;