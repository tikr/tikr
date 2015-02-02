'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error404', {
        url: '/pagenotfound',
        templateUrl: 'app/404/error404.html',
        controller: 'Error404Ctrl'
      });
  });