const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createToken = (email) => jwt.sign({ email }, secret, jwtConfig);

const verifyToken = (token) => {
  jwt.verify(token, secret);
  // try {
  //   const payload = jwt.verify(token, secret);
  //   return payload;
  // } catch (e) {
  //   return null;
  // }
};

module.exports = {
  createToken,
  verifyToken,
};