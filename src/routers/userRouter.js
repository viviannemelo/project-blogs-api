const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');

userRouter.get('/', validateJWT, userController.getUsers);

module.exports = {
    userRouter,
};