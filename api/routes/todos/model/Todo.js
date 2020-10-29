const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

var TodoSchema = new mongoose.Schema({

    userID: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },

    description: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },

    isComplete: {
        type: Boolean,
        default: false,
    },

    timestamp: {type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a')}
});

module.exports = mongoose.model('todos', TodoSchema);