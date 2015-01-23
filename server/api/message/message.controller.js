'use strict';

var User = require('../user/user.model');
var Message = require('./message.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function (res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of messages
 * restriction: 'admin'
 */
exports.index = function (req, res) {
  Message.find({}, function (err, messages) {
    if (err) return res.status(500).json(err);
    res.status(200).json(messages);
  });
};

/**
 * Creates a new message
 */
exports.create = function (req, res, next) {
  var newMessage = new Message(req.body);
  newMessage.save(function (err, message) {
    console.log('err', err, 'message', message);
    if (err) return next(err);
    if (!message) return res.send(401);
    res.end();
  });
};

/**
* Get a users messages
*/
exports.me = function (req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).json();
    Message.find({
      to: userId
    }, function (err, messages) {
      if (err) return next(err);
      if (!messages) return res.status(401).json();
      res.status(200).json(messages);
    });
  });
};
