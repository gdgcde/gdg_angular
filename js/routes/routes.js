(function() {
	angular.module('routeApp',['ngRoute'])

	.config(function($routeProvider) {

		    $routeProvider
		        .when('/', {
		            templateUrl : 'view/home.html'
		        })
		        .when('/about', {
		            templateUrl : 'view/about.html'
		        })
		        .when('/event', {
		            templateUrl : 'view/event.html'
		        })
		        .otherwise({
		            redirectTo: '/'
		        });

		})

	.directive('navRoute',function() {
		return {
			template:'<nav><ul><li><a href="#/">Home</a></li><li><a href="#/about">About</a></li></ul></nav>'
		}
	})
	
})();