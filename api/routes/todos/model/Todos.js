const mongoose = require('mongoose');
const moment = require('moment');
const now = moment().format('MMMM Do YYYY, h:mm:ss a');

const TodoSchema = new mongoose.Schema({

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
    isCompleted: {
      type: Boolean,
    },

    timeCreated: {
      type: String,
      default: now
    }

});

module.exports = mongoose.model('todo', TodoSchema);