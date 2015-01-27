'use strict';

describe('Controller: MessageCtrl', function () {

  // load the controller's module
  beforeEach(module('tikrApp'));

  var MessageCtrl,
  scope,
  $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('/api/messages').respond([{}, {}]);
    scope = $rootScope.$new();
    MessageCtrl = $controller('MessageCtrl', {
      $scope: scope
    });
  }));

  it('should be able to fetch all messages', function () {
    // scope.inbox().then(function (messages) {
    //   expect(messages.length).toBe(2);
    // });
  });
});
