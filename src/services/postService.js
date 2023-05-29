const db = require('../models');

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
    categoryById,
    createPost,
};