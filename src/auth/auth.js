const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createToken = (email) => jwt.sign({ email }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret, jwtConfig);

module.exports = {
  createToken,
  verifyToken,
};