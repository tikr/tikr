'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('tikrApp'));

  var SearchCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('/api/users/me/search')
      .respond([{'name': 'joe'}, {'name':'jim'}]);
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should be able to fetch all users', function () {
    scope.fetchUsers()
    .then(function(users){
      expect(users.length).toBe(2);
    });
  });
});
