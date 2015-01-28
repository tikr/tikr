/*
Note: This is a template copied from main
*/
'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('tikrApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of things to the scope', function () {
  //   $httpBackend.flush();
  //   expect(scope.awesomeThings.length).toBe(4);
  // });
});
