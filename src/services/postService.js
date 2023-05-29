// const db = require('../models');
const { BlogPost, PostCategory, User, Category } = require('../models');

const getPosts = async () => {
    const posts = BlogPost.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: 'password' } },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ], 
    });
    return posts;
};

const getPostById = async (id) => {
    const posts = await BlogPost.findOne({
        where: { id },
        include: [
            { 
                model: User, 
                as: 'user', 
                attributes: { exclude: 'password' },
            },
            { 
                model: Category, 
                as: 'categories', 
                through: { attributes: [] },
            },
        ],
    });
        
    return posts;
};

const createPost = async (userId, { title, content, categoryIds }) => {
    const newPost = await BlogPost.create({
        title,
        content,
        categoryIds,
    });
    
    await PostCategory.bulkCreate(categoryIds
        .map((categoryId) => ({ categoryId, postId: newPost.id })));
    return newPost;
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
};