const { verifyToken } = require('../auth/auth');

const validateJWT = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({ message: 'Token inválido' });

    const data = verifyToken(authorization);
    req.payload = data;

    next();
};

module.exports = validateJWT;