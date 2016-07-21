angular.module('userModule',[])

	.factory('userServiceFactory',function($http){

		return {
			getUser:function() {
				return $http.get('https://api.github.com/users');
			}
		};
	})
	
	.directive('userPanel',function(){
		return {
			templateUrl:'js/user/user-panel.html',
			controller:function(userServiceFactory){
				userCtrl = this;

				userServiceFactory.getUser()
					.success(function(data) {
						userCtrl.list = data;
					});
			},
			controllerAs:'userCtrl'
		}
	})

	.directive('userForm',function(){
		return {
			templateUrl:'js/user/user-form.html',
			controller:function(){

			}
		}
	});

	