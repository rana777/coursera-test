(function(){
	angular.module('MenuApp')
	.component('itemsList',{
		templateUrl:'./template/itemslist.template.html',
		bindings:{
			items:'<'
		}
	});

	
})();
