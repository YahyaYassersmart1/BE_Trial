const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    project_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    globalIdentifier_id: {
        type: String,
        ref: 'GlobalIdentifier',
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
