const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    password: String,
    birthdate: Date,
    location: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    recipesByUser: String,
    commentsByUser: String,
    following: String,
    favorites: String,
    avatar: Image
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;