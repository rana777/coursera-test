(function(){
	angular.module('MenuApp')
	.component('categoriesList',{
		templateUrl:'./template/categories-list.template.html',
		bindings:{
			categories:'<'
		}
	});

	
})();
