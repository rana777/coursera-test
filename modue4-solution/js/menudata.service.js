(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService',MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
	MenuDataService.$inject = ['$http', 'ApiBasePath'];
	
	function MenuDataService($http,ApiBasePath){
		var service = this;
			service.getCategories = function(){
				return $http({
					method : "GET",
					url : (ApiBasePath + "/categories.json")
				}).then(function(result) {
					return result;
				
			});
			
		};
		
			service.getItems = function(shortName){
					return $http({
					method : "GET",
					url : (ApiBasePath + "/menu_items.json?category="+shortName)
				}).then(function(result) {
					return result;
				
			});
				
			}
	
	
	}
}

)();
