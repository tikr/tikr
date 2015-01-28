'use strict';

angular.module('tikrApp')
  .factory('apiService', ['$http', '$q', '$state', 'Auth', function ($http, $q, $state, Auth) {

    return {

      /**
       * Get the users messages
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
      create: function (newMessage) {
        var deffered = $q.defer();
        var message = {
          to: Auth.getCurrentUser().github.id,
          from: Auth.getCurrentUser().github.id,
          title: newMessage.title,
          content: newMessage.message.replace(/\n/g, '<br />')
        };

        $http.post('/api/messages/create', message)
        .success(function () {
          deffered.resolve();
        })
        .error(function () {
          deffered.reject();
        });

        return deffered.promise;
      }

    };

  }]);
