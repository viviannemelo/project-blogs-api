const db = require('../models');
// const { createToken } = require('../auth/auth');

const getAll = async () => {
    const users = await db.User.findAll();
    return users;
};

const getOne = async (email) => {
    const users = await db.User.findOne({
        where: {
            email,
        },
    });
    return users;
};

// const createUser = async (user) => {
//     const { email, password, displayName, image } = user;
//     const findEmail = await User.findOne({ where: { email } });
//     if (findEmail) {
//         return { status: 409 };
//     }

//     await User.create({ email, password, displayName, image });

//     const token = createToken(user.email);
//     return token;
// };

// const getUser = async (user) => {
//     const { email, password, displayName, image } = user;

//     const userLogin = User.findOne({ 
//         where: { 
//             email: user.email, 
//             password: user.password, 
//         },
//     });
//     if (!userLogin) {
//         return { status: 404 };
//     }

//     await User.create({ email, password, displayName, image });

//     const token = createToken(userLogin.email);
//     return token;
// };

module.exports = {
    getAll,
    getOne,
    // createUser,
};