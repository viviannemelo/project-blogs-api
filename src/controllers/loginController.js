const { createToken } = require('../auth/auth');
const loginService = require('../services/loginService');

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const users = await loginService.getOne(email);
    if (!users) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _password, ...newUserWithoutPassword } = users.dataValues;
    const token = createToken(newUserWithoutPassword);
    return res.status(200).json({ token });
};

module.exports = {
  login,
};