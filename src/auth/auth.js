const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secretJWT';

const createToken = (user) => jwt.sign({ user }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret, jwtConfig);

module.exports = {
  createToken,
  verifyToken,
};