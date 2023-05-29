const db = require('../models');
// const Category = require('../models/Category');

const getCategories = async () => {
    const categories = await db.Category.findAll({
        attributes: ['id', 'name'],
    });
    return categories;
};

const createCategory = async (name) => {
  try {
    const newCategory = await db.Category.create({ name });
    return newCategory;
  } catch (e) {
    return e;
  }
};

module.exports = {
    getCategories,
    createCategory,
};