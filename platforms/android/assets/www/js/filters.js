'use strict';

/* Filters */

//defile tablearray filter to convert 1-d array to 2-d array for table display
angular.module('userdemoFilters', []).filter('tablearray', function() {
  //underscore memoize is to memorize objects if found to be same.
  //this is to return the same objects so as to prevent ng-repeat 
  //to fire $digest error which deems the returned object as changed even
  //they have same contents.
  return _.memoize(function(inputarray) {
      var tablearray = [];
      for (var i=0; i<inputarray.length; i++) {
          if(i % 3 == 0) tablearray.push([]);
          tablearray[tablearray.length-1].push(inputarray[i]);
      }

      return tablearray;
  })
});
