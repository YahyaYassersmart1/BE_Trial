const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const organizationRoutes = require('./api/organization/organization.routes');
const globalIdentifierRoutes = require('./api/globalIdentifier/globalIdentifier.routes');
const projectRoutes = require('./api/project/project.routes');
const locRoutes = require('./api/loc/loc.routes');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Role-based Access Control Middleware
const permit = (...allowedRoles) => {
    return (req, res, next) => {
        const user = req.user;
        
        if (user && allowedRoles.includes(user.role)) {
            next(); // user has the right role, continue to the next middleware
        } else {
            res.status(403).json({ message: 'Forbidden' }); // user is forbidden
        }
    };
};

// Routes
app.use('/api/organizations', permit('SAAS Admin', 'Super User'), organizationRoutes);
app.use('/api/globalIdentifiers', permit('SAAS Admin', 'Super User'), globalIdentifierRoutes);
app.use('/api/projects', permit('SAAS Admin', 'Super User', 'Admin'), projectRoutes);
app.use('/api/locs', permit('SAAS Admin', 'Super User', 'Admin', 'User'), locRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
