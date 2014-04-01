'use strict';

/* Controllers */

angular.module('blogularApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', 'PostService', function($scope, $http, PostService) {
	$scope.posts = PostService.list();

  }])
  .controller('PostDetailCtrl',['$scope', '$http', '$routeParams', 'PostService', function($scope, $http, $routeParams, PostService) {
      $scope.post = PostService.get($routeParams.postId);
    console.log("jsfadjfjsdaj")

  }])
  .controller('PostNewCtrl',['$scope', '$http', '$routeParams', 'PostService', function($scope, $http, $routeParams, PostService) {

	  $scope.save = function() {
	    Restangular.all('projects').post($scope.project).then(function(project) {
	      $location.path('/list');
	    });
	  }
  }]);
