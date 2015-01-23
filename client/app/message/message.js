/**
 * http://localhost:9000/messages/me
 */

'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/messages/me',
        templateUrl: 'app/message/message.html'
      });
  });
