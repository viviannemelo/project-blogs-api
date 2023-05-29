const db = require('../models');

const getPosts = async () => {
    const posts = db.BlogPost.findAll({
        include: [
            {
                model: db.User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: db.Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });
    return posts;
};

const categoryById = async (categoryId) => {
    const categoriesIds = categoryId.map(
        async (id) => db.Category.findByPk(id),
    );

    const promises = await Promise.all(categoriesIds);
    return promises;
};

const createPost = async ({ title, content, categoryIds }) => {
    const newPost = await db.BlogPost.create({
        title,
        content,
        categoryIds,
    });
    
    await db.PostCategory.bulkCreate(categoryIds
        .map((id) => ({ id, postId: newPost.id })));
    return newPost;
};

module.exports = {
    getPosts,
    categoryById,
    createPost,
};