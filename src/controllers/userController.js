const userService = require('../services/userService');
// const validateUser = require('../middlewares/validateUser');
const { createToken } = require('../auth/auth');

const getUsers = async (req, res) => {
    const user = await userService.getUsers();
    if (user) return res.status(200).json(user);
};

const createUser = async (req, res) => {
    try {
        await userService.createUser(req.body);
        const token = createToken(req.body);
        res.status(201).json({ token });
    } catch (e) {
        return res.status(409).json({ message: 'User already registered' });
    }
    // const userValid = await userService.createUser;
    // if (userValid !== null) {
    //     return res.status(409).json({ message: 'User already registered' });
    // }
    // const { email } = req.body;
    // const token = await createToken(email);
    // return res.status(201).json({ token });
    // if (user) {
    //     try {
    //         const { email } = req.body;
    //         const token = createToken(email);
    //         return res.status(201).json({ token });
    //     } catch (e) {
    //         return res.status(500).json({ message: `${e}` });
    //     }
    // }
};

module.exports = {
    getUsers,
    createUser,
};