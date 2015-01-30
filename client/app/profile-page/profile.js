'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profiles/:username',
        templateUrl: 'app/profile-page/profile.html',
        controller: 'ProfileCtrl'
      });
  });