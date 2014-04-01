'use strict';

/* Controllers */

angular.module('blogularApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('/data.json').success(function(data, status) {
    	$scope.posts = data;
  	});
  	
  }])
  .controller('MyCtrl2', [function() {

  }]);
