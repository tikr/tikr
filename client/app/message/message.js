'use strict';

angular.module('tikrApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('inbox', {
        url: '/messages/inbox',
        controller: 'MessageCtrl',
        templateUrl: 'app/message/message.html'
      })
      .state('inbox.messages', {
        views: {
          'sidebar': {
            templateUrl: 'app/message/message.sidebar.html'
          },
          'messages': {
            templateUrl: 'app/message/message.inbox.html'
          }
        }
      })
      .state('inbox.messages.show', {
        url: '/:id',
        templateUrl: 'app/message/message.show.html'
      })
      .state('inbox.messages.create', {
        url: '/create',
        templateUrl: 'app/message/message.create.html'
      });
    $urlRouterProvider.otherwise('/messages/inbox');
  });
