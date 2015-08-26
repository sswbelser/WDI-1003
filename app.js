angular.module('resourceApp', ['ngRoute', 'ngResource', 'mainController'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
}]);