const express = require('express');

const postRouter = express.Router();

const postController = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');
const {
    validatePostId,
    validateUserAuthorized,
    validateContent,
} = require('../middlewares/validatePost');

postRouter.get('/', validateJWT, postController.getPosts);
postRouter.get('/:id', validateJWT, postController.getPostById);
postRouter.post('/', validateJWT, validatePostId, postController.createPost);
postRouter.put(
    '/:id',
    validateJWT,
    validateContent,
    validateUserAuthorized,
    postController.updatePost,
);
postRouter.delete(
    '/:id',
    validateJWT,
    validateUserAuthorized,
    postController.deletePost,
    );

module.exports = {
    postRouter,
};