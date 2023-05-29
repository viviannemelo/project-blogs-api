const express = require('express');

const postRouter = express.Router();

const postController = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');
const validatePost = require('../middlewares/validatePost');

postRouter.get('/', validateJWT, postController.getPosts);
postRouter.post('/', validateJWT, validatePost, postController.createPost);

module.exports = {
    postRouter,
};