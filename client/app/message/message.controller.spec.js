'use strict';

describe('Controller: MessageCtrl', function () {

  var scope;
  var messageService;

  // load controller views
  var views = [
    'app/message/message.html',
    'app/message/message.sidebar.html',
    'app/message/message.inbox.html',
    'app/message/message.create.html'
  ];

  views.forEach(function (view) {
    beforeEach(module(view));
  });

  beforeEach(function () {

    var mockMessageService = {};
    module('tikrApp', function ($provide) {
      $provide.value('messageService', mockMessageService);
    });

    inject(function ($q) {
      mockMessageService.messages = [
        { to: '123', from: '123', title: 'Title 1', content: 'Content 1', read: false },
        { to: '123', from: '123', title: 'Title 2', content: 'Content 2', read: false },
        { to: '123', from: '123', title: 'Title 3', content: 'Content 3', read: false }
      ];

      mockMessageService.inbox = function () {
        var defer = $q.defer();
        defer.resolve(this.messages);
        return defer.promise;
      };

      mockMessageService.update = function () {
        var defer = $q.defer();
        this.messages[0].read = true;
        defer.resolve(this.messages[0]);
        return defer.promise;
      };

      mockMessageService.create = function () {
        var defer = $q.defer();
        defer.resolve(true);
        return defer.promise;
      };
    });

  });

  beforeEach(inject(function ($controller, $rootScope, _messageService_) {

    scope = $rootScope.$new();
    messageService = _messageService_;
    $controller('MessageCtrl', {
      $scope: scope,
      messageService: messageService
    });

    scope.$digest();

  }));

  describe('#inbox', function () {

    it('lists all the private messages for the authenticated user', function () {
      spyOn(messageService, 'inbox').andCallThrough();
      scope.inbox();
      expect(scope.messages.length).toBe(3);
      expect(messageService.inbox).toHaveBeenCalled();
    });

  });

  describe('#show', function () {

    it('displays the correct private message to the authenticated user', function () {
      spyOn(messageService, 'update').andCallThrough();
      var message = scope.messages[0];
      scope.show(message);
      scope.$digest();
      expect(message.read).toEqual(true);
      expect(messageService.update).toHaveBeenCalledWith(message, { read: true });
    });

  });

  describe('#starred', function () {

    it('starres the private message', function () {
      spyOn(messageService, 'update').andCallThrough();
      var message = scope.messages[0];
      scope.starred(message);
      scope.$digest();
      expect(message.starred).toEqual(true);
      expect(messageService.update).toHaveBeenCalledWith(message, { starred: true });
    });

  });

  describe('#create', function () {

    it('creates a new private message', function () {
      spyOn(messageService, 'create').andCallThrough();
      var message = {
        to: 'someone',
        from: 'somebody',
        title: 'New title',
        content: 'New content'
      };
      scope.create(message);
      scope.$digest();
      expect(scope.messages.length).toBe(4);
      expect(messageService.create).toHaveBeenCalledWith(message);
    });

  });

});
