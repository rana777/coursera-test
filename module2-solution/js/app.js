(function(){
  angular.module("shoppingApp",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);
  
  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService){
  
  	 var toBuy = this;
  	 toBuy.buyItems = ShoppingListService.getBuyList();
  	 toBuy.putInBoughtBucket = function(itemIndex){
  	 	
  	 	ShoppingListService.addInBoughtBucket(itemIndex);
  	 
  	 }; 

  	
 
  	 
  	 
  	 
  	 	
  }
  
  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService){
  	var boughtBucket = this;
  	boughtBucket.boughtItems = ShoppingListService.getBoughtList();
  	
 	
  }

function ShoppingListService(){
	var service = this;
	var boughtList = [];
		
	var buyList = [
								{
										name : "cookies",
										quantity : 10
								},
								{
										name : "Bananas",
										quantity : 10
								},
								{
										name : "Oranges",
										quantity : 10
								},
								{
										name : "Brocolli",
										quantity : 10
								},
								{
										name : "Tomatoes",
										quantity : 10
								}	
						]; 
		service.getBuyList = function(){
			return buyList;
		}
		service.addInBoughtBucket = function(itemIndex){
			var boughtItem = buyList.splice(itemIndex,1);
			var itemPush = boughtItem[0];
			boughtList.push(itemPush);
			////let check length also here
			
		}
		service.getBoughtList = function(){
			return boughtList;
		}
		
	

	
	
}



})();
