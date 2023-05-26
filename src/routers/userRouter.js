const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');
const validateUser = require('../middlewares/validateUser');

userRouter.get('/', validateJWT, userController.getUsers);
userRouter.post('/', validateUser, userController.createUser);

module.exports = {
    userRouter,
};