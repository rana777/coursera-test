(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http','$window'];
function SignUpService($http,$window) {
	console.log("SignUpService");
	var service = this;
	service.getMenuItemsOfShortName = function(shortName){
		var urlPath = "https://rana-course-five.herokuapp.com/menu_items/"+shortName+".json";
		// $http({
			// method : "GET",
        	// url : urlPath
// 			
		// }).then(function mySuccess(response){
				// console.log("mySuccess ", response);
// 			
		// }).then(function myError(response){
			// console.log("myError ", response);
// 			
		// });
		var response = $http({
			method : "GET",
        	url : urlPath
			
		});
		return response;
		
	}
	
	service.saveSignUpInfo = function(signUpInfo){
		console.log("saveSignUpInfo ", signUpInfo);
		$window.sessionStorage.setItem("signup",JSON.stringify(signUpInfo));
		
	}
	
	service.getSignUpInfo=function(){
		//return $window.sessionStorage.getItem("signup");
		var test = $window.sessionStorage.getItem("signup");
		console.log("getsignupinfo", test);
		return $window.sessionStorage.getItem("signup");
	}
	
	
	
}


})();
