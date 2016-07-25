(function() {
	angular.module('userModule',[])

	.factory('userServiceFactory',function($http){

		return {
			getUser:function() {
				return $http.get('server/usuarios.json');
			},
			saveUser:function(user){
				//TODO salva el usuario
			}
		};
	})
	
	.directive('userPanel',function(userServiceFactory){
		return {
			templateUrl:'js/user/user-panel.html',
			controller:function(){
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
			controller:function(userServiceFactory){
				userControl = this;
			}
		}
	});	
})();