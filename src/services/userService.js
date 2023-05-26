const db = require('../models');

const getUsers = async () => {
    const users = await db.User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
};

module.exports = {
    getUsers,
};