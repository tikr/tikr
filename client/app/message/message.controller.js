'use strict';

angular.module('tikrApp')
  .controller('MessageCtrl', ['$scope', '$state', 'Auth', 'Message', function ($scope, $state, Auth, Message) {

    /**
     * Set $state on the scope to access it in the views
     */
    $scope.$state = $state;

    /**
     * Fetches a messages list that belongs to the authenticated user
     */
    $scope.inbox = function () {
      Message.inbox().then(function (messages) {
        $scope.messages = messages;
      });
    };

    /**
     * Fetches a message
     */
    $scope.show = function (message) {
      Message.update(message, { read: true }).then(function (result) {
        if (result) {
          $scope.message = message;
          $scope.message.read = true;
        }
      });
    };

    /**
     * Prioritizes the message for the user
     */
    $scope.starred = function (message) {
      Message.update(message, { starred: true }).then(function (result) {
        if (result) message.starred = true;
      });
    };

    /**
     * Creates a new private message to a user
     */
    $scope.create = function (newMessage) {
      var newMessage = {
        to: Auth.getCurrentUser().github.id,
        from: Auth.getCurrentUser().github.id,
        title: newMessage.title,
        content: newMessage.message.replace(/\n/g, '<br />')
      };

      Message.create(newMessage, function () {
        $scope.messages.push(newMessage);
      });
    };

    $scope.inbox();
    $state.transitionTo('inbox.messages');

  }]);
