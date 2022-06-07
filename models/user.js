const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    googleId: String,
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema);