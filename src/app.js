const express = require('express');
const authMiddleware = require('./middlewares/auth.middleware');
const authorizationMiddleware = require('./middlewares/authorization.middleware');
const authRoutes = require('./api/users/auth.routes');
const organizationRoutes = require('./api/organizations/organization.routes');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected-route', authMiddleware, authorizationMiddleware('Admin'), (req, res) => {
    res.send('This is a protected route');
});


// ... other configurations

module.exports = app;
