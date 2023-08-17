const mongoose = require('mongoose');
const { Schema } = mongoose;

const locSchema = new Schema({
    loc_id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['single', 'dual'],
        required: true
    },
    location_id: {
        type: String,
        ref: 'Location',
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

const LOC = mongoose.model('LOC', locSchema);

module.exports = LOC;
