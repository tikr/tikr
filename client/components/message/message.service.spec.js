'use strict';

describe('MyController', function() {

  // Set up the module
  beforeEach(module('tikrApp'));

  var Auth;
  var messageService;
  var $httpBackend;

  // load controller views
  var views = ['app/main/main.html'];

  views.forEach(function (view) {
    beforeEach(module(view));
  });

  beforeEach(inject(function (_messageService_, _$httpBackend_, _Auth_) {

    Auth = _Auth_;
    messageService = _messageService_;
    $httpBackend = _$httpBackend_;

  }));

  describe('inbox', function () {

    it('fetches a list of private messages', function () {
      $httpBackend.expectGET('/api/messages/inbox').respond(function (method, url, data) {
        return [200, [{}, {}, {}, {}]];
      });
      messageService.inbox().then(function (messages) {
        expect(messages.length).toBe(4);
      });

      $httpBackend.flush();
    });

  });

  describe('update', function () {

    it('updates the read property', function () {
      var message = {
        to: '123',
        from: '123',
        title: 'Title 1',
        content: 'Content 1',
        read: false
      };
      $httpBackend.expectPUT('/api/messages/update').respond(function (method, url, data) {
        message.read = true;
        return [200, message];
      });
      messageService.update(message, {read: true}).then(function (message) {
        expect(message.read).toBe(true);
      });

      $httpBackend.flush();
    });

  });

  describe('create', function () {

    it('creates a new message', function () {
      var message = {
        to: '123',
        from: '123',
        title: 'Title 1',
        message: 'Content 1',
        read: false
      };
      spyOn(Auth, 'getCurrentUser').andCallFake(function () {
        return { github: { id: '123' } };
      });
      $httpBackend.expectPOST('/api/messages/create').respond(200, true);
      messageService.create(message).then(function (result) {
        expect(result).toBe(true);
      });

      $httpBackend.flush();

    });

  });

});
