'use strict';

/* App Module */
//this is angular app which defines a module called "userdemo", registering
//userdemoFilters and userdemoServices.
//Also it defines a router which currently only has one page which is
//controlled by UserGridCtrl controller.
//
angular.module('userdemo', ['userdemoFilters', 'userdemoServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/users', {templateUrl: 'partials/user-grid.html',   controller: UserGridCtrl}).
      otherwise({redirectTo: '/users'});
}]);
