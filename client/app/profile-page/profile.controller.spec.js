'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('tikrApp'));

  var ProfileCtrl,
      scope,
      $httpBackend,
      location; //TODO: research why I couldn't use $location

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $location) {

    $httpBackend = _$httpBackend_;
    location = $location;
    $httpBackend.expectGET('/api/profiles/teechap')
      .respond({username: "teechap", skills: ["JavaScript"]});

    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a username to the scope', function () {

    location.path("/profiles/teechap");
    $httpBackend.flush();
    expect(scope.username).toBe("teechap");
  });
});
