const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    org_id: { type: String, unique: true },
    org_name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});

module.exports = mongoose.model('Organization', organizationSchema);
