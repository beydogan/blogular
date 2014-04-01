'use strict';

/* Controllers */

angular.module('blogularApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('/api/posts.json').success(function(data, status) {
    	$scope.posts = data;
  	});

  }])
  .controller('PostDetailCtrl',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/api/posts/' + $routeParams.postId + '.json').success(function(data) {
      $scope.post = data;
    });

  }]);
