'use strict';

// Declare app level module which depends on filters, and services
angular.module('blogularApp', [
  'ngRoute',
  'blogularApp.filters',
  'blogularApp.services',
  'blogularApp.directives',
  'blogularApp.controllers',
  'LocalStorageModule'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/posts/new', {templateUrl: 'partials/post-new.html', controller: 'PostNewCtrl'});
  $routeProvider.when('/posts/:postId', {templateUrl: 'partials/post-detail.html', controller: 'PostDetailCtrl'});
  $routeProvider.when('/posts/:postId/edit', {templateUrl: 'partials/post-new.html', controller: 'PostEditCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
