'use strict';

angular.module('tikrApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $stateParams, User) {
    $scope.menu = [
    {
      'title': 'Search',
      'link': '/search'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });