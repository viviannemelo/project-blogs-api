const db = require('../models');

const getOne = async (email) => {
    const users = await db.User.findOne({
        where: {
            email,
        },
    });
    return users;
};

module.exports = {
    getOne,
};