const express = require('express');

const loginRouter = express.Router();

const loginController = require('../controllers/loginController');
// const { validateLogin } = require('../middlewares/validateLogin');
// const validateJwt = require('../auth/validateJWT');

loginRouter.get('/', loginController.getAll);
loginRouter.post('/', loginController.login);

module.exports = {
    loginRouter,
};