const db = require('../models');
const postService = require('../services/postService');
const categoryService = require('../services/categoryService');

const validatePostId = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  
    if (!title || !content || !categoryIds) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const categories = await categoryService.getCategories();
    const categoryId = categories.map((category) => category.id);
    const allCategories = categoryId.every((id) => categoryIds.includes(id));

    if (!allCategories) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
  
    next();
};

const validateUserAuthorized = async (req, res, next) => {
  const { id: postId } = req.params;
  const postUpdate = await postService.getPostById(postId);
  if (!postUpdate) return res.status(404).json({ message: 'Post does not exist' }); 
  const { dataValues: { userId } } = postUpdate;

  const { email } = req.body.token;
  const { id: idUser } = await db.User.findOne({ where: { email } });

  if (idUser !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};

const validateContent = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  next();
};

module.exports = {
  validatePostId,
  validateUserAuthorized,
  validateContent,
};