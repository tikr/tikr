'use strict';

angular.module('tikrApp')
  .controller('MessageCtrl', ['$scope', 'Message', 'Auth', function ($scope, Message, Auth) {

    /**
     * Fetches a messages list that belongs to the authenticated user
     */
    $scope.getMessages = function () {
      Message.getMessages();
    };

    /**
     * Creates a new private message to a user
     */
    $scope.create = function () {
      Message.create({
        to: '54c18ced050e910c0068d43e',
        from: Auth.getCurrentUser()._id,
        title: $scope.newMessage.title,
        content: $scope.newMessage.message
      });
    };

  }]);
