module.exports = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long' });
    }
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    if (!isEmailValid) { 
        return res.status(400).json({
            message: '"email" must be a valid email' });
    }
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long' });
    }
    next();
};