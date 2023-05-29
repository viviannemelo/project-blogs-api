const postService = require('../services/postService');
const { validateToken } = require('../auth/auth');

const getPosts = async (req, res) => {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
};

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { authorization: token } = req.headers;
        const data = validateToken(token);

        const userId = data.user.id;
        const post = await postService.createPost(userId, { title, content, categoryIds });
        return res.status(201).json(post.dataValues);
      } catch (e) {
        return e;
      }
};

module.exports = {
    getPosts,
    createPost,
};