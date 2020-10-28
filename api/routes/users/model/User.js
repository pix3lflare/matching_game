const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: true,
        default: ''
    },
    password: { type: String, default: ''},
    timestamp: {type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a')}
});

module.exports = mongoose.model('users', UserSchema);