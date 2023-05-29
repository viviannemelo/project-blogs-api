const postService = require('../services/postService');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    
    const validateCategory = await postService.categoryById(categoryIds);
    if (validateCategory !== null) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const post = await postService.createPost({ title, content, categoryIds });
    return res.status(201).json(post.dataValues);
};

module.exports = {
    createPost,
};