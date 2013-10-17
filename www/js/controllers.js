'use strict';

/* Controllers */

function UserGridCtrl($rootScope, $scope, User) {
  //User is a service to fetch users data from server side, 
  //defined in services.js
  $scope.users = User.query();

  //the function to be called on users buttons click event
  $scope.onUserClick = function(ev) {
      alert("clicked " + angular.element(ev.srcElement).attr("value"));
  }
}
