const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const UserSchema = new Schema({
    name: String,
    weight: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;