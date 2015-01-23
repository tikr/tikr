'use strict';

var Message = require('./message.model');
var passport = require('passort');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function (req, err) {
  return res.status(422).json(err);
};

/**
 * Get list of messages
 * restriction: 'admin'
 */
exports.index = function (req, res) {
  Message.find({}, function (err, messages) {
    if (err) return res.status(500).send(err);
    res.status(200, messages);
  });
};
