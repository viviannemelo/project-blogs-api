const userService = require('../services/userService');
// const { createToken } = require('../auth/auth');

const getUsers = async (req, res) => {
    const user = await userService.getUsers();
    if (user) return res.status(200).json(user);
};

module.exports = {
    getUsers,
};