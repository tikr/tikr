'use strict';

angular.module('tikrApp')
  .controller('SearchCtrl', function ($scope, $http, $q, User) {
   $scope.users = [];

   // returns a promise
   $scope.fetchUsers = function(){
     return $q(function(resolve, reject){
       var filters = {};
       $scope.users = User.search(filters);
       if(!$scope.users){
        reject('failed')
       } else{
        resolve($scope.users)
       }
    });
   };

    $scope.fetchUsers()
    .then(function(users){
      console.log('users', users)
    });

  });
