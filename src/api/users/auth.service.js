const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user.model');

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

exports.validatePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
