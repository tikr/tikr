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
 * Updates the read property on the message
 */
exports.update = function (req, res, next) {
  var message = req.body.message;
  var property = req.body.property;
  User.findOne({
    _id: req.user._id
  }, function (err, user) {
    if (err) next(err);
    Message.findOneAndUpdate({
      _id: message._id
    }, property, null, function (err, doc) {
      if (err) next(err);
      res.status(200).json(doc);
    });
  });
};

/**
 * Creates a new message
 */
exports.create = function (req, res, next) {
  var newMessage = new Message(req.body);
  newMessage.save(function (err, message) {
    if (err) return next(err);
    if (!message) return res.status(401).json(false);
    res.status(200).json(message);
  });
};

/**
 * Get a specific message for a user
 */
exports.show = function (req, res, next) {
  console.log('req.query', req.params);
  User.findOne({
    _id: req.user._id
  }, function (err, user) {
    Message.findOne({
      _id: req.params.id
    }, function (err, message) {
      res.status(200).json(message);
    });
  });
};

/**
* Get a users messages
*/
exports.inbox = function (req, res, next) {
  User.findOne({
    _id: req.user._id
  }, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).json();
    Message.find({
      to: req.user.github.id
    }, function (err, messages) {
      if (err) return next(err);
      if (!messages) return res.status(401).json();
      res.json(messages);
    });
  });
};
