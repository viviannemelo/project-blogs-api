const categoryService = require('../services/categoryService');

const getCategories = async (req, res) => {
    const categories = await categoryService.getCategories();
    if (categories) return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const user = await categoryService.createCategory({ name });
    return res.status(201).json(user);
};

module.exports = {
    getCategories,
    createCategory,
};