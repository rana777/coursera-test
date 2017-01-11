/**
 * @author rana
 */
(function(){
	angular.module('MenuApp')
	.controller('itemsController',itemsController);
	itemsController.$inject = ['items'];
	function itemsController(items){
		//console.log("here u go",items);
		var categories = this;
		categories.items = items.data.menu_items;
		//console.log("access now =", items.data.menu_items);
		

		
	}
	
})();