'use strict';

/* Services */
//this is to define a service called User to fetch users data from server
angular.module('userdemoServices', ['ngResource']).
    factory('User', function($resource){
  return $resource('users/users.json', {}, {
    query: {method:'GET', isArray:true}
  });
});
