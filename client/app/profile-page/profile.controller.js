'use strict';

angular.module('tikrApp')
  .controller('ProfileCtrl', function ($scope, $http, $stateParams, $location, Auth, User) {
    /*
    //$scope.awesomeThings = [];

    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //});


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
    */
    $scope.userProfile = {};
    $scope.profilePicSrc = '';
    $scope.getUserProfile = function(){
      var githubUsername = $stateParams.username;
      var url = 'api/users/profiles/'+githubUsername;
      console.log("THIS IS THE URL LINE 30", url);
      return $http({
        method: 'GET',
        url: url
      }).
      success(function(data, status, headers, config) {
        console.log(data, "THIS IS THE USER PROFILE DATA");
        $scope.profilePicSrc = '';
        return $scope.userProfile = data;
      }).
      error(function(data, status, headers, config) {
        console.log("There has been an error", data);
        return data;
      });
    }
    $scope.getUserProfile();

    /*
    $scope.isEditable = function(){
      //check if profile page user is currently viewing is theirs. If so, we'll show "edit" buttons to edit profile fields.
      var isCurrentUser = Auth.getCurrentUser().github === undefined ? false: Auth.getCurrentUser().github.login === $stateParams.username ? true: false;
      return isCurrentUser;
    };
    */
    /*
    $http.get('/api/profiles/'+$stateParams.username)
      .success(function(data, status, headers) {
        //authToken = headers('A-Token');
        $scope.user = data;
        $scope.username = data.username;
      })
      .error(function(data, status, headers, config){
        if (status === 404){
          //$location.path("/404page");
        }
      });
    */
  });
