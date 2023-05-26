const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createToken = (email) => jwt.sign({ email }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};