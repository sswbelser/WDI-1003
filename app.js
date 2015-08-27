angular.module('bookApp', ['ngRoute', 'ngResource', 'booksCtrl'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'booksCtrl'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
}]);