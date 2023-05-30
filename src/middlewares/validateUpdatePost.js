const postService = require('../services/postService');
const { verifyToken } = require('../auth/auth');

const validateUpdatePost = async (req, res, next) => {
    const { authorization: token } = req.headers;
    const { id } = req.params;
    const { title, content } = req.body;

    const post = await postService.getPostById(Number(id));
    const data = verifyToken(token);
    const userId = data.user.id;
    if (post.dataValues.userId !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = validateUpdatePost;