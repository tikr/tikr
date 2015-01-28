'use strict';

var should = require('should');
var app = require('../../app');
var Message = require('./message.model');

var message = new Message({
  to: '54c18ced050e910c0068d43e',
  from: '54c18d02050e910c0068d43f',
  title: 'Great JS opportunity in fast growing startup!',
  content: 'Have you ever thought about a new opportunity?'
});

describe('Message Model', function () {

  before(function (done) {
    Message.remove({}).exec().then(function () {
      done();
    });
  });

  afterEach(function (done) {
    Message.remove({}).exec().then(function () {
      done();
    });
  });

  it('should have the tested properties', function () {
    message.should.have.property('to');
    message.should.have.property('from');
    message.should.have.property('title');
    message.should.have.property('content');
    message.should.have.property('read');
    message.should.have.property('starred');
  })

  it('should begin with no messages', function (done) {
    Message.find({}, function (err, messages) {
      messages.should.have.length(0);
      done();
    });
  });

  it('should fail when saving without a to a user', function (done) {
    message.to = '';
    message.save(function (err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without a from user', function (done) {
    message.from = '';
    message.save(function (err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without a content', function (done) {
    message.content = '';
    message.save(function (err) {
      should.exist(err);
      done();
    });
  });

  it('should default to not being read', function (done) {
    message.save(function (err) {
      message.read.should.be.false;
      done();
    });
  });

  it('should default to not being starred', function (done) {
    message.save(function (err) {
      message.starred.should.be.false;
      done();
    });
  });

});
