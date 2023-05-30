const userService = require('../services/userService');
const { createToken, verifyToken } = require('../auth/auth');

const getUsers = async (req, res) => {
    const user = await userService.getUsers();
    if (user) return res.status(200).json(user);
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await userService.getUserById(id);
        if (users.type) throw Error;
        res.status(200).json(users);
      } catch (error) {
        return res.status(404).json({ message: 'User does not exist' });
      }
};

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser !== null) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await userService.createUser(req.body);
    const { password: _password, ...newUserWithoutPassword } = newUser.dataValues;
    const token = createToken(newUserWithoutPassword);
    return res.status(201).json({ token });
  } catch (e) {
      return e;
  }
};

const deleteUser = async (req, res) => {
  const { authorization: token } = req.headers;
  const data = verifyToken(token);
  
  const { id } = data.user;
  await userService.deleteUser(id);
  return res.status(204).end();
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
};