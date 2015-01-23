'use strict';

var express = require('express');
var controller = require('./message.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// GET methods

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
// router.get('/:id', auth.isAuthenticated(), controller.show);

// POST methods

// router.post('/', controller.create);


// DELETE methods

// router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
