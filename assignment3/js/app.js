(function() {

	angular.module("NarrowItDownApp", [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItemsDirective);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var menu = this;
		menu.searchTerm = "";

		var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

		promise.then(function(response) {
			menu.items = response.data;
		}).catch(function(error) {
			console.log("Something went terribly wrong.");
		});

		menu.searchMenuItems = function() {
			//console.log("searchItem = ", menu.searchTerm);
			var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

			promise.then(function(response) {
				//console.log("response search menu",response);
				//return response;
				menu.searchMenuItemsResult = response;
				if(response.length===0){
					menu.noSearchResult = true;
				}else{
					menu.noSearchResult = false;
				}
			}).catch(function(error) {
				console.log("Something went terribly wrong.");
			});

		};
		///
		//menu remove items
		menu.removeItem = function(itemIndex){
			//console.log("this remove item",this);
			
			this.searchMenuItemsResult.splice(itemIndex,1);
			
		};

	}


	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function(searchedTerm) {
			// var response = $http({
			// method: "GET",
			// url: (ApiBasePath + "/menu_items.json")
			// });
			//
			// return response;
			var searchTerm = angular.lowercase(searchedTerm);

			return $http({
				method : "GET",
				url : (ApiBasePath + "/menu_items.json")
			}).then(function(result) {
				// process result and only keep items that match
				var foundItems = [];
				
				//console.log("result",result);
				//console.log("res length", resLength);
				var des = "";
				var menuItems = result.data.menu_items;
				var resLength = menuItems.length;
				for (var i = 0; i < resLength; i++) {
					//str.indexOf("welcome");
					des = angular.lowercase(menuItems[i]["description"]);
			
					if(des.indexOf(searchTerm) >=0){
						foundItems.push(menuItems[i]);
					}
			
				}
				//console.log("FoundItems ",foundItems);
				// // return processed items
				 return foundItems;
				
			});
		};

	}


	function FoundItemsDirective(){
		var ddo = {
			templateUrl:'foundItemsTemplate.html',
			scope: {
      			items: '<',
      			onRemove:'&'
			},
			controller:FoundItemsDirectiveController,
			controllerAs: 'list',
			bindToController: true,
			transclude: true
		}
		return ddo;
		
	}
	
	function FoundItemsDirectiveController(){
		var list= this;
	}


})();
