const { createToken } = require('../auth/auth');
const loginService = require('../services/loginService');

const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const users = await loginService.getOne(email);
    // console.log(users);
    if (!users) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = createToken(email);
    return res.status(200).json({ token });
};

module.exports = {
  login,
};