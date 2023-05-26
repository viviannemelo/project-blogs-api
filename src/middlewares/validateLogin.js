// const userService = require('../services/index');

const validateLogin = async (req, res, next) => {
  //  const users = await userService.getAll();
  // const { email, password } = req.body;
  const users = req.body;

  if (!users) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  // if (!email || password !== users.password) {
  //   return res.status(400).json({ message: 'Invalid fields' });
  // }

  next();
};

module.exports = {
    validateLogin,
};