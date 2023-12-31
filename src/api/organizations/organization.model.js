const mongoose = require('mongoose');
const { Schema } = mongoose;

const organizationSchema = new Schema({
    org_id: {
        type: String,
        required: true,
        unique: true
    },
    org_name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
