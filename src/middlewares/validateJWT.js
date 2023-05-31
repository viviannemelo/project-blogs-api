const { verifyToken } = require('../auth/auth');

const validateJWT = async (req, res, next) => {
   try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const data = verifyToken(authorization);
    req.body = { ...req.body, token: data.user };
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    next();
};

module.exports = validateJWT;