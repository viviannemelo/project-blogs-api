const db = require('../models');

const getUsers = async () => {
    const users = await db.User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
};

const createUser = async (user) => {
    const newUser = db.User.create(user);
    return newUser;
};

module.exports = {
    getUsers,
    createUser,
};