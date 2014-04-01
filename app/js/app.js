'use strict';


// Declare app level module which depends on filters, and services
angular.module('blogularApp', [
  'ngRoute',
  'blogularApp.filters',
  'blogularApp.services',
  'blogularApp.directives',
  'blogularApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/posts/:postId', {templateUrl: 'partials/post-detail.html', controller: 'PostDetailCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
