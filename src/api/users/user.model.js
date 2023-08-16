const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['SAAS Admin', 'Super User', 'Admin', 'User'] },
    suspend: { type: Boolean, default: false },
    org_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});

module.exports = mongoose.model('User', userSchema);
