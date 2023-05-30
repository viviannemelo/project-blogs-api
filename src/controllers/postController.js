const postService = require('../services/postService');
const { validateToken } = require('../auth/auth');

const getPosts = async (_req, res) => {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostById(id);  
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  };

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { authorization } = req.headers;
        const data = validateToken(authorization);

        const userId = data.user.id;
        const newPost = await postService.createPost(userId, { title, content, categoryIds });

        return res.status(201).json(newPost.dataValues);
      } catch (e) {
        return e;
      }
};

const updatePost = async (req, res) => {
  const { id: userId } = req.params;
  const newContent = req.body;
  await updatePost(userId, newContent);

  const postUpdate = await getPostById(userId);
  if (postUpdate === 'notfound') return res.status(404).json({ message: 'Post does not exist' }); 
  return res.status(200).json(postUpdate);
};

const deletePost = async (req, res) => {  
  const { id } = req.params;
  const { type, message } = await postService.deletePost(Number(id));
  if (type) return res.status(type).json({ message });
  return res.status(204).end();
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};