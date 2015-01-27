'use strict';

angular.module('tikrApp')
  .controller('SearchCtrl', function ($scope, $http, $q, User) {
   $scope.users = [];
   $scope.skills = [];
   $scope.hasAllSkills = false;

   // returns a promise
   $scope.fetchUsers = function(){
     return $q(function(resolve, reject){
       $scope.users = User.search({'skills': $scope.skills, 
                                   'hasAllSkills': $scope.hasAllSkills});
       if(!$scope.users){
        reject('failed')
       } else{
        resolve($scope.users)
       }
    });
   };

    $scope.fetchUsers()
    .then(function(users){
    });

  });
