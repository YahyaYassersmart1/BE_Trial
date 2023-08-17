const mongoose = require('mongoose');
const { Schema } = mongoose;

const globalIdentifierSchema = new Schema({
    identifier_id: {
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

const GlobalIdentifier = mongoose.model('GlobalIdentifier', globalIdentifierSchema);

module.exports = GlobalIdentifier;
