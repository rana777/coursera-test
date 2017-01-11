(function(){
	'use strict';
	angular.module('MenuApp').config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		  $urlRouterProvider.otherwise('/home');
		    // *** Set up UI states ***
			  $stateProvider
			  .state('home', {
			    name: 'home',
				url: '/home',
				templateUrl: './template/home.template.html'
				
			  })			
			  // Premade list page
			  .state('categories', {
			     name: 'categories',
		  		  url: '/categories',
		   		 templateUrl: './template/categories.template.html',
		   		 controller:'categoriesController as categoriesList',
		   		 resolve:{
		   		 	categories:['MenuDataService',function(MenuDataService){
		   		 		console.log('Menu Data Service',MenuDataService);	
		   		 		return MenuDataService.getCategories();
		   		 		
		   		 	}]
		   		 }
			  })
			  .state('items', {
			    name: 'items',
				url: '/items/{shortName}',
				templateUrl: './template/items.template.html',
				controller:'itemsController as itemsList',
				resolve:{
					items:['$stateParams','MenuDataService',function($stateParams,MenuDataService ){
							console.log('MenuDataService',MenuDataService.getItems($stateParams['shortName']));
							
								return MenuDataService.getItems($stateParams['shortName']);
					}]
				}
				
			  })
			  
			  
			  
			  ;		
	}
})();
