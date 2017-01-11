(function(){
	angular.module('MenuApp')
	.controller('categoriesController',categoriesController);
	categoriesController.$inject = ['categories'];
	function categoriesController(categories){
		var menu = this;
		menu.categories=categories.data;
		console.log("categories",categories);
		// menu.categories=[];
		// var promise = MenuDataService.getCategories();
		// console.log(promise);
		// promise.then(function(response) {
			// menu.categories = response.data;
			// console.log(response);
		// }).catch(function(error) {
			// console.log("Something went terribly wrong.");
		// });
		
	}
	
})();