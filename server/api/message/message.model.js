'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  to: { type: Number, required: true },
  from: { type: Number, required: true },
  title: String,
  content: { type: String, required: true },
  read: { type: Boolean, default: false },
  starred: { type: Boolean, default: false }
});

module.exports = mongoose.model('Message', MessageSchema);
