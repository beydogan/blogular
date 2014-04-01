'use strict';

/* Controllers */

angular.module('blogularApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', 'PostService', function($scope, $http, PostService) {
	 $scope.posts = PostService.list();

  }])
  .controller('PostDetailCtrl',['$scope', '$http', '$routeParams', 'PostService', function($scope, $http, $routeParams, PostService) {
      $scope.post = PostService.get($routeParams.postId);

  }])
  .controller('PostNewCtrl',['$scope', '$http', '$location', '$routeParams','PostService', function($scope, $http, $location, $routeParams, PostService) {

	  $scope.save = function() {
	    var postId = PostService.save($scope.post);
	     $location.path('/posts/' + postId);
	  }
  }])
  .controller('PostEditCtrl',['$scope', '$http', '$location', '$routeParams','PostService', function($scope, $http, $location, $routeParams, PostService) {
    $scope.post = angular.copy(PostService.get($routeParams.postId));

    $scope.save = function() {
      var postId = PostService.save($scope.post);
       $location.path('/posts/' + postId);
    }
  }]);
