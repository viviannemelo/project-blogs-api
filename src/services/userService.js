const db = require('../models');

const getUsers = async () => {
    const users = await db.User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
};

const getUserById = async (id) => {
    const user = await db.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!user) return { type: 'NOT_FOUND' };
    return user;
  };

const createUser = async (user) => {
    const newUser = db.User.create(user);
    return newUser;
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
};