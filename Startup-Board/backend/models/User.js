const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['founder', 'investor'], required: true },
    bio: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
