const AuthService = require('./auth.service');
const User = require('./user.model');

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    const validPassword = await AuthService.validatePassword(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Email or password is wrong');

    const token = AuthService.generateToken(user);
    res.header('Authorization', token).send('Logged in');
};

exports.register = async (req, res) => {
    const hashedPassword = await AuthService.hashPassword(req.body.password);
    
    const user = new User({
        ...req.body,
        password: hashedPassword
    });

    await user.save();
    res.send('User Registered');
};
