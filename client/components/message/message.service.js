'use strict';

angular.module('tikrApp')
  .factory('Message', ['$http', '$q', '$location', 'Auth', function ($http, $q, $location, Auth) {

    return {

      /**
       * Get the users messages
       *
       */
      getMessages: function () {

        var deffered = $q.defer();
        $http.get('/api/messages/me')
        .success(function (data) {
          console.log('i got data');
        })
      },

      /**
       * @param Object message JS Object of a new message to post
       * @return promise
       */
      create: function (message) {

        var deffered = $q.defer();
        $http.post('/api/messages/create', message)
        .success(function (data, status, headers, config) {
          deffered.resolve(data);
        })
        .error(function (data, status, headers, config) {
          deffered.reject(data);
        });

        return deffered.promise;
      }

    };

  }]);
