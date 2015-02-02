/*
Note: This is a template copied from main
*/
'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('skills', {
        url: '/skills', // This will be of the form /profile-name/skills
        templateUrl: 'app/skills/skills.html',
        controller: 'SkillsCtrl'
      });
  });