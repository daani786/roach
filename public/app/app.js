var app = angular.module('roach', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/login', {
		title: 'Login',
		templateUrl: 'partials/login.html',
		controller: 'authCtrl'
	}).when('/logout', {
		title: 'Logout',
		templateUrl: 'partials/login.html',
		controller: 'logoutCtrl'
	}).when('/signup', {
		title: 'Signup',
		templateUrl: 'partials/signup.html',
		controller: 'authCtrl'
	}).when('/dashboard', {
		title: 'Dashboard',
		templateUrl: 'partials/dashboard.html',
		controller: 'authCtrl'
	}).when('/', {
		title: 'Login',
		templateUrl: 'partials/login.html',
		controller: 'authCtrl'
	}).otherwise({
		redirectTo: '/login'
	});
}]);