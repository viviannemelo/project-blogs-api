const express = require('express');

const categoryRouter = express.Router();

const categoryController = require('../controllers/categoryController');
const validateJWT = require('../middlewares/validateJWT');

categoryRouter.get('/', validateJWT, categoryController.getCategories);
categoryRouter.post('/', validateJWT, categoryController.createCategory);

module.exports = categoryRouter;