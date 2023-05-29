const validateLogin = async (req, res, next) => {
  const users = req.body;

  if (!users) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
    validateLogin,
};