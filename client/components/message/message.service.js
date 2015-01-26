'use strict';

angular.module('tikrApp')
  .factory('Message', ['$http', '$q', '$state', 'Auth', function ($http, $q, $state, Auth) {

    return {

      /**
       * Get the users messages
       *
       */
      inbox: function () {

        var deffered = $q.defer();
        $http.get('/api/messages/inbox')
        .success(function (data) {
          deffered.resolve(data);
        })
        .error(function (data) {
          deffered.reject(data);
        });

        return deffered.promise;
      },

      /**
       * Updates the properties on the message
       */
      update: function (message, property) {

        var deffered = $q.defer();
        $http.put('/api/messages/update', {
          message: message,
          property: property
        })
        .success(function () {
          deffered.resolve(true);
        })
        .error(function () {
          deffered.reject(false);
        });

        return deffered.promise;

      },

      /**
       * @param Object message JS Object of a new message to post
       * @return promise
       */
      create: function (message, cb) {

        $http.post('/api/messages/create', message)
        .success(function () {
          cb();
          $state.transitionTo('inbox.messages');
        })
        .error(function () {
          $state.transitionTo('inbox.messages.create');
        });

      }

    };

  }]);
