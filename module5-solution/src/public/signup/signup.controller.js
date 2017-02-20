(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope','$window','SignUpService'];
function SignUpController($scope,$window,SignUpService) {
  //var $ctrl = this;

 $scope.menuItemsDoNotExists = false;
 $scope.saveSignUpInfo = false;
  
  $scope.submitClick = function(){
  	
 
  	var menuNumber = angular.uppercase($scope.signup.menuNumber);
  	var promise = SignUpService.getMenuItemsOfShortName(menuNumber);
  	console.log("promise",promise);
  	promise.then(function success(response){
  		$scope.menuItemsDoNotExists = false;
  		
  		$scope.signup.menuItem = response.data;
  		SignUpService.saveSignUpInfo($scope.signup);
  		$scope.saveSignUpInfo = true;
  		
  	}).catch(function (error) {
  		$scope.menuItemsDoNotExists = true;
    
  });
  	 
   
  };
}


})();
