'use strict';

describe('Controller: MessageCtrl', function () {

  var scope;
  var state;
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

      mockMessageService.show = function (message) {
        
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

    });

  });

});
