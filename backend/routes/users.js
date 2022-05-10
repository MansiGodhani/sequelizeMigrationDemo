const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

//User
router.get('/list', userController.index);
router.get('/list/:id', userController.read);
router.post('/createUser', userController.create);
router.put('/updateUser/:id', userController.update);
router.delete('/deleteUser/:id', userController.destroy);

module.exports = router;