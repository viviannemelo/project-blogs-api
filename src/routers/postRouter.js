const express = require('express');

const postRouter = express.Router();

const postController = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');
const validatePost = require('../middlewares/validatePost');
const validateUpdatePost = require('../middlewares/validateUpdatePost');

postRouter.get('/', validateJWT, postController.getPosts);
postRouter.get('/:id', validateJWT, postController.getPostById);
postRouter.post('/', validateJWT, validatePost, postController.createPost);
postRouter.put('/:id', validateJWT, validateUpdatePost, postController.updatePost);
postRouter.delete('/:id', validateJWT, validatePost, validateUpdatePost, postController.deletePost);

module.exports = {
    postRouter,
};