const { verifyToken } = require('../auth/auth');

const validateJWT = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    if (!verifyToken(authorization)) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

   next();
};
module.exports = validateJWT;