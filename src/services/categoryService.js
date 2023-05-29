const db = require('../models');
const Category = require('../models/Category');

const getCategories = async () => {
    const categories = await db.Category.findAll({
        attributes: ['id', 'name'],
    });
    return categories;
};

const createCategory = ({ name }) => Category.create({ name });

module.exports = {
    getCategories,
    createCategory,
};