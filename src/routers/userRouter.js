const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');
const validateUser = require('../middlewares/validateUser');

userRouter.get('/', validateJWT, userController.getUsers);
userRouter.get('/:id', validateJWT, userController.getUserById);
userRouter.post('/', validateUser, userController.createUser);
userRouter.delete('/me', validateJWT, userController.deleteUser);

module.exports = {
    userRouter,
};